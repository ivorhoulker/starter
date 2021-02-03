import { immer } from './store';
import create from 'zustand';

export type Store = {
    count: number;
    add: (n: number) => void;
};

export const useStore = create<Store>(
    immer((set, get) => ({
        count: 0,
        add: (n) => {
            set((state) => {
                state.count += n;
            });
        },
    })),
);
export default useStore;
