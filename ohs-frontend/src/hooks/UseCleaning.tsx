import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NonceProvider } from 'react-select';

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

type prop = { room: string; date: string };

function UseCleaning(Prop: prop) {
  // 생활관 별 담당구역 데이터
  const [byRoom, setByRoom] = useState<(string | number)[][]>([]);
  // 생활관 내 담당구역 데이터
  const [inRoom, setInRoom] = useState<string[][]>([]);
  // 생활관 내 인원
  const [personnel, setPersonnel] = useState<string[]>([]);

  const selectStyle = (x: number, y: number, display: boolean) => {
    return {
      display: 'inline-block',
      zIndex: 999,
      // display : {display} ? 'inline-block': 'none',
      position: 'absolute',
      top: x,
      left: y,
    };
  };

  // 담당구역 변경 시 사용할 함수
  const chPerson = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  // 사용자에게 보여줄 데이터를 전송하는 함수
  const getData = () => {
    axios
      .get('https://ohs.run.goorm.io/roster/' + Prop.room + '/' + Prop.date)
      .then((response: any) => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      });

    setByRoom(example_data.byRoom);
    setInRoom(example_data.inRoom);
    setPersonnel(example_data.inRoom[0].slice(1));
  };

  useEffect(() => {
    getData();
  }, []);

  return { byRoom, inRoom, personnel, chPerson, selectStyle };
}

export default UseCleaning;
