import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import React from 'react';

import { useScheduleStore } from '@store/scheduleStore';
import './index.scss';

const ScheduleCalendar: React.FC = () => {
  const { schedules, addSchedule, removeSchedule } = useScheduleStore();

  const handleDateClick = (arg: any) => {
    const title = prompt('Enter Event Title');
    const userId = prompt('Enter User ID');
    if (title && userId) {
      // addSchedule(title, arg.dateStr, arg.dateStr, userId);
    }
  };

  return (
    <div className="w-50% schedule-calendar-container">
      <FullCalendar
        height={500}
        aspectRatio={0.5}
        plugins={[dayGridPlugin]}
        initialView="dayGridWeek"
        headerToolbar={{
          left: 'today',
          center: 'title',
          right: 'prev,next',
        }}
        events={schedules.map((schedule) => ({
          start: schedule.start,
          end: schedule.end,
          id: schedule.id,
        }))}
        eventClick={(info) => {
          if (window.confirm('Do you want to delete this event?')) {
            removeSchedule(info.event.id);
          }
        }}
      />
    </div>
  );
};

export default ScheduleCalendar;
