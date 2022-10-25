import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import ContentCard from "../../components/common/card/ContentCard";
import Layout from "../../components/Layout/Layout";
import RoomForm from "../../components/Room/RoomForm";
import { getRoom, patchRoom, Room, RoomResponse } from "../../lib/api/room";

interface IRoomDetailPageProps {
  roomInfo: RoomResponse;
}

const RoomDetailPage: NextPage<IRoomDetailPageProps> = ({ roomInfo }) => {
  const router = useRouter();

  console.log(roomInfo);
  return (
    <Layout>
      <ContentCard className="col-xl-12" title="병사 상세">
        <RoomForm
          submitAction={(data) => {
            const { id, ...body } = data;

            if (!id) {
              alert("에러발생");
              return;
            }

            patchRoom(id, body).then(() => {
              alert("수정 완료");
              router.reload();
            });
          }}
          roomInfo={roomInfo}
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

export const getStaticProps: GetStaticProps<IRoomDetailPageProps> = async (
  context
) => {
  const id = context?.params?.id;
  if (!id) {
    return {
      notFound: true,
    };
  }

  const roomInfo: RoomResponse = await getRoom(+id);

  return {
    props: {
      roomInfo,
    },
  };
};

export default RoomDetailPage;
