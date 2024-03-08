import { useState,useContext } from "react";
import { ThemeContext } from '../App';
import '../styles/Theme.css'
const Theme = () =>{
    const { theme, toggleTheme ,monospaced, toggleMonospace} = useContext(ThemeContext);
    

    const [lightThemeSelected,setlightThemeSelected] = useState(false);
    const handleonClick = () => {
        toggleTheme();
        setlightThemeSelected(!lightThemeSelected);
    }
    return (
        <div className="theme" id="Theme" x-data="">
        	<div className="theme_colors" onClick={() => handleonClick()}>
            <div className={`theme_btn ${lightThemeSelected ? "is-selected" : ""}`}>
                <div className="_box"></div>
                <div className="_text">Light</div>
            </div>
            <div className={`theme_btn ${!lightThemeSelected ? "is-selected" : ""}`}>
        			<div className="_box"></div>
        			<div div className="_text">Dark</div>
        		</div>
        	</div>
            <div className={`theme_btn ${monospaced ? "is-selected" : ""}`} onClick={() => toggleMonospace()}>
                <div className="_box"></div>
                <div className="_text">Monospaced</div>
            </div>
        </div>
        
    );

}

export default Theme;