import { create } from 'zustand';
import { User } from './user';
import { combine } from 'zustand/middleware';

const useUserStore = create(combine({
  currentUser: null as User | null,
}, (set) => ({
  actions: {
    setUser: (agent: User) => set({ currentUser: agent }),
    removeUser: () => set({ currentUser: null }),
  },
})));

export const useCurrentUser = () => useUserStore(s => s.currentUser);
export const useUserActions = () => useUserStore(s => s.actions);
