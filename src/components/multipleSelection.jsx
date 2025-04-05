import { useState } from "react"

function MultipleSelection({question, options , show}) {
    const [checkbox, setCheck] = useState(
        options.length > 0 ? options.map(() => false) : []
    );

    const handleCheck = (index) => (e) => {
        const updated = [...checkbox];
        updated[index] = e.target.checked;
        setCheck(updated);
        console.log(updated);
    };
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