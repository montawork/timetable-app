import React, { useState } from 'react';
import TimeRow from './TimeRow';
import './Timetable.css';

const Timetable = () => {
  const [data, setData] = useState({
    Monday: {
      '9:00': { subject: '', class: '', teacher: '' },
      '10:00': { subject: '', class: '', teacher: '' },
      '11:00': { subject: '', class: '', teacher: '' },
      '12:00': { subject: '', class: '', teacher: '' },
      '13:00': { subject: '', class: '', teacher: '' },
      '14:00': { subject: '', class: '', teacher: '' },
    },
    Tuesday: {
      '9:00': { subject: '', class: '', teacher: '' },
      '10:00': { subject: '', class: '', teacher: '' },
      '11:00': { subject: '', class: '', teacher: '' },
      '12:00': { subject: '', class: '', teacher: '' },
      '13:00': { subject: '', class: '', teacher: '' },
      '14:00': { subject: '', class: '', teacher: '' },
    },
    Wednesday: {
      '9:00': { subject: '', class: '', teacher: '' },
      '10:00': { subject: '', class: '', teacher: '' },
      '11:00': { subject: '', class: '', teacher: '' },
      '12:00': { subject: '', class: '', teacher: '' },
      '13:00': { subject: '', class: '', teacher: '' },
      '14:00': { subject: '', class: '', teacher: '' },
    },
    Thursday: {
      '9:00': { subject: '', class: '', teacher: '' },
      '10:00': { subject: '', class: '', teacher: '' },
      '11:00': { subject: '', class: '', teacher: '' },
      '12:00': { subject: '', class: '', teacher: '' },
      '13:00': { subject: '', class: '', teacher: '' },
      '14:00': { subject: '', class: '', teacher: '' },
    },
    Friday: {
      '9:00': { subject: '', class: '', teacher: '' },
      '10:00': { subject: '', class: '', teacher: '' },
      '11:00': { subject: '', class: '', teacher: '' },
      '12:00': { subject: '', class: '', teacher: '' },
      '13:00': { subject: '', class: '', teacher: '' },
      '14:00': { subject: '', class: '', teacher: '' },
    },
  });

  const handleCellChange = (day, time, index, newValue) => {
    const newData = { ...data };
    newData[day][time][index] = newValue;
    setData(newData);
  };

  function getColor(day) {
    switch (day) {
      case 'Monday':
        return '#ff7f7f';
      case 'Tuesday':
        return '#ffa500';
      case 'Wednesday':
        return '#fabf7f';
      case 'Thursday':
        return '#7fff7f';
      case 'Friday':
        return '#7fdfff';
      case 'Saturday':
        return '#bf7fff';
      case 'Sunday':
        return '#ff7fff';
      default:
        return '#fff';
    }
  }

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00'];

  return (
    <table className="timetable">
      <thead>
        <tr>
          <th></th>
          {days.map((day, index) => (
            <th key={index} style={{ backgroundColor: getColor(day) }}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {times.map((time, index) => (
          <TimeRow
            key={index}
            time={time}
            data={data}
            days={days}
            onCellChange={handleCellChange}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Timetable;
