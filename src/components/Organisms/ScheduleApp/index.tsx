import React from 'react';
import ScheduleCalendar from '@components/Molecules/ScheduleCalendar';
import './index.scss';
const ScheduleApp = () => {
  return (
    <div className="scheduled-app-container container">
      <div className="scheduled-app__user-list">{/* <UserList /> */}</div>
      <div className="scheduled-app__schedule-calendar">
        <ScheduleCalendar />
      </div>
    </div>
  );
};

export default ScheduleApp;
