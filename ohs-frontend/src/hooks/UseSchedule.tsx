import axios from 'axios';
import React, { useEffect, useState } from 'react';

type member = { name: string; rank: number; rank_name: string };
type work = { name: string; memeber: member[] };
type roster = { name: string; works: work[] };
type data = { date: string; rosters: roster[] };

type prop = { date: string };

function UseSchedule(Prop: prop) {
  // 상황근무자를 저장하는 변수
  const [wakeWorker, setWakeWorker] = useState<work[]>([]);
  // 불침번근무자를 저장하는 변수
  const [vigilWorker, setVigilWorker] = useState<work[]>([]);

  // 근무자 확인완료 시 실행 함수
  // 확인완료한 근무자 데이터 전송 구현 예정
  const confirm = (e: React.MouseEvent) => {
    e.currentTarget.innerHTML = '확인 완료';
    console.log(e.currentTarget);
    // axios
    //   .get('https://ohs.run.goorm.io/roster/')
    //   .then((response: any) => {
    //     console.log(response);
    //     setWakeWorker(response.data.rosters[0].works);
    //     setVigilWorker(response.data.rosters[1].works);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  };

  // 사용자에게 보여줄 데이터를 전송하는 함수
  const getData = async () => {
    axios
      .get('https://ohs.run.goorm.io/roster/' + Prop.date)
      .then((response: any) => {
        console.log(response);
        setWakeWorker(response.data.rosters[0].works);
        setVigilWorker(response.data.rosters[1].works);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return { wakeWorker, vigilWorker, confirm };
}

export default UseSchedule;
