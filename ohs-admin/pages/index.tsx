import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import type { NextPage } from "next";
import ContentCard from "../components/common/card/ContentCard";
import SummaryCard from "../components/common/card/SummaryCard";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/Layout/Container";
import Layout from "../components/Layout/Layout";
import Row from "../components/Layout/Row";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import SoliderStatusStats from "../components/Stats/SoliderStatusStats";
import WorkShareStats from "../components/Stats/WorkShareStats";
import WorkShareStatsByRank from "../components/Stats/WorkShareStatsByRank";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Home: NextPage = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  return (
    <Layout>
      <Container fluid>
        <PageHeader title="Dashboard" />
        <Row>
          <SummaryCard
            title="총원"
            icon={solid("calendar")}
            themeName="primary"
          >
            $40,000
          </SummaryCard>
          <SummaryCard title="열외" icon={solid("dollar")} themeName="success">
            $215,000
          </SummaryCard>
          <SummaryCard
            title="현재원"
            icon={solid("clipboard-list")}
            themeName="info"
          >
            <div className="row no-gutters align-items-center">
              <div className="col-auto">
                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                  50%
                </div>
              </div>
              <div className="col">
                <div className="progress progress-sm mr-2">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </SummaryCard>
          <SummaryCard
            title="Pending Request"
            icon={solid("comment")}
            themeName="warning"
          >
            18
          </SummaryCard>
        </Row>
        <Row>
          <ContentCard title="근무 공정표(1)" className="col-6">
            <WorkShareStats />
          </ContentCard>
          <ContentCard title="근무 공정표(2)" className="col-3">
            <WorkShareStatsByRank />
          </ContentCard>
          <ContentCard title="출타 현황" className="col-3">
            <SoliderStatusStats />
          </ContentCard>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
