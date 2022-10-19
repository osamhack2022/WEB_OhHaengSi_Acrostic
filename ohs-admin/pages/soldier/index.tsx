import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import ContentCard from "../../components/common/card/ContentCard";
import Table from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";

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
            item.name,
            item.rank,
            item.status,
            item.roomId,
          ]}
        />
      </ContentCard>
    </Layout>
  );
};

type Soldier = {
  id: number;
  name: string;
  rank: number; // 1: 이병, 2: 일병, 3: 상병, 4: 병장
  status: string;
  roomId: number;
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
