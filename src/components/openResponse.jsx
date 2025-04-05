import { useState } from "react"

function  OpenResponse({question}) {
    const [answer, setAnswer] = useState("")
    const handleAnswer = (e) => {
        setAnswer(e)
        console.log(e)
    }
    return (
        <div>
            <label> {question}</label>
            <br />
            <input 
                type="text"
                value={answer}
                onChange={(e) => handleAnswer(e.target.value)}   
            />
        </div>
    ) 
}

export default OpenResponse