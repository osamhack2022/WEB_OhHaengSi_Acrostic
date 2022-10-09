import axios from 'axios';
import React, { useEffect, useState } from 'react';

type data = {
  room: number;
  date: string;
  byRoom: (string | number)[][];
  inRoom: string[][];
};

const example_data: data = {
  room: 2,
  date: '2022-07-08',
  byRoom: [
    ['청소구역1', 1, 2, 3, 4],
    ['청소구역2', 1, 2, 3, 4],
    ['청소구역3', 1, 2, 3, 4],
    ['청소구역4', 1, 2, 3, 4],
    ['청소구역5', 1, 2, 3, 4],
  ],
  inRoom: [
    ['청소구역1', '김일병', '박이병', '이상병', '진병장'],
    ['청소구역2', '김일병', '박이병', '이상병', '진병장'],
    ['청소구역3', '김일병', '박이병', '이상병', '진병장'],
    ['청소구역4', '김일병', '박이병', '이상병', '진병장'],
    ['청소구역5', '김일병', '박이병', '이상병', '진병장'],
    ['청소구역6', '김일병', '박이병', '이상병', '진병장'],
  ],
};

function UseCleaning() {
  // 생활관 별 담당구역 데이터
  const [byRoom, setByRoom] = useState<(string | number)[][]>([]);
  // 생활관 내 담당구역 데이터
  const [inRoom, setInRoom] = useState<string[][]>([]);
  // 생활관 내 인원
  const [personnel, setPersonnel] = useState<string[]>([]);

  // 담당구역 변경 시 사용할 함수
  const chPerson = () => {};

  const getData = () => {
    axios.get('https://ohs.run.goorm.io/roster').then((response: any) => {
      console.log(response);
    });

    setByRoom(example_data.byRoom);
    setInRoom(example_data.inRoom);
    setPersonnel(example_data.inRoom[0].slice(1));
  };

  useEffect(() => {
    getData();
  }, []);

  return { byRoom: byRoom, inRoom: inRoom, personnel };
}

export default UseCleaning;
