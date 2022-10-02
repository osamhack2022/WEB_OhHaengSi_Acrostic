import React, { useEffect, useState } from 'react';
import UseWorker, { workerDataType } from '../hooks/UseWorker';

function Schedule(): React.ReactElement {
  const { wakeWorkerData, vigilWorkerData, confirm } = UseWorker();

  const addWorker = (workers: workerDataType[]) => {
    return (
      <>
        {workers == wakeWorkerData ? <h2>상황병</h2> : <h2>불침번</h2>}
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>근무자</th>
              <th>확인</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((element, idx) => {
              return (
                <tr key={idx} onClick={e => confirm(e, element)}>
                  <td>{element.subCategory}</td>
                  <td>
                    {element.class} {element.name}
                  </td>
                  {element.check ? <td>확인 완료</td> : <td>확인 미완료</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div>
      {addWorker(wakeWorkerData)}
      {addWorker(vigilWorkerData)}
    </div>
  );
}

export default Schedule;
