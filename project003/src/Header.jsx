import React from "react";
import AppTheme from "./context/Colors";
import ThemeContext from "./context/ThemeContext";
import ThemeToggler from "./ThemeTogller";

const headerStyles={
    padding: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}


const Header=()=>{
    const theme = React.useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];
    return(
        <header style={headerStyles}>
            <h1>Context API</h1>
            <ThemeToggler />
        </header>
    );
}

export default Header;