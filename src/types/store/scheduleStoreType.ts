export interface IScheduleStore {
  schedules: ScheduleType[];
  getSchedules: () => ScheduleType[];
  getScheduleById: (id: string) => ScheduleType | undefined;
  addSchedule: (newSchedule: ScheduleType) => void;
  removeSchedule: (id: string) => void;
  updateSchedule: (id: string, updatedSchedule: ScheduleType) => void;
}
export type ScheduleType = {
  id: string;
  start: string;
  end: string;
  userId: string;
  user: string;
};
