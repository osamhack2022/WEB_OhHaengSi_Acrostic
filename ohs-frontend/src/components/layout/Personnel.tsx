import React from 'react';
import Select from 'react-select';
import styles from '../../styles/Personnel.module.scss';
import UsePersonnel from '../../hooks/UsePersonnel';
import UsePersonnelStatusSelect from '../../hooks/UsePersonnelSelect';
import { getCookie } from '../../utils/Cookie';

function PersonnelStatus(): React.ReactElement {
  const { members, state, chStatus } = UsePersonnel({ id: getCookie('id') });
  const { options, defaultValue, selectStyle } = UsePersonnelStatusSelect();

  // 약장 생성 함수
  const rank = (repeat: number) => {
    const rankStack: React.ReactElement[] = [];
    for (let i = 0; i < 4; i++) {
      if (4 - i <= repeat) {
        rankStack.push(<div key={'rank' + i} className={styles.ranked}></div>);
      } else {
        rankStack.push(<div key={'unRank' + i} className={styles.unRank}></div>);
      }
      if (i < 3) {
        rankStack.push(<div key={i} className={styles.rankLine}></div>);
      }
    }
    return rankStack;
  };

  // 생활관 내 자리배치 생성 함수
  const dormitorySeat = () => {
    const seats: React.ReactElement[] = [];
    for (let i = 0, j = members.length; i < 8; i++) {
      if (i < j) {
        seats.push(
          <div key={i} className={styles.person}>
            <div className={styles.box}>
              <div className={styles.rank}>{rank(members[i].rank)}</div>
            </div>
            <div className={styles.box}>{members[i].name}</div>
            <div className={styles.selectBox}>
              <Select
                defaultValue={defaultValue(members[i].status)}
                options={options}
                onChange={select => {
                  chStatus(members[i].id, select!.value);
                }}
                styles={selectStyle}
              />
            </div>
          </div>,
        );
      } else {
        seats.push(
          <div key={i} className={styles.person}>
            <div className={styles.box}></div>
            <div className={styles.box}>공석</div>
            <div className={styles.selectBox}></div>
          </div>,
        );
      }
    }
    return seats;
  };

  // 생활관 내 자리배치 생성 함수
  const dormitory = () => {
    return (
      <div className={styles.dormitory}>
        <h2>{getCookie('id')}생활관 인원현황</h2>
        {dormitorySeat()}
      </div>
    );
  };

  // 총원, 현재원, 열외원 출력 함수
  const status = () => {
    return (
      <label className={styles.status}>
        총원 {state.total} / 현재원 {state.current} / 열외 {state.absence}
      </label>
    );
  };

  // 열외사유 출력 함수
  const absenceStatus = () => {
    return (
      <div className={styles.absence}>
        <label>열외사유</label>
        <table>
          <thead>
            <tr>
              {state.absenceList.map((element, idx) => {
                return <th key={idx}>{element}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {state.absenceList.map((element, idx) => {
                return (
                  <td key={idx}>
                    {
                      members.filter(member => {
                        return member.status === element;
                      }).length
                    }
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className={styles.personnelStatus}>
      {dormitory()}
      {status()}
      {absenceStatus()}
    </div>
  );
}

export default PersonnelStatus;
