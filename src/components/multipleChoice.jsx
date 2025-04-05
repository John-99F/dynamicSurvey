import { useState } from "react"

function MultipleChoice({ question, options, }) {
    const [checkbox, setCheck] = useState(
        options.length > 0 ? options.map(() => false) : []
    );

    const handleCheck = (index) => (e) => {
        const updated = checkbox.map((_, position) =>
            position === index ? e.target.checked : false);
        setCheck(updated);
        console.log(updated);
    };
    return (
        <div>
            <label>
                {question}
            </label>
            <br />
            {
                options.length > 0 ? (
                    options.map((option, index) => (
                        <div key={index}>
                            <label htmlFor={`option-${index}`}>{option}</label>
                            <input
                                type="radio"
                                name="option-multiple-selection"
                                checked={checkbox[index]}
                                onChange={handleCheck(index)}
                            />
                        </div>
                    ))
                ) : (
                    <p key={id}>2</p>
                )
            }
        </div>
    )
}

export default MultipleChoice