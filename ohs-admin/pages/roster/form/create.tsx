import { NextPage } from "next";
import { useRouter } from "next/router";
import ContentCard from "../../../components/common/card/ContentCard";
import Layout from "../../../components/Layout/Layout";
import RosterFormForm from "../../../components/Roster/RosterFormForm";
import { createRosterForm } from "../../../lib/api/roster";

const RosterFormCreatePage: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="row justify-content-center">
        <ContentCard title="근무표 양식 추가" className="col-10">
          <RosterFormForm
            submitAction={(rawData) => {
              const { id, ...data } = rawData;
              createRosterForm(data)
                .then(() => {
                  router.push("/roster/form");
                })
                .catch(() => alert("에러발생"));
            }}
          />
        </ContentCard>
      </div>
    </Layout>
  );
};

export default RosterFormCreatePage;
