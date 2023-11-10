import { createContext } from "react";

export const ThemContext = createContext()

export function ThemProvider({ children }) {
    return (

        <ThemContext.Provider value={{ color: 'blue' }}>
            {children}
        </ThemContext.Provider>
    )


}