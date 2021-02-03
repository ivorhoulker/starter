import { produce } from 'immer';

import { State, StateCreator } from 'zustand';

const immer = <T extends State>(config: StateCreator<T, (_fn: (draft: T) => void) => void>): StateCreator<T> => (
    set,
    get,
    api,
) => config((fn) => set(produce(fn) as (_state: T) => T), get, api);
export { immer };
