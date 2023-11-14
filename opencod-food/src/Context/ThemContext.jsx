import { createContext, useReducer } from "react";

export const ThemContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_COLOR":
            return { ...state, color: action.payload }

        default:
            break;
    }


}

export function ThemProvider({ children }) {
    const [state, dispatch] = useReducer(themeReducer, {
        color: '#58249c'
    })

    const changecolor = (color) => {
        dispatch({
            type: 'CHANGE_COLOR',
            payload: color,
        })

    }




    return (

        <ThemContext.Provider value={{ ...state,changecolor }}>
            {children}
        </ThemContext.Provider>
    )


}