import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import ContentCard from "../../../components/common/card/ContentCard";
import Table from "../../../components/common/Table";
import Layout from "../../../components/Layout/Layout";
import RosterFormForm from "../../../components/Roster/RosterFormForm";
import {
  getRosterForm,
  getRosterForms,
  RosterForm,
} from "../../../lib/api/roster";

interface IRosterFormDetailPageProps {
  rosterForm: RosterForm;
}

const RosterFormDetailPage: NextPage<IRosterFormDetailPageProps> = ({
  rosterForm,
}) => {
  return (
    <Layout>
      <ContentCard
        className="col-xl-12"
        title={`근무표 양식 - ${rosterForm.name}`}
      >
        <RosterFormForm submitAction={() => {}} defaultValues={rosterForm} />
      </ContentCard>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],

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
    props: { rosterForm },
  };
};

export default RosterFormDetailPage;
