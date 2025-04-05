import { useState } from "react"

function  OpenResponse({question, show}) {
    const [answer, setAnswer] = useState("")
    const handleAnswer = (e) => {
        setAnswer(e)
        console.log(e)
    }
    return show ? (
        <div>
            <label> {question}</label>
            <br />
            <input 
                type="text"
                value={answer}
                onChange={(e) => handleAnswer(e.target.value)}   
            />
        </div>
    ) : null
}

export default OpenResponse