import { useState } from "react"
import { setAnswers } from "../utils/answersUtils";
function MultipleChoice({ id, question, options, show }) {
    const [checkbox, setCheck] = useState(
        options.length > 0 ? options.map(() => false) : []
    );

    const handleCheck = (index) => (e) => {
        const updated = checkbox.map((_, position) =>
            position === index ? e.target.checked : false);
        setCheck(updated);
        saveAnswers({answers: options[index]})
        console.log(updated);
    };

    const saveAnswers = ({answers}) => {
        setAnswers( {questionId: id,answers: answers})
    }

    return show ? (
        <div>
            <label className="question-text" >
                {question}
            </label>
            <br />
            {options.length > 0 ? (
                options.map((option, index) => (
                    <div key={`option-${index}`} className="options">
                        <label className="answer-label"
                        >{option}</label>
                        <input
                            id={`option-${index}`}
                            type='radio'
                            className="selected"
                            checked={checkbox[index]}
                            onChange={handleCheck(index)}
                        />
                    </div>
                ))
            ) : (
                <p key={`option-show`}></p>
            )}
        </div>
    ) : null
}

export default MultipleChoice