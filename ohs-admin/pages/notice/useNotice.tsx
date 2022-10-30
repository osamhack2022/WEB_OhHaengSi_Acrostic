import { prepareServerlessUrl } from "next/dist/server/base-server";
import React, { useCallback, useState } from "react";
import { DEFAULT_OPTIONS, del, patch, post } from "../../lib/api/common";

export type Notice = {
  id: number;
  title: string;
  content: string;
  type: string;
};

const defaultValue = { id: 0, title: "", content: "", type: "important" };

function useNotice() {
  const [notice, setNotice] = useState<Notice>(defaultValue);

  const setDefault = () => {
    setNotice(defaultValue);
  };

  const updateNotice = async () => {
    if (notice.id) {
      patch(`/notice/${notice.id}`, notice, DEFAULT_OPTIONS).catch((error) =>
        console.log(error)
      );
      alert(`${notice.id}번 글 변경 완료`);
    } else {
      post(`/notice`, notice, DEFAULT_OPTIONS).catch((error) =>
        console.log(error)
      );
      alert("전파사항 생성 완료");
    }
    location.reload();
  };

  const delNotice = async () => {
    if (notice.id) {
      if (window.confirm("삭제하시겠습니까?")) {
        del(`/notice/${notice.id}`, DEFAULT_OPTIONS).catch((error) =>
          console.log(error)
        );
        alert(`${notice.id}번 글 삭제 완료`);
        location.reload();
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
      setNotice({ ...notice, type: e.currentTarget.value });
    } else if (type == "title") {
      setNotice({ ...notice, title: e.currentTarget.value });
    } else if (type == "content") {
      setNotice({ ...notice, content: e.currentTarget.value });
    }
  };

  return {
    notice,
    setNotice,
    setDefault,
    updateNotice,
    delNotice,
    onChange,
  };
}

export default useNotice;
