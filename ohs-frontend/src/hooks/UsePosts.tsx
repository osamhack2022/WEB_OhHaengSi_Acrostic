import React, { useState } from 'react';

type postDataType = {
  part: string;
  title: string;
  writer: string;
};

function UsePosts() {
  const [posts, setPosts] = useState<postDataType[]>([
    {
      part: '공지',
      title: '제목1',
      writer: '김선규',
    },
    {
      part: '공지',
      title: '제목2',
      writer: '김선규',
    },
    {
      part: '일반',
      title: '제목3',
      writer: '김수영',
    },
  ]);

  // 클릭한 게시글의 내용을 보여주는 함수
  // 서버에 post정보를 보내 가져오는 기능 추가예정
  const openPost = (selectedPost: postDataType) => {
    // getPost(selectedPost);
    const document = 'hello world!';
    return document;
  };
  return { posts, openPost };
}

export default UsePosts;
