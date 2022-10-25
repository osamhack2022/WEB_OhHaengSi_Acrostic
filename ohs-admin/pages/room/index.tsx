import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import ContentCard from "../../components/common/card/ContentCard";
import Table from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";
import { getRooms, Room } from "../../lib/api/room";

interface IRoomPageProps {
  rooms: Room[];
}

const RoomPage: NextPage<IRoomPageProps> = ({ rooms }) => {
  return (
    <Layout>
      <ContentCard className="col-xl-12" title="병사 목록">
        <Table
          headers={["번호", "이름", "인원수"]}
          items={rooms}
          itemMapper={(item) => [
            item.id,
            <Link href={`/room/${item.id}`}>{item.name}</Link>,
            item.members.length,
          ]}
        />
      </ContentCard>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IRoomPageProps> = async (
  context
) => {
  const rooms: Room[] = await getRooms();

  return {
    props: {
      rooms,
    },
  };
};

export default RoomPage;
