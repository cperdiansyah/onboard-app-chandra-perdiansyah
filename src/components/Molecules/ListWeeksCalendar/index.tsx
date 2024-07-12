import FullCalendar from '@fullcalendar/react';
import React from 'react';
import listPlugin from '@fullcalendar/list';
import { ScheduleType } from '@/src/types/store/scheduleStoreType';

interface IListWeeksCalendar {
  events: ScheduleType[];
}

const ListWeeksCalendar: React.FC<IListWeeksCalendar> = (props) => {
  const { events } = props;
  return (
    <div className="w-50% list-week-calendar-container">
      <FullCalendar
        plugins={[listPlugin]}
        initialView="listWeek"
        headerToolbar={{
          left: 'today',
          center: 'title',
          right: 'prev,next',
        }}
        events={events}
        listDayFormat={false}
      />
    </div>
  );
};

export default ListWeeksCalendar;
