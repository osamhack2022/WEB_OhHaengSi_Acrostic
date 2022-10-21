import React, { useEffect, useState } from 'react';
import styles from '../../styles/Schedule.module.scss';
import UseSchedule from '../../hooks/UseSchedule';
import { dateYMDFormat } from '../../utils/Date';

function Schedule(): React.ReactElement {
  const { wakeWorker, vigilWorker, confirm } = UseSchedule({ date: dateYMDFormat });

  const addWorker = (type: string) => {
    return (
      <div className={styles.schedule}>
        {type === 'wake' ? <h2>상황병</h2> : <h2>불침번</h2>}
        <table>
          <thead>
            <tr>
              <th style={{ width: '140px' }}>구분</th>
              <th style={{ width: '140px' }}>근무자</th>
              <th style={{ width: '120px' }}>확인</th>
            </tr>
          </thead>
          <tbody>
            {(type === 'wake' ? wakeWorker : vigilWorker).map((workers, idx) => {
              return workers.memeber.map((worker, idx) => {
                return (
                  <tr key={idx}>
                    {workers.memeber.length > 1 ? (
                      idx === 0 ? (
                        <td rowSpan={workers.memeber.length}>{workers.name}</td>
                      ) : (
                        <></>
                      )
                    ) : (
                      <td>{workers.name}</td>
                    )}
                    <td>
                      {worker.rank_name} {worker.name}
                    </td>
                    {/* 기능 추가 전 임시 컴포넌트 */}
                    <td className={styles.unCheck} onClick={e => confirm(e)}>
                      <span>확인 미완료</span>
                    </td>
                    {/* 확인기능 추가 예정 */}
                    {/* {worker.check ? (
                      <td>확인 완료</td>
                    ) : (
                      <td className={styles.unCheck} onClick={e => confirm(e)}>
                        <span>확인 미완료</span>
                      </td>
                    )} */}
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {addWorker('wake')}
      {addWorker('vigil')}
    </div>
  );
}

export default Schedule;
