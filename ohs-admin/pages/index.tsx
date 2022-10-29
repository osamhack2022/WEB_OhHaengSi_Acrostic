import type { NextPage } from "next";
import ContentCard from "../components/common/card/ContentCard";
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
import PersonnelReport from "../components/Stats/PersonnelReport";
import React from "react";

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
  return (
    <Layout>
      <Container fluid>
        <PageHeader title="부대 현황판" />
        <Row>
          <PersonnelReport />
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
