import { useContext } from "react";
import { ThemContext } from '../Context/ThemContext'



export const useTheme = () => {
    const context = useContext(ThemContext)
    if (context === undefined) {
        throw new Error('useTheme() must be used inside a ThemeProvider')
    }

    return context

}