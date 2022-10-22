import { GetStaticProps, NextPage } from "next";
import ContentCard from "../../components/common/card/ContentCard";
import Layout from "../../components/Layout/Layout";

interface ICleaningPageProps {
  cleanings: Cleaning;
}

const CleaningPage: NextPage<ICleaningPageProps> = ({ cleanings }) => {
  return (
    <Layout>
      <div className="input-group">
        <button type="button" className="btn btn-primary btn-lg offset-2">
          &lt;
        </button>
        <input
          type="text"
          className="input-group-text col-2 offset-1"
          defaultValue={"2022-10-21"}
        />
        <select className="input-group-text col-2 offset-1">
          <option>1생활관</option>
          <option>2생활관</option>
          <option>3생활관</option>
          <option>4생활관</option>
          <option>5생활관</option>
        </select>
        <button type="button" className="btn btn-primary btn-lg offset-1">
          &gt;
        </button>
      </div>
      <br />
      <ContentCard
        className="col-xl-12"
        title="생활관 별 담당구역"
      ></ContentCard>
      <ContentCard
        className="col-xl-12"
        title="생활관 내 담당구역"
      ></ContentCard>
    </Layout>
  );
};

type Cleaning = {
  id: number;
  date: string;
  byRoom: string[][];
  inRoom: string[][];
};

export const getStaticProps: GetStaticProps<ICleaningPageProps> = async (
  context
) => {
  // const cleanings: Cleaning[] = [];
  // for (let i = 1; i <= 5; i++) {
  //   const res = await fetch(
  //     `https://ohs.run.goorm.io/cleaning/${i}/2022-10-17`
  //   );
  //   cleanings.push((await res.json()).items);
  // }
  const res = await fetch(`https://ohs.run.goorm.io/cleaning/1/2022-10-17`);
  const cleanings: Cleaning = await res.json();

  return {
    props: {
      cleanings,
    },
  };
};

export default CleaningPage;
