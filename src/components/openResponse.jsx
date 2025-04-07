import { useState } from "react"
import { setAnswers } from "../utils/answersUtils"
function  OpenResponse({id, question, show}) {
    const [answer, saveAnswer] = useState("")
    const handleAnswer = (e) => {
        saveAnswer(e)
        setAnswers({questionId: id, answers: e})
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