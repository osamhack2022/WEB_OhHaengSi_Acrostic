import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import ContentCard from "../../components/common/card/ContentCard";
import Table from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";
import { Soldier } from "../../lib/api/soldiers";

interface ISoldierPageProps {
  soldiers: Soldier[];
}

const SoldierPage: NextPage<ISoldierPageProps> = ({ soldiers }) => {
  return (
    <Layout>
      <ContentCard className="col-xl-12" title="병사 목록">
        <Table
          headers={["번호", "이름", "계급", "상태", "생활관"]}
          items={soldiers}
          itemMapper={(item) => [
            item.id,
            <Link href={`/soldier/${item.id}`}>{item.name}</Link>,
            item.rank,
            item.status,
            item.roomId,
          ]}
        />
      </ContentCard>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<ISoldierPageProps> = async (
  context
) => {
  const res = await fetch("http://localhost:4000/soldiers");
  const soldiers: Soldier[] = await res.json();

  return {
    props: {
      soldiers,
    },
  };
};

export default SoldierPage;
