import { GetStaticProps, NextPage } from "next";
import ContentCard from "../../components/common/card/ContentCard";
import Table from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";

interface INoticePageProps {
  notices: Notice[];
}

const NoticePage: NextPage<INoticePageProps> = ({ notices }) => {
  return (
    <Layout>
      <ContentCard className="col-xl-12" title="전파사항 목록">
        <Table
          headers={["구분", "제목", "작성자", "작성일"]}
          items={notices}
          itemMapper={(item) => [
            item.type,
            item.title,
            item.writerId,
            item.createdAt.slice(0, 10),
          ]}
        />
      </ContentCard>
      <ContentCard className="col-xl-12" title="전파사항 작성">
        <form>
          <div className="form-group">
            <label className="form-label">제목</label>
            <input
              type="text"
              className="form-control "
              id="exampleFirstName"
              placeholder="제목"
            />
          </div>
          <div className="form-group ">
            <label className="form-label">내용</label>
            <textarea
              className="form-control "
              id="exampleFirstName"
              placeholder="내용"
            />
          </div>
          <button type="button" className="btn btn-primary btn-lg col-3">
            새로 작성
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg col-3 offset-1_2"
          >
            작성
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg col-3 offset-1_2"
          >
            삭제
          </button>
        </form>
      </ContentCard>
    </Layout>
  );
};

type Notice = {
  type: string;
  title: string;
  writerId: number;
  createdAt: string;
};

export const getStaticProps: GetStaticProps<INoticePageProps> = async (
  context
) => {
  const res = await fetch("https://ohs.run.goorm.io/notice");
  const notices: Notice[] = (await res.json()).items;

  return {
    props: {
      notices,
    },
  };
};

export default NoticePage;
