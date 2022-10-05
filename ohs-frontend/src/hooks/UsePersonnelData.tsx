import axios from 'axios';
import React, { useEffect, useState } from 'react';

type room = { id: number };
type members = { name: string; rank: number; rank_name: string; status: string };
type summary = { total: number; absence: number; current: number; absence_reasons: (string | number)[][] };
type data = { room: room; members: members[]; summary: summary };

const example_data: data = {
  room: {
    id: 2,
  },
  members: [
    {
      name: '김병장',
      rank: 4,
      rank_name: '병장',
      status: '휴가',
    },
    {
      name: '박일병',
      rank: 2,
      rank_name: '일병',
      status: '근무',
    },
    {
      name: '정상병',
      rank: 3,
      rank_name: '상병',
      status: '기타',
    },
    {
      name: '이이병',
      rank: 1,
      rank_name: '이병',
      status: '기타',
    },
    {
      name: '이이병',
      rank: 1,
      rank_name: '이병',
      status: '기타',
    },
    {
      name: '이이병',
      rank: 1,
      rank_name: '이병',
      status: '기타',
    },
    {
      name: '이이병',
      rank: 1,
      rank_name: '이병',
      status: '기타',
    },
    {
      name: '이이병',
      rank: 1,
      rank_name: '이병',
      status: '기타',
    },
  ],
  summary: {
    total: 8,
    absence: 3,
    current: 5,
    absence_reasons: [
      ['근무', 1],
      ['외출', 1],
      ['외박', 1],
      ['휴가', 1],
      ['외진', 1],
      ['기타', 1],
    ],
  },
};

function UsePersonnelData() {
  // 인원현황을 저장하는 오브젝트 배열
  const [room, setRoom] = useState<room>({ id: 0 });
  const [members, setMembersData] = useState<members[]>([]);
  const [summary, setSummary] = useState<summary>();

  const getData = async () => {
    axios.get('https://ohs.run.goorm.io/room').then((response: any) => {
      console.log(response);
    });
    setRoom(example_data.room);
    setMembersData(example_data.members);
    setSummary(example_data.summary);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    room: room,
    members: members,
    summary: summary,
  };
}

export default UsePersonnelData;
