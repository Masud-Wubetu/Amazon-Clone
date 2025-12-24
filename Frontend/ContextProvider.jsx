import {useState, createContext, useContext} from 'react'

const colorContext = createContext()

export const useColor = () => {
    return useContext(colorContext)
}

export const ThemeProvide = ({children}) => {
    const [color, setColor] = useState('light');

    const colorToggler = () => {
        setColor((prev) => prev === 'light' ? 'dark' : 'light');
    }

    return (
    <colorContext.provider value={{color, colorToggler}}>
        {children}
    </colorContext.provider>
    )
}

