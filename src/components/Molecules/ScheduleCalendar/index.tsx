import dayGridPlugin from '@fullcalendar/daygrid';
import momentPlugin from '@fullcalendar/moment';
import FullCalendar from '@fullcalendar/react';
import React from 'react';

import { ScheduleDataType } from '@src/types/store/scheduleStoreType';
import { useScheduleStore } from '@store/scheduleStore';
import './index.scss';

interface ScheduleCalendarProps {
  onAddSchedule: (dataSchedule: ScheduleDataType) => void;
  onRemoveSchedule: (id: string) => void;
}

const ScheduleCalendar: React.FC<ScheduleCalendarProps> = ({
  onAddSchedule,
  onRemoveSchedule,
}) => {
  const { schedules } = useScheduleStore();
  return (
    <div className="w-50% schedule-calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, momentPlugin]}
        initialView="dayGridWeek"
        headerToolbar={{
          left: 'today',
          center: 'title',
          right: 'prev,next',
        }}
        events={schedules}
        eventClick={(info) => {
          console.log(info);
          if (
            window.confirm(
              `Do you want to delete this schedule? ${info.event?.extendedProps.user} - ${info.event.title}`
            )
          ) {
            onRemoveSchedule && onRemoveSchedule(info.event.id);
          }
        }}
      />
    </div>
  );
};

export default ScheduleCalendar;
