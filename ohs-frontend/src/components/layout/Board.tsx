import React, { useState } from 'react';
import styles from '../../styles/Board.module.scss';
import UseBoard from '../../hooks/UseBoard';
import { dateYMDFormat } from '../../utils/Date';

function Board(): React.ReactElement {
  const { items } = UseBoard({ date: dateYMDFormat });
  const [select, setSelect] = useState(-1);
  return (
    <div className={styles.board}>
      <h2>전파사항</h2>
      <table>
        <thead>
          <tr>
            <th style={{ width: '109px' }}>구분</th>
            <th style={{ width: '349px' }}>제목</th>
            <th style={{ width: '110px' }}>작성자</th>
            <th style={{ width: '110px' }}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                <tr
                  onClick={() => {
                    idx === select ? setSelect(-1) : setSelect(idx);
                  }}>
                  <td>{item.type}</td>
                  <td>{item.title}</td>
                  <td>{item.writerId}</td>
                  {/* <td>{item.writer.name}</td> */}
                  <td>{item.createdAt.slice(0, 10)}</td>
                </tr>
                {idx === select ? (
                  <tr className={styles.post}>
                    <td colSpan={4}>{item.content}</td>
                  </tr>
                ) : (
                  <></>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
