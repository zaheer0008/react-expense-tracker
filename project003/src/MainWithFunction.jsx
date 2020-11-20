import React from "react";
import ThemeContext from "./context/ThemeContext.js";
import AppTheme from "./context/Colors.js";

const Main = () => {
    const theme = React.useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    return(
        <main style = {{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
        
        }}>
            <h1>Heading 1</h1>
            <p>This is a paragraph</p>
            <button> This is a button</button>
        </main>
    );
}

export default Main;
