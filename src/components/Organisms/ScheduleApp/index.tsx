import React from 'react';
import ScheduleCalendar from '@components/Molecules/ScheduleCalendar';
import UserList from '@components/Molecules/UserList';
import { useScheduleStore } from '@store/scheduleStore';
import './index.scss';
import { ScheduleDataType } from '@/src/types/store/scheduleStoreType';

interface IScheduleApp {
  onAddSchedule: (dataSchedule: ScheduleDataType) => void;
  onRemoveSchedule: (id: string) => void;
}

const ScheduleApp: React.FC<IScheduleApp> = (props) => {
  return (
    <div className="scheduled-app-container container">
      <div className="scheduled-app__user-list">
        <UserList />
      </div>
      <div className="scheduled-app__schedule-calendar">
        <ScheduleCalendar {...props} />
      </div>
    </div>
  );
};

export default ScheduleApp;
