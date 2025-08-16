import Body from "./components/Body";
import AntraLogo from "./components/pictures/AntraLogo.jpeg"
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import TeaserStories from "./components/TeaserStories";
import { useState } from "react";


function App() {

  const [modalState, setModalState] = useState(false)
  const [theme, setTheme] = useState("light");



  const handleModalState = () =>{
    const newState = modalState === false? true:false
    setModalState(newState)
  }


  return (
    <div className="app-container" >
      <header>
        <div className="nav-logo">
            <img style={{width:"48px", height: "48px"}} src={AntraLogo} alt="Antra Logo"/>
            <h2 style={{fontSize: "24px"}}>AntrAI</h2>
        </div>
         <NavBar handleModalState={handleModalState} theme ={theme} setTheme={setTheme}/>
      </header>
      <main>
        <div className="hero-section">
          <Body/>
        </div>
        <div>
        <TeaserStories theme = {theme}/>
        </div>
      </main>
      <div >
        {modalState && (
        <Modal handleModalState = {handleModalState}/>
        )}
      </div>
    </div>
  );
}

export default App;
