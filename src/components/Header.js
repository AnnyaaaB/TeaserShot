import AntraLogo from "./AntraLogo.jpeg"
const Header = () => {
  return (
    <div className="navbarContainer">
        <div className="navbarLogo">
            <img src = {AntraLogo} alt="Antra Logo" style={{width :'32px',
                                                            height : '32px',
                                                            marginRight: '8px'
            }}/>
            <h1 className="antraText">AntraAI</h1>
        </div>
        <button>Theme</button>
    </div>
  )
}

export default Header