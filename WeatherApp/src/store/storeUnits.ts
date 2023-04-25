import { create } from "zustand";

const useStoreUnit = create((set) => ({
  storeUnit: 'metric',
  setStoreUnit: (storeUnit : string) => set({ storeUnit }),
}));

export default useStoreUnit;
