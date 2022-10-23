import { NextPage } from "next";
import ContentCard from "../../../components/common/card/ContentCard";
import Layout from "../../../components/Layout/Layout";
import RosterFormForm from "../../../components/Roster/RosterFormForm";

const RosterFormCreatePage: NextPage = () => {
  return (
    <Layout>
      <div className="row justify-content-center">
        <ContentCard title="근무표 양식 추가">
          <RosterFormForm submitAction={() => {}} />
        </ContentCard>
      </div>
    </Layout>
  );
};

export default RosterFormCreatePage;
