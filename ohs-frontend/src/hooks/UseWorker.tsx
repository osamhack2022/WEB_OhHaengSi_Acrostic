import React, { useState } from 'react';

// 대분류, 소분류, 근무자명, 확인여부
export type workerDataType = {
  mainCategory: string;
  subCategory: string;
  class: string;
  name: string;
  check: boolean;
};

function UseWorker() {
  // 당직 근무자 데이터
  const [wakeWorkerData, setWakeWorkerData] = useState<workerDataType[]>([
    { mainCategory: '상황병', subCategory: '지휘통제실', class: '상병', name: '김선규', check: false },
    { mainCategory: '상황병', subCategory: '사이버방호실', class: '병장', name: '김사방', check: false },
    { mainCategory: '상황병', subCategory: '당직대기', class: '상병', name: '김운전', check: true },
  ]);
  // 불침번 근무자 데이터
  const [vigilWorkerData, setVigilWorkerData] = useState<workerDataType[]>([
    { mainCategory: '불침번', subCategory: '22:00~00:00', class: '일병', name: '김수영', check: true },
    { mainCategory: '불침번', subCategory: '00:00~02:00', class: '일병', name: '김수영', check: true },
    { mainCategory: '불침번', subCategory: '02:00~04:00', class: '일병', name: '김수영', check: true },
    { mainCategory: '불침번', subCategory: '04:00~06:00', class: '일병', name: '김수영', check: false },
  ]);

  // 근무자 확인완료 시 실행 함수
  // 확인완료한 근무자 데이터 전송 구현 예정
  const confirm = (e: React.MouseEvent, element: workerDataType) => {
    if (element.check) return;
    e.currentTarget.children[2].innerHTML = '확인 완료';
    element.check = true;
    console.log(element);
  };

  return { wakeWorkerData, vigilWorkerData, confirm };
}

export default UseWorker;
