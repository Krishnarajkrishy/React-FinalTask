import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark")
    const toggleTheme = () => {
        setTheme((preTheme)=> preTheme === 'light' ? 'dark':'light')
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={theme}>{children}</div> 
        </ThemeContext.Provider>
    )
    
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useTheme = ()=> useContext(ThemeContext)
export default ThemeProvider;