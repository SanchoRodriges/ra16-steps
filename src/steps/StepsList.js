import React from "react";

export default function StepsList ({list, deleteStep}) {

  function date(timestamp) {
    const dateStr = new Date(timestamp);
    const day = dateStr.getDate() < 10 ? '0' + dateStr.getDate() : dateStr.getDate();
    const monthList = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    const month = monthList[dateStr.getMonth()];
    const year = dateStr.getFullYear();
    return day + '.' + month + '.' + year;
  }

  return (
    <div className="steps-list">
      <div className="steps-row">
        <div className="steps-date">Дата (ДД.ММ.ГГ)</div>
        <div className="steps-distance">Пройдено км</div>
        <div className="steps-delete">Действия</div>
      </div>

      { list.sort( (a, b) => a.date - b.date )
        .map( step =>
        <div className="steps-row" key={step.id}>
          <div className="steps-date">{date(step.date)}</div>
          <div className="steps-distance">{step.distance}</div>
          <div className="steps-delete"><span onClick={() => deleteStep(step.id)}>x</span></div>
        </div>
      )}

    </div>
  )
}