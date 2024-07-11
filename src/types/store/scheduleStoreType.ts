export interface IScheduleStore {
  schedules: Schedule[];
  getSchedules: () => Schedule[];
  getScheduleById: (id: string) => Schedule | undefined;
  addSchedule: (newSchedule: {
    start: string;
    end: string;
    userId: string;
  }) => void;
  removeSchedule: (id: string) => void;
  updateSchedule: (
    id: string,
    updatedSchedule: { start?: string; end?: string; userId: string }
  ) => void;
}
type Schedule = {
  id: string;
  start: string;
  end: string;
  userId: string;
};
