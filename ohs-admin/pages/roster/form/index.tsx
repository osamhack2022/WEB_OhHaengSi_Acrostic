import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import ContentCard from "../../../components/common/card/ContentCard";
import Table from "../../../components/common/Table";
import Layout from "../../../components/Layout/Layout";
import { getRosterForms, RosterForm } from "../../../lib/api/roster";

interface IRosterFormPageProps {
  rosterForms: RosterForm[];
}

const RosterFormPage: NextPage<IRosterFormPageProps> = ({ rosterForms }) => {
  return (
    <Layout>
      <ContentCard className="col-xl-12" title="근무표 양식 목록">
        <Table
          headers={["번호", "이름", "생성일", "수정일", "활성여부"]}
          items={rosterForms}
          itemMapper={(item) => [
            item.id,
            <Link href={`${item.id}`}>{item.name}</Link>,
            new Date(item.createdAt).toLocaleString(),
            new Date(item.updatedAt).toLocaleString(),
            item.active ? "활성" : "비활성",
          ]}
        />
        <Link href="/roster/form/create">
          <button className="btn btn-primary float-right">
            근무표 양식 추가
          </button>
        </Link>
      </ContentCard>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IRosterFormPageProps> = async (
  context
) => {
  const rosterForms: RosterForm[] = await getRosterForms();

  return {
    props: { rosterForms },
  };
};

export default RosterFormPage;
