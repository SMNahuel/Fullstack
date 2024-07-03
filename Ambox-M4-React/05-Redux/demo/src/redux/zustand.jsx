import { devtools } from 'zustand/middleware'
import { create } from 'zustand'

const useStore = create(devtools((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
})))


export default useStore;
