import { questions, typesQuestions } from '../utils/constants'
import MultipleSelection from '../components/multipleSelection'
import OpenResponse from '../components/openResponse'
import MultipleChoice from '../components/multipleChoice'
function Questions() {

    return (
        <div>
            Hola soy las preguntas
            {questions.map((element) => {
                return element.type == typesQuestions[1] ?
                    <MultipleChoice
                        key={element.id}
                        question={element.question}
                        options={element.options}
                    />
                    : element.type == typesQuestions[2] ?
                        <MultipleSelection
                            key={element.id}

                            question={element.question}
                            options={element.options}
                        />
                        : element.type == typesQuestions[3] ?
                            <OpenResponse
                                key={element.id}
                                question={element.question}
                            /> : <div key={element.id}></div>
            })}
        </div>
    )
}

export default Questions