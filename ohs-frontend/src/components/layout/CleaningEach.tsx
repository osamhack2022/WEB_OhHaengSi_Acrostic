import React, { useState } from 'react';
import UseCleaningData from '../../hooks/UseCleaningData';

function CleaningEach(): React.ReactElement {
  const { outDormitory, inDormitory, personnel } = UseCleaningData();

  // table의 주차별 th 생성
  const eachWeek = () => {
    const innerHtml = [];
    for (let i = 1; i < 5; i++) {
      innerHtml.push(<th key={i}>{i}주차</th>);
    }
    return innerHtml;
  };

  // 담당구역 인원변경을 위한 드롭박스 생성
  // 값 변경시 서버에 데이터 변경요청을 위한 함수 구현 예정
  const selectPerson = (name: string) => {
    return (
      <select id="selectPerson" defaultValue={name}>
        {personnel.map((element, idx) => {
          return (
            <option key={idx} value={element}>
              {element}
            </option>
          );
        })}
      </select>
    );
  };

  // 생활관 별 담당구역 Table
  const outDormitoryTable = () => {
    return (
      <div>
        <h2>생활관 별 담당구역</h2>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              {eachWeek()}
            </tr>
          </thead>
          <tbody>
            {outDormitory.map((element, idx) => {
              return (
                <tr key={idx}>
                  <th>{element.area}</th>
                  {element.dormitory.map((element, idx) => {
                    return <td key={idx}>{element}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  // 생활관 내 담당구역 Table
  const inDormitoryTable = () => {
    return (
      <div>
        <h2>생활관 내 담당구역</h2>
        <table>
          <thead>
            <tr>
              <th rowSpan={2}>구분</th>
              <th colSpan={4}>정</th>
              <th colSpan={4}>부</th>
            </tr>
            <tr>
              {eachWeek()}
              {eachWeek()}
            </tr>
          </thead>
          <tbody>
            {inDormitory.map((element, idx) => {
              return (
                <tr key={idx}>
                  <th>{element.part}</th>
                  {element.first.map((element, idx) => {
                    return <td key={idx}>{selectPerson(element)}</td>;
                  })}
                  {element.second.map((element, idx) => {
                    return <td key={idx}>{selectPerson(element)}</td>;
                  })}
                </tr>
              );
            })}
            <tr>
              <td colSpan={9}>
                <button type="submit">수정</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {outDormitoryTable()}
      {inDormitoryTable()}
    </div>
  );
}

export default CleaningEach;
