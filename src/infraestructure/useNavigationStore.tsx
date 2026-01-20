import { create } from "zustand";
import type { TView } from "../domain/types";

interface INavigationStore {
  view: TView;
  updateView: (view: TView) => void;
}

export const useNavigationStore = create<INavigationStore>((set) => ({
  view: "home",
  updateView: (view) => set({ view }),
}));
