import { builtinModules } from 'module';
import React, { useState } from 'react';

type data = {
  value: string;
  label: string;
};
const option: data[] = [
  {
    value: 'working',
    label: '근무',
  },
  {
    value: 'outing',
    label: '외출',
  },
  {
    value: 'staying',
    label: '외박',
  },

  {
    value: 'vacation',
    label: '휴가',
  },
  {
    value: 'secluded',
    label: '외진',
  },
  {
    value: 'example',
    label: '기타',
  },
];

function UsePersonnelStatusSelect() {
  const [options, setOptions] = useState(option);

  const defaultValue = (value: string) => {
    let defaultValue: data = { value: 'error', label: 'error' };
    options.map(element => {
      if (element.label === value) {
        defaultValue = element;
      }
    });
    return defaultValue;
  };

  const selectStyle = {
    control: () => ({}),
    option: () => ({}),
  };

  return {
    options: options,
    defaultValue: defaultValue,
    selectStyle: selectStyle,
  };
}

export default UsePersonnelStatusSelect;
