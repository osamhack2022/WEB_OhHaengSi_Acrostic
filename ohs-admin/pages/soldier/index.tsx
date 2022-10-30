import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import ContentCard from "../../components/common/card/ContentCard";
import Table from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";
import { Soldier } from "../../lib/api/soldiers";
import { rankToString } from "../../lib/helpers/common";

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
            rankToString(item.rank),
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
  const res = await fetch("https://ohs.run.goorm.io/soldiers");
  const soldiers: Soldier[] = await res.json();

  return {
    props: {
      soldiers,
    },
  };
};

export default SoldierPage;
