import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import ContentCard from "../../../components/common/card/ContentCard";
import Table from "../../../components/common/Table";
import Layout from "../../../components/Layout/Layout";
import RosterFormForm from "../../../components/Roster/RosterFormForm";
import {
  getRosterForm,
  getRosterForms,
  RosterForm,
  updateRosterForm,
} from "../../../lib/api/roster";

interface IRosterFormDetailPageProps {
  id: number;
  rosterForm: RosterForm;
}

const RosterFormDetailPage: NextPage<IRosterFormDetailPageProps> = ({
  id,
  rosterForm,
}) => {
  const router = useRouter();
  return (
    <Layout>
      <ContentCard
        className="col-xl-12"
        title={`근무표 양식 - ${rosterForm.name}`}
      >
        <RosterFormForm
          submitAction={(data) => {
            updateRosterForm(id, data).then(() => {
              alert("수정 완료");
              router.reload();
            });
          }}
          defaultValues={rosterForm}
        />
      </ContentCard>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const forms = await getRosterForms();
  const paths = forms.map((form) => ({
    params: {
      id: form.id.toString(),
    },
  }));
  return {
    paths,

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  IRosterFormDetailPageProps
> = async (context) => {
  const id = context?.params?.id;
  if (!id) {
    return {
      notFound: true,
    };
  }

  const rosterForm: RosterForm = await getRosterForm(+id);

  return {
    props: { id: +id, rosterForm },
  };
};

export default RosterFormDetailPage;
