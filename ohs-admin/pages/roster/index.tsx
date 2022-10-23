import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import ContentCard from "../../components/common/card/ContentCard";
import Table from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";
import { getRosters, IRosterListItem } from "../../lib/api/roster";
import { dateToString } from "../../lib/helpers/common";

interface IRosterPageProps {
  rosters: IRosterListItem[];
}

const RosterPage: NextPage<IRosterPageProps> = ({ rosters }) => {
  return (
    <Layout>
      <ContentCard className="col-auto" title="근무표 목록">
        <Table
          headers={["번호", "근무일자", "기타"]}
          itemMapper={(item, index) => {
            const date = dateToString(item.targetDate);
            return [
              index + 1,
              <Link href={`/roster/${date}`}>{date}</Link>,
              "",
            ];
          }}
          items={rosters}
        />
      </ContentCard>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IRosterPageProps> = async (
  context
) => {
  const rosters = await getRosters();

  return {
    props: {
      rosters,
    },
  };
};

export default RosterPage;
