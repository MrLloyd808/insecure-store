import { create } from "zustand";

export const useSideBar = create((set) => ({
   visible: false,
   makeVisible: () => set((state) => ({
    visible: state.visible = true
   })),
   inVisible: () => set((state) => ({
       visible: state.visible = false
   }))
}))

