import { create } from "zustand";

interface StoreSavedState {
    storeSaved: SavedObject[];
    setStoreSaved: (fn: (prev: SavedObject[]) => SavedObject[]) => void;
}

interface SavedObject {
    city: string,
    degree: number,
    icon: string
}

const useStoreSaved = create<StoreSavedState>((set) => ({
    storeSaved: [],
    setStoreSaved: (fn) => set((state) => ({ storeSaved: fn(state.storeSaved) })),
}));

export default useStoreSaved;
