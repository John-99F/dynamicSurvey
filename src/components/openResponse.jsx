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
        <div >
        <label className="question-text" >
                  {question}</label>
            <br />
            <textarea
                type="text"
                className="input-text"
                value={answer}
                onChange={(e) => handleAnswer(e.target.value)}   
            />
        </div>
    ) : null
}

export default OpenResponse