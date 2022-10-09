import axios from 'axios';
import React, { useEffect, useState } from 'react';

type room = { id: number };
type members = { name: string; rank: number; rank_name: string; status: string };
type summary = { total: number; absence: number; current: number; absence_reasons: (string | number)[][] };
type data = { room: room; members: members[]; summary: summary };

function UsePersonnel(Prop: room) {
  // 생활관 내 인원의 정보를 저장하는 변수
  const [members, setMembersData] = useState<members[]>([]);
  // 총원, 현재원, 열외, 열외 내용을 저장하는 변수
  const [summary, setSummary] = useState<summary>();

  const getData = async () => {
    axios.get('https://ohs.run.goorm.io/room/' + Prop.id).then((response: any) => {
      console.log(response);
      setMembersData(response.data.members);
      setSummary(response.data.summary);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    members: members,
    summary: summary,
  };
}

export default UsePersonnel;
