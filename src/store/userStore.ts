import { IUserStore } from '@/src/types/store/userStoreType';
import InitialUserData from '@src/assets/data/user.json';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
export const useUserStore = create(
  devtools(
    persist<IUserStore>(
      (set, get) => ({
        users: InitialUserData || [],
        getUsers: () => get().users,
        getUserById: (id: string) => get().users.find((user) => user.id === id),
        getUsersByName: (name: string) =>
          get().users.filter((user) =>
            user.name.toLowerCase().includes(name.toLowerCase())
          ),
        getUserByName: (name: string) =>
          get().users.find((user) =>
            user.name.toLowerCase().includes(name.toLowerCase())
          ),
        getTotalUser: (): number => get().users?.length,
        addUser: (name: string) =>
          set((state) => ({
            users: [...state.users, { id: uuidv4(), name }],
          })),
        updateUser: (id: string, newName: string) =>
          set((state) => ({
            users: state.users.map((user) =>
              user.id === id ? { ...user, name: newName } : user
            ),
          })),
        removeUser: (id: string) =>
          set((state) => ({
            users: state.users.filter((user) => user.id !== id),
          })),
      }),
      {
        name: 'user-storage',
        getStorage: () => localStorage,
      }
    )
  )
);
