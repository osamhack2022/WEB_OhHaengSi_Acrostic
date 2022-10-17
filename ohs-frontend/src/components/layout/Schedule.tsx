import React, { useEffect, useState } from 'react';
import styles from '../../styles/Schedule.module.scss';
import UseSchedule from '../../hooks/UseSchedule';
import { dateYMDFormat } from '../../utils/Date';

function Schedule(): React.ReactElement {
  const { roster, confirm } = UseSchedule({ date: dateYMDFormat });

  const addWorker = (name: string, idx: number) => {
    return (
      <div className={styles.schedule} key={idx}>
        <h2>{name}</h2>
        <table>
          <thead>
            <tr>
              <th style={{ width: '140px' }}>근무시간</th>
              <th style={{ width: '140px' }}>근무자</th>
              <th style={{ width: '120px' }}>확인</th>
            </tr>
          </thead>
          <tbody>
            {roster[idx].works.map((work, i) => {
              return work.members.map((worker, j) => {
                return (
                  <tr key={j}>
                    {work.members.length > 1 ? (
                      j === 0 ? (
                        <td rowSpan={work.members.length}>{work.name}</td>
                      ) : (
                        <></>
                      )
                    ) : (
                      <td>{work.name}</td>
                    )}

                    {worker ? (
                      <>
                        <td>
                          {worker!.rankName} {worker!.name}
                        </td>
                        {worker!.checked ? (
                          <td>확인 완료</td>
                        ) : (
                          <td className={styles.unCheck} onClick={() => confirm(worker!, idx, i, j)}>
                            <span>확인 미완료</span>
                          </td>
                        )}
                      </>
                    ) : (
                      <>
                        <td></td>
                        <td></td>
                      </>
                    )}
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
      {roster.map((area, idx) => {
        return addWorker(area.name, idx);
      })}
    </div>
  );
}

export default Schedule;
