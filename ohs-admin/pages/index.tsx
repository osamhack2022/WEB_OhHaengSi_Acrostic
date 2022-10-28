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
import { Bar, Pie } from "react-chartjs-2";

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
          <ContentCard title="근무 공정표(1)" className="col-6">
            <Bar
              data={{
                labels,
                datasets: [
                  {
                    label: "Dataset 1",
                    data: labels.map(() => Math.floor(Math.random() * 1000)),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                  },
                  {
                    label: "Dataset 2",
                    data: labels.map(() => Math.floor(Math.random() * 1000)),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                  },
                ],
              }}
            />
          </ContentCard>
          <ContentCard title="근무 공정표(2)" className="col-3">
            <Pie
              data={{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </ContentCard>
          <ContentCard title="근무 공정표(2)" className="col-3">
            <Pie
              data={{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                      "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </ContentCard>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
