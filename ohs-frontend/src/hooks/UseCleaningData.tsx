import React, { useState } from 'react';

type outDormitoryType = {
  area: string;
  dormitory: string[];
};

type inDormitoryType = {
  part: string;
  first: string[];
  second: string[];
};

function UseCleaningData() {
  // 생활관 별 담당구역 데이터
  const [outDormitory, setOutDormitory] = useState<outDormitoryType[]>([
    {
      area: '화장실',
      dormitory: ['1생활관', '2생활관', '3생활관', '4생활관'],
    },
    {
      area: '세면장',
      dormitory: ['1생활관', '2생활관', '3생활관', '4생활관'],
    },
    {
      area: '세탁실',
      dormitory: ['1생활관', '2생활관', '3생활관', '4생활관'],
    },
    {
      area: '분리수거장',
      dormitory: ['1생활관', '2생활관', '3생활관', '4생활관'],
    },
    {
      area: '전투화세척장',
      dormitory: ['1생활관', '2생활관', '3생활관', '4생활관'],
    },
  ]);
  // 생활관 내 담당구역 데이터
  const [inDormitory, setInDormitory] = useState<inDormitoryType[]>([
    {
      part: '쓸기',
      first: ['김병장', '이상병', '박일병', '최이병'],
      second: ['김병장', '이상병', '박일병', '최이병'],
    },
    {
      part: '닦기',
      first: ['김병장', '이상병', '박일병', '최이병'],
      second: ['김병장', '이상병', '박일병', '최이병'],
    },
  ]);
  // 생활관 내 인원
  const [personnel, setPersonnel] = useState(['김병장', '이상병', '박일병', '최이병']);
  // 담당구역 변경 시 사용할 함수
  const chPerson = () => {};
  return { outDormitory, inDormitory, personnel };
}

export default UseCleaningData;
