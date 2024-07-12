import { convertDateMoment, createSlug } from '@/src/lib/helpers';
import {
  IScheduleStore,
  ScheduleDataType,
} from '@/src/types/store/scheduleStoreType';
import InitialScheduleData from '@src/assets/data/schedule.json';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const generateTitleSchedule = (
  startDate: ScheduleDataType['start'],
  endDate: ScheduleDataType['end']
) => {
  return `${convertDateMoment(startDate, 'DD MMM')} - ${convertDateMoment(endDate, 'DD MMM')}`;
};
const parsedDateInitialScheduleData = InitialScheduleData?.map(
  (item) => ({
    ...item,
    end: convertDateMoment(item.end),
    start: convertDateMoment(item.start),
    title: generateTitleSchedule(item.start, item.end),
    className: createSlug(item.user),
  }),
  []
);

export const useScheduleStore = create(
  devtools(
    persist<IScheduleStore>(
      (set, get) => ({
        schedules: parsedDateInitialScheduleData,
        getSchedules: () => get().schedules,
        getScheduleById: (id: string) =>
          get().schedules.find((schedule) => schedule.id === id),
        addSchedule: (newSchedule: ScheduleDataType) =>
          set((state) => ({
            schedules: [
              ...state.schedules,
              {
                ...newSchedule,
                id: uuidv4(),
                end: convertDateMoment(newSchedule.end),
                start: convertDateMoment(newSchedule.start),
                title: generateTitleSchedule(
                  newSchedule.start,
                  newSchedule.end
                ),
                className: createSlug(newSchedule.user),
              },
            ],
          })),
        updateSchedule: (id: string, updatedSchedule: ScheduleDataType) =>
          set((state) => ({
            schedules: state.schedules.map((schedule) =>
              schedule.id === id
                ? { ...schedule, ...updatedSchedule }
                : schedule
            ),
          })),
        removeSchedule: (id: string) =>
          set((state) => ({
            schedules: state.schedules.filter((schedule) => schedule.id !== id),
          })),
      }),
      {
        name: 'schedule-storage',
        getStorage: () => localStorage,
      }
    )
  )
);
