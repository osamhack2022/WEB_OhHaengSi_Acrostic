import React, { useState } from 'react';
import styles from '../../styles/Cleaning.module.scss';
import UseCleaning from '../../hooks/UseCleaning';

function CleaningEach(): React.ReactElement {
  const { byRoom, inRoom, personnel } = UseCleaning();

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
  // onClick 드롭박스로 변경예정
  // const selectPerson = (name: string) => {
  //   return (
  //     <select id="selectPerson" defaultValue={name}>
  //       {personnel.map((element, idx) => {
  //         return (
  //           <option key={idx} value={element}>
  //             {element}
  //           </option>
  //         );
  //       })}
  //     </select>
  //   );
  // };

  // 생활관 별 담당구역 Table
  const byRoomTable = () => {
    return (
      <div className={styles.byRoom}>
        <h2>생활관 별 담당구역</h2>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              {eachWeek()}
            </tr>
          </thead>
          <tbody>
            {byRoom.map((area, idx) => {
              return (
                <tr key={idx}>
                  <th>{area[0]}</th>
                  {area.slice(1).map((room, idx) => {
                    return <td key={idx}>{room}</td>;
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
  const inRoomTable = () => {
    return (
      <div className={styles.outRoom}>
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
            {inRoom.map((area, idx) => {
              return (
                <tr key={idx}>
                  <th>{area[0]}</th>
                  {area.slice(1).map((person, idx) => {
                    // return <td key={idx}>{selectPerson(person)}</td>;
                    return <td key={idx}>{person}</td>;
                  })}
                  {area.slice(1).map((person, idx) => {
                    // return <td key={idx}>{selectPerson(person)}</td>;
                    return <td key={idx}>{person}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className={styles.cleaning}>
      {byRoomTable()}
      {inRoomTable()}
    </div>
  );
}

export default CleaningEach;
