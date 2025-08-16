

const Card = ({title,character,quote,description,mood,background,color,colorLight,colorDark,theme}) => {

  return (
    <div className="card-container" >
        <div className="card" style={{backgroundColor: theme === "light"?colorLight :colorDark}}>
            <h1>{title}</h1>
            <div className="card-info">
                <div className="character-info">
                    <h2>Character : {character}</h2>
                    <p>{description}</p>
                </div>
                <img className="card-img" src ={background} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Card