import axios from 'axios';
import React, { useEffect, useState } from 'react';

type member = { name: string; rank: number; rank_name: string };
type work = { name: string; memeber: member[] };
type roster = { name: string; works: work[] };
type data = { date: string; rosters: roster[] };

function UseSchedule(Prop: { date: string }) {
  const [wakeWorker, setWakeWorker] = useState<work[]>([]);
  const [vigilWorker, setVigilWorker] = useState<work[]>([]);

  const getData = async () => {
    axios.get('https://ohs.run.goorm.io/roster/' + Prop.date).then((response: any) => {
      console.log(response);
      setWakeWorker(response.data.rosters[0].works);
      setVigilWorker(response.data.rosters[1].works);
    });
  };

  // 근무자 확인완료 시 실행 함수
  // 확인완료한 근무자 데이터 전송 구현 예정
  const confirm = (e: React.MouseEvent) => {
    e.currentTarget.innerHTML = '확인 완료';
  };

  useEffect(() => {
    getData();
  }, []);

  return { wakeWorker: wakeWorker, vigilWorker: vigilWorker, confirm };
}

export default UseSchedule;
