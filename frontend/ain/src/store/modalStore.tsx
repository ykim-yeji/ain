import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface StoreState {
  headerDropDown: boolean;
  setHeaderDropDown: () => void;
  nicknameModalState: boolean;
  setNicknameModalState: () => void;
  testNum: number;
  increaseTestNum: () => void;
  navOverlay: boolean;
  toggleNavOverlay: () => void;
}

// const useModalStore = create(
//   persist<StoreState>(
//     (set, get) => ({
//       nicknameModalState: false,
//       setNicknameModalState: () => set((state) => ({ nicknameModalState: !state.nicknameModalState })),
//       testNum: 1,
//       increaseTestNum: () => set((state) => ({ testNum: state.testNum + 1 })),
//     }),
//     {
//       name: 'modal',
//       storage: createJSONStorage(() => localStorage),
//     }
//   )
// );
const useModalStore = create<StoreState>((set, get) => ({
  headerDropDown: false,
  setHeaderDropDown: () =>
    set((state) => ({
      headerDropDown: !state.headerDropDown,
    })),
  nicknameModalState: false,
  setNicknameModalState: () =>
    set((state) => ({
      nicknameModalState: !state.nicknameModalState,
      headerDropDown: false,
      navOverlay: !state.navOverlay,
    })),
  testNum: 1,
  increaseTestNum: () => set((state) => ({ testNum: state.testNum + 1 })),
  navOverlay: false,
  toggleNavOverlay: () =>
    set((state) => ({
      navOverlay: !state.navOverlay,
    })),
}));

export default useModalStore;