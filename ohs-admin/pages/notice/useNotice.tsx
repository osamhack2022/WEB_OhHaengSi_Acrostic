import { prepareServerlessUrl } from "next/dist/server/base-server";
import React, { useCallback, useState } from "react";
import { DEFAULT_OPTIONS, del, patch } from "../../lib/api/common";

export type Notice = {
  id: number;
  title: string;
  content: string;
  type: string;
};

const defaultValue = { id: 0, title: "", content: "", type: "important" };

function useNotice() {
  const [post, setPost] = useState<Notice>(defaultValue);

  const setDefault = () => {
    setPost(defaultValue);
  };

  const updateNotice = async () => {
    if (post.id) {
      const r = patch(`/notice/${post.id}`, post, DEFAULT_OPTIONS);
      alert(`${post.id}번 글 변경 완료`);
    } else {
      // 글 새로작성 추가 물어보기
      // const r = patch(`/notice`, post, DEFAULT_OPTIONS);
      // console.log(r);
    }
  };

  const delNotice = async () => {
    if (post.id) {
      if (window.confirm("삭제하시겠습니까?")) {
        del(`/notice/${post.id}`, DEFAULT_OPTIONS);
        alert(`${post.id}번 글 삭제 완료`);
      }
    } else {
      alert("전파사항을 선택하여 주십시오.");
    }
  };

  const onChange = (
    type: string,
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    if (type == "type") {
      setPost({ ...post, type: e.currentTarget.value });
    } else if (type == "title") {
      setPost({ ...post, title: e.currentTarget.value });
    } else if (type == "content") {
      setPost({ ...post, content: e.currentTarget.value });
    }
  };

  return { post, setPost, setDefault, updateNotice, delNotice, onChange };
}

export default useNotice;
