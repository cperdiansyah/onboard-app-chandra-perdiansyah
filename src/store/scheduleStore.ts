import {
  createSlug,
  endOfDay,
  generateTitleSchedule,
  startOfDay
} from '@/src/lib/helpers';
import {
  IScheduleStore,
  ScheduleDataType,
} from '@/src/types/store/scheduleStoreType';
import InitialScheduleData from '@src/assets/data/schedule.json';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const parsedDateInitialScheduleData = InitialScheduleData?.map(
  (item) => ({
    ...item,
    end: endOfDay(item.end),
    start: startOfDay(item.start),
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
        getSchedulesByIdUser: (userId: string) =>
          get().schedules.filter((schedule) => schedule.userId === userId),
        addSchedule: (newSchedule: ScheduleDataType) =>
          set((state) => ({
            schedules: [
              ...state.schedules,
              {
                ...newSchedule,
                id: uuidv4(),
                end: endOfDay(newSchedule.end),
                start: startOfDay(newSchedule.start),
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
