import React, { useState } from 'react';
import './App.css';
import Timetable from './components/Timetable';

function App() {
  const [data, setData] = useState({
    '9:00': {
      Monday: { class: 'Hello', subject: '', teacher: '' },
      Tuesday: { class: '', subject: '', teacher: '' },
      Wednesday: { class: '', subject: '', teacher: '' },
      Thursday: { class: '', subject: '', teacher: '' },
      Friday: { class: '', subject: '', teacher: '' },
    },
    '10:00': {
      Monday: { class: '', subject: '', teacher: '' },
      Tuesday: { class: '', subject: '', teacher: '' },
      Wednesday: { class: '', subject: '', teacher: '' },
      Thursday: { class: '', subject: '', teacher: '' },
      Friday: { class: '', subject: '', teacher: '' },
    },
    '11:00': {
      Monday: { class: '', subject: '', teacher: '' },
      Tuesday: { class: '', subject: '', teacher: '' },
      Wednesday: { class: '', subject: '', teacher: '' },
      Thursday: { class: '', subject: '', teacher: '' },
      Friday: { class: '', subject: '', teacher: '' },
    },
    '12:00': {
      Monday: { class: '', subject: '', teacher: '' },
      Tuesday: { class: '', subject: '', teacher: '' },
      Wednesday: { class: '', subject: '', teacher: '' },
      Thursday: { class: '', subject: '', teacher: '' },
      Friday: { class: '', subject: '', teacher: '' },
    },
    '13:00': {
      Monday: { class: '', subject: '', teacher: '' },
      Tuesday: { class: '', subject: '', teacher: '' },
      Wednesday: { class: '', subject: '', teacher: '' },
      Thursday: { class: '', subject: '', teacher: '' },
      Friday: { class: '', subject: '', teacher: '' },
    },
    '14:00': {
      Monday: { class: '', subject: '', teacher: '' },
      Tuesday: { class: '', subject: '', teacher: '' },
      Wednesday: { class: '', subject: '', teacher: '' },
      Thursday: { class: '', subject: '', teacher: '' },
      Friday: { class: '', subject: '', teacher: '' },
    },
  });

  const handleCellChange = (time, day, field, value) => {
    const newData = { ...data };
    newData[time][day][field] = value;
    setData(newData);
  };

  return (
    <div className="App">
      <h1>School Timetable</h1>
      <Timetable data={data} onCellChange={handleCellChange} />
    </div>
  );
}

export default App;
