import { create } from "zustand";

interface StoreUnitState {
  storeUnit: string;
  setStoreUnit: (storeUnit: string) => void;
}

const useStoreUnit = create<StoreUnitState>((set) => ({
  storeUnit: "metric",
  setStoreUnit: (storeUnit: string) => set({ storeUnit }),
}));

export default useStoreUnit;
