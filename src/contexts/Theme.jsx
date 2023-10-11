import React from "react";
import { useState } from "react";
import { useContext } from "react";

const ThemeContext = React.createContext("default");

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("default");
    const toggleTheme = () => setTheme(theme  === "default" ? "dark" : "default");
    return (
    <ThemeContext.Provider value={ (theme, toggleTheme) }>
        {children}
    </ThemeContext.Provider>
    );
};

