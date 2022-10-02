import React from 'react';
import UsePersonnelData from '../../hooks/UsePersonnelData';

function PersonnelStatus(): React.ReactElement {
  const { personnelData, currentPersonnelData, totalPersonnel, currentPersonnel } = UsePersonnelData();
  return (
    <div>
      {personnelData.map((element, idx) => {
        return (
          <div key={idx}>
            <label>{element.class} </label>
            <label>{element.name} </label>
            <select id="state" defaultValue={element.state}>
              <option value="근무">근무</option>
              <option value="휴가">휴가</option>
            </select>
          </div>
        );
      })}
      <p>
        총원 : {totalPersonnel}, 현재원 : {currentPersonnel}
      </p>
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
    </div>
  );
}

export default PersonnelStatus;
