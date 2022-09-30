import React from 'react';
import UsePersonnelData from '../hooks/UsePersonnelData';

function PersonnelStatus(): React.ReactElement {
  const { personnelData, currentPersonnelData, totalPersonnel, currentPersonnel } = UsePersonnelData();
  return (
    <>
      {personnelData.map((element, idx) => {
        return (
          <table key={idx}>
            <tbody>
              <tr>
                <td>관등성명</td>
                <td>{element.name}</td>
              </tr>
              <tr>
                <td>현황</td>
                <td>{element.state}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
      <p>총원 : {totalPersonnel}</p>
      <p>현재원 : {currentPersonnel}</p>
      <p>열외사유</p>
      <table>
        <thead>
          <tr>
            {Object.keys(currentPersonnelData).map((element, idx) => {
              return <td key={idx}>{element}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(currentPersonnelData).map((element, idx) => {
              return <td key={idx}>{currentPersonnelData[element]}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default PersonnelStatus;
