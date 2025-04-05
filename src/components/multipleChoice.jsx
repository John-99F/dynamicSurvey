import { useState } from "react"
function MultipleChoice({ question, options, show }) {
    const [checkbox, setCheck] = useState(
        options.length > 0 ? options.map(() => false) : []
    );

    const handleCheck = (index) => (e) => {
        const updated = checkbox.map((_, position) =>
            position === index ? e.target.checked : false);
        setCheck(updated);
        console.log(updated);
    };
    return show ? (
        <div>
            <label>
                {question}
            </label>
            <br />
            {options.length > 0 ? (
                options.map((option, index) => (
                    <div key={`option-${index}`} className="option-item">
                        <label htmlFor={`option-${index}`}>{option}</label>
                        <input
                            id={`option-${index}`}
                            type="radio"
                            name="option-multiple-selection"
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