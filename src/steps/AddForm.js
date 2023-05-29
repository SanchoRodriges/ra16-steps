import React, { useState } from "react";
import { nanoid } from 'nanoid';

export default function AddForm ({addStep}) {

  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const changeDate = (e) => {
    setDate(e.target.value);
  }

  const changeDistance = (e) => {
    setDistance(e.target.value);
  }

  const timestamp = (date) => {
    return new Date(date).getTime();
  }

  const submitStep = (e) => {
    e.preventDefault();

    if (!date || !distance) return;

    addStep({
      date: timestamp(date),
      distance,
      id: nanoid()
    });
    setDate('');
    setDistance('');
  }

  return (
    <div>
      <form className="add-step-wrap" onSubmit={submitStep} >
        <div className="column">
          <p>Дата (ДД.ММ.ГГ)</p>
          <input type="date" name="date" value={date} onChange={changeDate} />
        </div>
        <div className="column">
          <p>Пройдено км</p>
          <input type="number" step="any" name="distance" value={distance} onChange={changeDistance} />
        </div>
        <div className="column">
          <input type="submit" value='OK' />
        </div>        
      </form>
    </div>
  )
}