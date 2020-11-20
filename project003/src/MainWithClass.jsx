import React from "react";
import ThemeContext from "./context/ThemeContext";
import AppTheme from "./context/Colors";

class Main extends React.Component{
    constructor(){
        super();
    }

    static contextType=ThemeContext;
    render(){
            
            const currentTheme = AppTheme[this.context[0]];
            return( 
                    <main style={{
                        padding:"1rem",
                        backgroundColor: `${currentTheme.backgroundColor}`,
                        color: `${currentTheme.textColor}`
                    }}>
                        <h1>Heading 1</h1>
                        <p>This is a paragraph.</p>
                        <button>A Button</button>
                    </main>
        );
    }
}
export default Main;