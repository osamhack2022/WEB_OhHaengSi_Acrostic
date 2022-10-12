import axios from 'axios';
import React, { useEffect, useState } from 'react';

type prop = { id: number };

type room = { id: number; name: string };
type data = { id: number; name: string; rank: number; status: string; roomId: number; room: room };

type state = { total: number; current: number; absence: number; absenceList: string[] };

const example_data: data[] = [
  {
    id: 1,
    name: '김병장',
    rank: 4,
    status: '열중',
    roomId: 1,
    room: { id: 1, name: '1 생활관' },
  },
  {
    id: 2,
    name: '이상병',
    rank: 3,
    status: '열중',
    roomId: 1,
    room: { id: 1, name: '1 생활관' },
  },
  {
    id: 3,
    name: '박이병',
    rank: 1,
    status: '열중',
    roomId: 1,
    room: { id: 1, name: '1 생활관' },
  },
  {
    id: 4,
    name: '정일병',
    rank: 2,
    status: '열중',
    roomId: 1,
    room: { id: 1, name: '1 생활관' },
  },
  {
    id: 5,
    name: '박일병',
    rank: 2,
    status: '열중',
    roomId: 1,
    room: { id: 1, name: '1 생활관' },
  },
  {
    id: 6,
    name: '고상병',
    rank: 3,
    status: '열중',
    roomId: 1,
    room: { id: 1, name: '1 생활관' },
  },
  {
    id: 7,
    name: '조병장',
    rank: 4,
    status: '휴가',
    roomId: 1,
    room: { id: 1, name: '1 생활관' },
  },
];

function UsePersonnel(Prop: prop) {
  // 생활관 내 인원의 정보를 저장하는 변수
  const [members, setMembersData] = useState<data[]>([]);
  // 총원, 현재원, 열외, 열외 내용을 저장하는 변수
  const [state, setState] = useState<state>({ total: 0, current: 0, absence: 0, absenceList: [] });

  // 서버에 변경된 데이터를 전송하는 함수
  const chStatus = async (soldierId: number, select: string) => {
    console.log(soldierId, select);
    // axios
    //   .get('https://ohs.run.goorm.io/soldiers/' + soldierId, { params: { status: select } })
    //   .then((response: any) => {
    //     console.log(response);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  };

  // 사용자에게 보여줄 데이터를 전송하는 함수
  const getData = async () => {
    // axios
    //   .get('https://ohs.run.goorm.io/room/' + Prop.id)
    //   .then((response: any) => {
    //     console.log(response);
    //     setMembersData(response.data);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });

    // axios.them 안으로 example_data는 response로 바꿀 것
    setMembersData(example_data);
    setState(() => {
      return {
        total: example_data.length,
        current: example_data.filter(member => {
          return member.status === '열중';
        }).length,
        absence: example_data.filter(member => {
          return member.status !== '열중';
        }).length,
        absenceList: ['열중', '외출', '외박', '휴가', '외진', '기타'],
      };
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    members: members,
    state: state,
    chStatus: chStatus,
  };
}

export default UsePersonnel;
