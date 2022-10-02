import React, { useState } from 'react';
import UsePosts from '../../hooks/UsePosts';

function Board(): React.ReactElement {
  const { posts, openPost } = UsePosts();
  const [select, setSelect] = useState(-1);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>구분</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((element, idx) => {
            return (
              <React.Fragment key={idx}>
                <tr
                  key={idx}
                  onClick={() => {
                    idx === select ? setSelect(-1) : setSelect(idx);
                  }}>
                  <td>{element.part}</td>
                  <td>{element.title}</td>
                  <td>{element.writer}</td>
                </tr>
                {idx === select ? (
                  <tr>
                    <td colSpan={3}>{openPost(element)}</td>
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
