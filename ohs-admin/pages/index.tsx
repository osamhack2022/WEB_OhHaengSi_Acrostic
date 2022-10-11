import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import ContentCard from "../components/common/card/ContentCard";
import SummaryCard from "../components/common/card/SummaryCard";
import PageHeader from "../components/common/PageHeader";
import Container from "../components/Layout/Container";
import Layout from "../components/Layout/Layout";
import Row from "../components/Layout/Row";
import withCredential from "../lib/auth/withCredential";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container fluid>
        <PageHeader title="Dashboard" />
        <Row>
          <SummaryCard
            title="Earnings (Monthly)"
            icon={solid("calendar")}
            themeName="primary"
          >
            $40,000
          </SummaryCard>
          <SummaryCard
            title="Earnings (Annual)"
            icon={solid("dollar")}
            themeName="success"
          >
            $215,000
          </SummaryCard>
          <SummaryCard
            title="Task"
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
          <ContentCard title="Earnings Overview" className="col-xl-8 col-lg-7">
            <div className="chart-area">
              <canvas id="myAreaChart" />
            </div>
          </ContentCard>
          <ContentCard title="Earnings Overview" className="col-xl-4 col-lg-5">
            <div className="chart-pie pt-4 pb-2">
              <canvas id="myPieChart" />
            </div>
            <div className="mt-4 text-center small">
              <span className="mr-2">
                <FontAwesomeIcon
                  icon={regular("laugh-wink")}
                  className="fas fa-circle text-primary"
                />{" "}
                Direct
              </span>
              <span className="mr-2">
                <FontAwesomeIcon
                  icon={regular("laugh-wink")}
                  className="fas fa-circle text-success"
                />{" "}
                Social
              </span>
              <span className="mr-2">
                <FontAwesomeIcon
                  icon={regular("laugh-wink")}
                  className="fas fa-circle text-info"
                />{" "}
                Referral
              </span>
            </div>
          </ContentCard>
        </Row>
      </Container>
    </Layout>
  );
};

export default withCredential(Home);
