import axios from 'axios';
import React, { useEffect, useState } from 'react';

type member = { rosterId: number; name: string; rankName: string; checked: boolean };
type work = { name: string; members: (member | null)[] };
type roster = { name: string; works: work[] };
type data = { date: string; roster: roster[] };

type prop = { date: string };

function UseSchedule(Prop: prop) {
  // 근무표를 저장하는 변수
  const [roster, setRoster] = useState<roster[]>([]);

  // 근무자 확인완료 시 실행 함수
  const confirm = (worker: member, idx: number, i: number, j: number) => {
    axios
      .patch('https://ohs.run.goorm.io/roster/' + worker.rosterId, { checked: true })
      .then((response: any) => {
        console.log(response);

        worker.checked = true;
        roster[idx].works[i].members[j] = worker;
        setRoster(prev => [...prev]);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // 사용자에게 보여줄 데이터를 전송하는 함수
  const getData = async () => {
    axios
      .get('https://ohs.run.goorm.io/roster/2022-10-17')
      // .get('https://ohs.run.goorm.io/roster/' + Prop.date)
      .then((response: any) => {
        console.log(response);
        setRoster(response.data.roster);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return { roster, confirm };
}

export default UseSchedule;
