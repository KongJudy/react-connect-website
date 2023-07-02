import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Calendar } from 'react-calendar';
import './userCalendar.css';

const UserCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <div className='calendarContainer'>
        <Calendar
          onChange={setDate}
          value={date}
          minDate={new Date(2020, 12, 31)} // will not allow date before 1st July 2015
        />
        <div className='selectedDate'>
          <span>Selected Date:</span> {date.toDateString()}
        </div>
      </div>
    </div>
  );
};

export default UserCalendar;
