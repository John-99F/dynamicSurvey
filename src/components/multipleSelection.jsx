import { useState } from "react"
import { setAnswers } from "../utils/answersUtils";
function MultipleSelection({id, question, options , show}) {
    const [checkbox, setCheck] = useState(
        options.length > 0 ? options.map(() => false) : []
    );

    const handleCheck = (index) => (e) => {
        const updated = [...checkbox];
        updated[index] = e.target.checked;
        setCheck(updated);
        const saveOptions = options.filter((element, index) => updated[index]);
        saveAnswers({answers: saveOptions})
        console.log(updated);
    };

     const saveAnswers = ({answers}) => {
        setAnswers( {questionId: id,answers: answers})
    }
    return show ? (
        <div>
            <label>
                {question}
            </label>
            <br />
            {
                options.length > 0  ? (
                    options.map((option, index) => (
                        <div key={index}>
                            <label htmlFor={`option-${index}`}>{option}</label>
                            <input
                                type="checkbox"
                                name="option-multiple-selection"
                                checked={checkbox[index]}
                                onChange={handleCheck(index)}
                            />
                        </div>
                    ))
                ) : (
                    <p key={"options"}></p>
                )
            }
        </div>
    ) : null
}

export default MultipleSelection