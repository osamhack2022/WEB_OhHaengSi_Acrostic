import { GetStaticProps, NextPage } from "next";
import { prepareServerlessUrl } from "next/dist/server/base-server";
import React from "react";
import ContentCard from "../../components/common/card/ContentCard";
import Table from "../../components/common/Table";
import Layout from "../../components/Layout/Layout";
import useNotice, { Notice } from "./useNotice";

interface INoticePageProps {
  notices: Notice[];
}

const NoticePage: NextPage<INoticePageProps> = ({ notices }) => {
  const { post, setPost, setDefault, updateNotice, delNotice, onChange } =
    useNotice();
  
  return (
    <Layout>
      <ContentCard className="col-xl-12" title="전파사항 작성">
        <form>
          <div className="form-group">
            <label className="form-label">구분</label>
            <select
              className="form-control "
              defaultValue={post.type}
              onChange={(e) => onChange("type", e)}
            >
              <option>important</option>
              <option>normal</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">제목</label>
            <input
              type="text"
              className="form-control "
              value={post.title}
              onChange={(e) => onChange("title", e)}
            />
          </div>
          <div className="form-group ">
            <label className="form-label">내용</label>
            <textarea
              className="form-control "
              value={post.content}
              onChange={(e) => onChange("content", e)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg col-3"
            onClick={setDefault}
          >
            새로 작성
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg col-3 offset-1_2"
            onClick={updateNotice}
          >
            작성
          </button>
          <button
            type="button"
            className="btn btn-danger btn-lg col-3 offset-1_2"
            onClick={delNotice}
          >
            삭제
          </button>
        </form>
      </ContentCard>
      <ContentCard className="col-xl-12" title="전파사항 목록">
        <Table
          headers={["번호", "구분", "제목"]}
          items={notices}
          itemMapper={(item) => [
            item.id,
            item.type,
            <div onClick={() => setPost(item)}>{item.title}</div>,
          ]}
        />
      </ContentCard>
    </Layout>
  );
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
