import { useState } from "react";
const ThemeOption = ({theme, onClick}) => {
   
    const[themeState, setThemeState] = useState("light")

    const setTheme = () =>{
        const newTheme = themeState === "light" ? "dark" : "light";
        setThemeState(newTheme);
        document.querySelector('body').setAttribute("data-theme",newTheme)
    }

    const handleClick = () => {
      setTheme()
      onClick() 
    }

    return (
    <div onClick = {handleClick} className="theme-option" id={`theme-${theme}`}>
        <button className="theme-option" id={`theme-${theme}`}> Theme </button>
     
    </div>
  )
}

export default ThemeOption