import axios from 'axios';
import React, { useEffect, useState } from 'react';

type prop = { id: number };

type data = { id: number; name: string; rank: number; status: string; roomId: number };

type state = { total: number; current: number; absence: number; absence_reasons: string[] };

function UsePersonnel(Prop: prop) {
  // 생활관 내 인원의 정보를 저장하는 변수
  const [members, setMembersData] = useState<data[]>([]);
  // 총원, 현재원, 열외, 열외 내용을 저장하는 변수
  const [state, setState] = useState<state>({ total: 0, current: 0, absence: 0, absence_reasons: [] });

  // 서버에 변경된 데이터를 전송하는 함수
  const chStatus = async (soldier: data, state: string) => {
    const chSoldier = {
      name: soldier.name,
      rank: soldier.rank,
      roomId: soldier.roomId,
      status: state,
    };
    axios
      .patch('https://ohs.run.goorm.io/soldiers/' + soldier.id, chSoldier)
      .then((response: any) => {
        console.log(response);
        getData();
      })
      .catch(e => {
        console.log(e);
      });
  };

  // 사용자에게 보여줄 데이터를 전송하는 함수
  const getData = async () => {
    axios
      .get('https://ohs.run.goorm.io/room/' + Prop.id)
      .then((response: any) => {
        console.log(response);
        setMembersData(response.data.room.members);
        setState(response.data.summary);
      })
      .catch(e => {
        console.log(e);
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
