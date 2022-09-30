import React, { useState } from 'react';
import { strNumDic } from '../utils/DictionaryType';

type personnelDataType = { name: string; state: string };

function UsePersonnelData() {
  // 인원현황을 저장하는 오브젝트 배열
  const [personnelData, setPersonnelData] = useState<personnelDataType[]>([
    { name: '김선규', state: '근무' },
    { name: '김수영', state: '휴가' },
  ]);
  // 현재원의 상태를 {종류:인원}으로 저장하는 오브젝트
  const [currentPersonnelData, setCurrentPersonnelData] = useState<strNumDic>(() => {
    const currentData: strNumDic = {};
    personnelData.map((element, idx) => {
      if (currentData[element.state]) {
        currentData[element.state] += 1;
      } else {
        currentData[element.state] = 1;
      }
    });
    return currentData;
  });
  // 총원을 저장하는 변수
  const [totalPersonnel, setTotalPersonnel] = useState(personnelData.length);
  // 현재원을 저장하는 변수
  const [currentPersonnel, setCurrentPersonnel] = useState(() => {
    let count = 0;
    personnelData.map(element => {
      if (element.state !== '근무') {
        count += 1;
      }
    });
    return count;
  });
  return {
    personnelData: personnelData,
    currentPersonnelData: currentPersonnelData,
    totalPersonnel: totalPersonnel,
    currentPersonnel: currentPersonnel,
  };
}

export default UsePersonnelData;
