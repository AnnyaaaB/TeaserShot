import { useState } from "react";
import ThemeOption from "./ThemeOption";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = ({ handleModalState, theme, setTheme }) => {
  const [dropdown, setDropDown] = useState(false);

  return (
    <div className="nav-bar">
      <div className="nav-menu">
        <button onClick={handleModalState} style={{fontSize: "16px", background: "none", border: "none", fontWeight:"600"}}>Why AntraAI?</button>
        <ThemeOption theme={theme} onClick={() => setTheme(prev => (prev === "light" ? "dark" : "light"))} />
      </div>
      <div className="nav-hamburger">
        <button onClick={() => setDropDown(prev => !prev)} style={{backgroundColor: "white", border: "none"}}><GiHamburgerMenu className="ham-icon"/></button>
        <div className={dropdown ? "dropdown clicked" : "dropdown"}>
          <li><button onClick={handleModalState} style={{fontSize: "16px", background: "none", border: "none", fontWeight:"600"}}>Why AntraAI?</button></li>
          <li><ThemeOption theme={theme} onClick={() => setTheme(prev => (prev === "light" ? "dark" : "light"))} /></li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
