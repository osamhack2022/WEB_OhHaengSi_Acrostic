import { builtinModules } from 'module';
import React, { useState } from 'react';

type data = {
  value: string;
  label: string;
};
const option: data[] = [
  { value: '열중', label: '열중' },
  { value: '근무', label: '근무' },
  { value: '외출', label: '외출' },
  { value: '외박', label: '외박' },
  { value: '휴가', label: '휴가' },
  { value: '외진', label: '외진' },
  { value: '기타', label: '기타' },
];

function UsePersonnelStatusSelect() {
  // 인원의 현재상태 종류를 저장하는 변수
  const [options, setOptions] = useState(option);

  // Select box의 기본값 설정함수
  const defaultValue = (value: string) => {
    let defaultValue: data = { value: 'error', label: 'error' };
    options.map(element => {
      if (element.label == value) {
        defaultValue = element;
      }
    });
    return defaultValue;
  };

  // Select box의 style을 담는 변수
  const selectStyle = {
    option: () => ({
      '&:hover': {
        color: 'white',
        backgroundColor: '#4287f5',
      },
    }),
  };

  return {
    options: options,
    defaultValue: defaultValue,
    selectStyle: selectStyle,
  };
}

export default UsePersonnelStatusSelect;
