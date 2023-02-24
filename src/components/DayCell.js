import React, { useState } from 'react';

function DayCell({ value, day, time, index, onCellChange }) {
  const [val, setVal] = useState({ subject: '', class: '', teacher: '' });

  const handleInputChange = (e) => {
    setVal((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
    onCellChange(day, time, index, val);
  };

  return (
    <td className={day}>
      <input
        type="text"
        value={val.subject}
        name="subject"
        onChange={handleInputChange}
        placeholder="Subject"
      />
      <br />
      <input
        type="text"
        value={val.class}
        name="class"
        onChange={handleInputChange}
        placeholder="Class"
      />
      <br />
      <input
        type="text"
        value={val.teacher}
        name="teacher"
        onChange={handleInputChange}
        placeholder="Teacher"
      />
    </td>
  );
}

export default DayCell;
