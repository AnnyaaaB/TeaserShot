import { useState, useEffect } from "react"


const Teaser = () => {
    const targetDate = new Date("2025-08-20T01:00:00").getTime()
    const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime())

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime()
            const difference = targetDate - now

            if (difference <= 0){
                clearInterval(timer)
                setTimeLeft(0)
            }else{
                setTimeLeft(difference)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [targetDate])


    const days = Math.floor(timeLeft/ (1000 * 60 * 60 * 24))
      const hours = Math.floor(
                    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div className="teaser-body">
            <h1 style={{fontSize: "40px",marginBottom: "20px"}}>The Stories We Never Tell</h1>
            <h2 style={{fontSize: "20px",marginBottom: "30px",fontWeight: "lighter"}}>AntrAI - Not made to replace you. Made to relate to you </h2>
            <h1 style={{marginBottom: "30px"}}>Teaser Launches In - {days}d : {hours}h : {minutes}m : {seconds}s </h1>
            <h2 style={{marginBottom: "10px",fontWeight:"lighter"}}>Coming Soon: A Revolution in Emotional Intelligence.</h2>
            <p style={{fontSize: "15px", marginBottom: "30px"}}>A Teaser that redefines what it means for Technology to understand <span style={{fontWeight: "bold"}}>YOU</span></p>
            <h3 style={{fontSize: "15px", marginBottom: "20px", color: "blue"}}>#EmotionalAI #HumanTech #AntrAI</h3>
            
        </div>
    )
    }

export default Teaser