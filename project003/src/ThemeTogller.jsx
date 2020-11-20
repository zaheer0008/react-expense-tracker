import React from "react";
import ThemeContext from "./context/ThemeContext";

const themeTogglerStyle={
    cursor: "pointer"
}

const ThemeToggler=()=>{
    const [ThemeMode, setThemeMode] = React.useContext(ThemeContext);
    return(
        <div style={themeTogglerStyle} onClick={()=>{setThemeMode(ThemeMode === "light"? "dark": "light")}}>
            <span title="Switch Theme">
                {ThemeMode === "light"? "🌙" : "☀️"}
            </span>
        </div>
    )
}

export default ThemeToggler;