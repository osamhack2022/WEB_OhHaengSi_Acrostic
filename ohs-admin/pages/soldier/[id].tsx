import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import ContentCard from "../../components/common/card/ContentCard";
import Layout from "../../components/Layout/Layout";
import SoldierForm from "../../components/Soldier/SoldierForm";

import { getSoldier, patchSoldier, Soldier } from "../../lib/api/soldiers";

interface ISoldierDetailPageProps {
  soldier: Soldier;
}

const SoldierDetailPage: NextPage<ISoldierDetailPageProps> = ({ soldier }) => {
  const router = useRouter();

  return (
    <Layout>
      <ContentCard className="col-xl-12" title="병사 상세">
        <SoldierForm
          submitAction={(data) => {
            const { id, ...body } = data;

            if (!id) {
              alert("에러발생");
              return;
            }

            patchSoldier(id, body).then(() => {
              alert("수정 완료");
              router.reload();
            });
          }}
          defaultValues={soldier}
          submitButton={
            <button className="btn btn-warning btn-block btn-lg">수정</button>
          }
        />
      </ContentCard>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ISoldierDetailPageProps> = async (
  context
) => {
  const id = context?.params?.id;
  if (!id) {
    return {
      notFound: true,
    };
  }

  const soldier: Soldier = await getSoldier(+id);

  return {
    props: {
      soldier,
    },
  };
};

export default SoldierDetailPage;
