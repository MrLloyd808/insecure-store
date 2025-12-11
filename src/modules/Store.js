import { create } from "zustand";
import { persist } from "zustand/middleware";

// sidebar state
export const useSideBar = create((set) => ({
   visible: false,
   makeVisible: () => set((state) => ({
    visible: true
   })),
   inVisible: () => set((state) => ({
       visible: false
   }))
}))

// theme switcher
export const useTheme = create(
    persist(
        (set) => ({
           mode: 'dark',
           themeDark: () => set((state) => ({
            mode: "dark"
        })),
        themeLight: () => set((state) => ({
            mode: "light"
        })),
        themeForest: () => set((state) => ({
            mode: "forest"
        })),
        themeSynthwave: () => set((state) => ({
            mode: "synthwave"
        }))
        }),
        {
            name: "theme-mode"
        }
    )
)