import {useState ,useEffect} from "react"


const COUNTDOWN_TARGET = new Date("2025-08-20T01:00:00")

const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date()
    const days = Math.floor(totalTimeLeft /(1000 * 60 * 60 * 24))
    const hours= Math.floor(totalTimeLeft /(1000 * 60 * 60 ) % 24)
    const minutes= Math.floor(totalTimeLeft /(1000 * 60 ) % 60)
    const seconds = Math.floor((totalTimeLeft/1000) % 60)
    return {days, hours, minutes, seconds}
}

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft())
        }, 1000);
        
        return () =>{
            clearInterval(timer)
        }
    }, []);

    return (
        <div>
            <h1 className='countdown-title'>Teaser Launches In -</h1>
            <div className="countdown">
                {Object.entries(timeLeft).map(([label, value],index,array) => (
                    <div className="countdown-container">
                        <div className="box" key={label}>
                            <div className="value">
                                <span>{value}</span>                 
                            </div>               
                            <span className="label">{label}</span>
                        </div>
                        <div>
                            {index < array.length - 1 && <div className="colon"><h1>:</h1></div>}
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default Countdown