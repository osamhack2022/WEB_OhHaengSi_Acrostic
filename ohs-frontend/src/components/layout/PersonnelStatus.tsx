import React from 'react';
import Select from 'react-select';
import styles from '../../styles/PersonnelStatus.module.scss';
import UsePersonnelData from '../../hooks/UsePersonnelData';
import UsePersonnelStatusSelect from '../../hooks/UsePersonnelStatusSelect';

function PersonnelStatus(): React.ReactElement {
  const { room, members, summary } = UsePersonnelData();
  const { options, defaultValue, selectStyle } = UsePersonnelStatusSelect();

  const dormitory = () => {
    return (
      <div className={styles.dormitory}>
        <h2>{room.id} 생활관</h2>
        {members.map((element, idx) => {
          return (
            <div key={idx} className={styles.person}>
              <label>{element.rank_name} </label>
              <label>{element.name} </label>
              <div className={styles.selectBox}>
                {/* styles={selectStyle} 로 select styling하기*/}
                <Select defaultValue={defaultValue(element.status)} options={options} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const status = () => {
    return (
      <label className={styles.status}>
        총원 {summary?.total} / 현재원 {summary?.current} / 열외 {summary?.absence}
      </label>
    );
  };

  const absenceStatus = () => {
    return (
      <div className={styles.absence}>
        <label>열외사유</label>
        <table>
          <thead>
            <tr>
              {summary?.absence_reasons.map((element, idx) => {
                return <th key={idx}>{element[0]}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {summary?.absence_reasons.map((element, idx) => {
                return <td key={idx}>{element[1]}</td>;
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
