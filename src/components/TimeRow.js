import React from 'react';
import DayCell from './DayCell';

function TimeRow({ time, data, onCellChange }) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <tr>
      <td>{time}</td>
      {days.map((day) => (
        <DayCell
          key={day}
          value={data[day][time]}
          day={day}
          time={time}
          index={time}
          onCellChange={onCellChange}
        />
      ))}
    </tr>
  );
}

export default TimeRow;
