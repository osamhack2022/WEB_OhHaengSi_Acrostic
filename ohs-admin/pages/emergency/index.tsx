import moment from "moment";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import ContentCard from "../../components/common/card/ContentCard";
import Table from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";
import { Emergency, getEmergencies } from "../../lib/api/emergency";
import { getRooms, Room } from "../../lib/api/room";

interface IEmergencyPageProps {
  emergencies: Emergency[];
}

const EmergencyPage: NextPage<IEmergencyPageProps> = ({ emergencies }) => {
  return (
    <Layout>
      <ContentCard className="col-xl-12" title="긴급 발생 목록">
        <Table
          headers={["번호", "발생 생활관", "발생 일시"]}
          items={emergencies}
          itemMapper={(item) => [
            item.id,
            item.room.name,
            moment(item.createdDate).format("YYYY-MM-DD hh:mm:ss"),
          ]}
        />
      </ContentCard>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<IEmergencyPageProps> = async (
  context
) => {
  const emergencies: Emergency[] = await getEmergencies();

  return {
    props: {
      emergencies,
    },
  };
};

export default EmergencyPage;
