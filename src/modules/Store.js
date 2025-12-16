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
           mode: 'sunset',
           themeDark: () => set(() => ({
            mode: "dark"
        })),
        themeLight: () => set(() => ({
            mode: "light"
        })),
        themeForest: () => set(() => ({
            mode: "forest"
        })),
        themeSynthwave: () => set(() => ({
            mode: "synthwave"
        })),
        themeLuxury: () => set(() => ({
            mode: "luxury"
        })),
        themeCupcake: () => set(() => ({
            mode: 'cupcake'
        })),
        themeBlack: () => set(() => ({
            mode: "black"
        })),
        themeCyberpunk: () => set(() => ({
            mode: 'cyberpunk'
        })),
        themeAqua: () => set(() => ({
            mode: "aqua"
        })),
        themeAbyss: () => set(() => ({
            mode: "abyss"
        })),
        themeCoffee: () => set(() => ({
            mode: "coffee"
        })),
        themeRetro: () => set(() => ({
            mode: "retro"
        })),
        themeCaramel: () => set(() => ({
            mode: "caramellatte"
        })),
        themeSunset: () => set(() => ({
            mode: "sunset"
        }))
        }),
        {
            name: "theme-mode"
        }
    )
)

export const useCart = create(persist((set, get) => ({
    cart: [],
    AddToCart: (product) => { 
        const mycart = get().cart
        const exists = mycart.find(item => item.id === product.id)
        if(exists) return 
        set({
        cart: [ ...mycart, {...product}]
    })} ,
    ResetCart: () => set({
        cart: []
    }),
    RemoveFromCart: (product) => set({
        cart: get().cart.filter(item => item.id !== product.id)
    })
}), 
{
    name: "store-cart"
}))

