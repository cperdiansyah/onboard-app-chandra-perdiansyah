import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { IScheduleStore } from '@/src/types/store/scheduleStoreType';
import InitialScheduleData from '@src/assets/data/schedule.json';

export const useScheduleStore = create(
  devtools(
    persist<IScheduleStore>(
      (set, get) => ({
        schedules: InitialScheduleData || [],
        getSchedules: () => get().schedules,
        getScheduleById: (id: string) =>
          get().schedules.find((schedule) => schedule.id === id),
        addSchedule: (newSchedule: {
          start: string;
          end: string;
          userId: string;
          user: string;
        }) =>
          set((state) => ({
            schedules: [...state.schedules, { id: uuidv4(), ...newSchedule }],
          })),
        updateSchedule: (
          id: string,
          updatedSchedule: { start?: string; end?: string; userId: string }
        ) =>
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
