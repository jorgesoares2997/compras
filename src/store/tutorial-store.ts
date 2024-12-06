import { create } from "zustand";

interface CarrouselState {
  runTour: boolean;
  isTourVisible: boolean;
  isClient: boolean;
  setRunTour: (value: boolean) => void;
  setIsTourVisible: (value: boolean) => void;
  setIsClient: (value: boolean) => void;
}

export const useCarrouselStore = create<CarrouselState>((set) => ({
  runTour: true,
  isTourVisible: false,
  isClient: false,
  setRunTour: (value) => set({ runTour: value }),
  setIsTourVisible: (value) => set({ isTourVisible: value }),
  setIsClient: (value) => set({ isClient: value }),
}));