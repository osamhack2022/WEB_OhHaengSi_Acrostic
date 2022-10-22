import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import ContentCard from "../../../components/common/card/ContentCard";
import Table from "../../../components/common/Table";
import Layout from "../../../components/Layout/Layout";
import { getRosterForms, RosterForm } from "../../../lib/api/roster";

interface IRosterFormDetailPageProps {
  rosterForms: RosterForm[];
}

const RosterFormDetailPage: NextPage<IRosterFormDetailPageProps> = ({
  rosterForms,
}) => {
  return (
    <Layout>
      <ContentCard className="col-xl-12" title="근무표 양식 목록"></ContentCard>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<
  IRosterFormDetailPageProps
> = async (context) => {
  const rosterForms: RosterForm[] = await getRosterForms();

  return {
    props: { rosterForms },
  };
};

export default RosterFormDetailPage;
