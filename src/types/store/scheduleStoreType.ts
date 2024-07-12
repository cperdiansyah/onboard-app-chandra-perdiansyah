export interface IScheduleStore {
  schedules: ScheduleType[];
  getSchedules: () => ScheduleType[];
  getScheduleById: (id: string) => ScheduleType | undefined;
  addSchedule: (newSchedule: ScheduleDataType) => void;
  removeSchedule: (id: string) => void;
  updateSchedule: (id: string, updatedSchedule: ScheduleDataType) => void;
}
export type ScheduleType = {
  id: string;
} & ScheduleDataType;

export type ScheduleDataType = {
  userId: string;
  start: Date | undefined | string;
  end: Date | undefined | string;
  user: string;
  title?: string;
  className?: string;
};
