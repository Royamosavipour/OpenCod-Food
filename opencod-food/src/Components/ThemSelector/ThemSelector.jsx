import React from 'react'
import { ThemContext } from '../../Context/ThemContext'
import './ThemSelector.css'
import { useTheme } from '../../hooks/useThem'


const themColors = [
    '#58249c', '#249c6b', '#b70233'
]

export default function ThemSelector() {

    const { changecolor } = useTheme()



    return (
        <div className="theme-selector">
            <div className="theme-buttons">

                {themColors.map(color => (
                    <div key={color}
                        onClick={() => changecolor(color)}
                        style={{ background: color }} />
                ))}

            </div>
        </div>
    )
}
