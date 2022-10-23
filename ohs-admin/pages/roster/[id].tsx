import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import ContentCard from "../../components/common/card/ContentCard";
import Layout from "../../components/Layout/Layout";
import RosterForm from "../../components/Roster/RosterForm";
import {
  getRoster,
  getRosters,
  IRosterResponse,
  updateRoster,
} from "../../lib/api/roster";
import { dateToString } from "../../lib/helpers/common";

interface IRosterDetailPageProps {
  roster: IRosterResponse;
}

const RosterDetailPage: NextPage<IRosterDetailPageProps> = ({ roster }) => {
  const router = useRouter();

  return (
    <Layout>
      <ContentCard className="col-xl-12" title="근무표 상세">
        <RosterForm
          submitAction={(data) => {
            data.roster;
            console.log(data);
            // updateRoster(data);
          }}
          defaultValues={roster}
        />
      </ContentCard>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const rosters = await getRosters();
  const paths = rosters.map((item) => ({
    params: { id: dateToString(item.targetDate) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IRosterDetailPageProps> = async (
  context
) => {
  const id = context?.params?.id;
  if (!id) {
    return {
      notFound: true,
    };
  }

  const roster = await getRoster(id as string);

  return {
    props: {
      roster,
    },
  };
};

export default RosterDetailPage;
