import { useState } from "react"
import { questions, typesQuestions } from '../utils/constants'
import MultipleSelection from '../components/multipleSelection'
import OpenResponse from '../components/openResponse'
import MultipleChoice from '../components/multipleChoice'
import { getAnswers } from "../utils/answersUtils"
import { useNavigate } from "react-router-dom"
import "../styles/question.scss";

function Questions() {
    const [listQuestions, setShowQuestions] = useState(
        questions.length > 0 ? questions.map((_, index) => index == 0 ? true : false) : []
    )
    const navigate = useNavigate();

    const handleCheck = (index) => (e) => {
        const listQuestionsUpdated = listQuestions.map((_, position) =>
            position === index ? true : false);
        setShowQuestions(listQuestionsUpdated);
        console.log(listQuestionsUpdated);
    };

    const goToNextQuestion = () => {
        const currentIndex = listQuestions.findIndex((item) => item);
        if (currentIndex < questions.length - 1) {
            handleCheck(currentIndex + 1)();
        }
    };

    const goToPreviousQuestion = () => {
        const currentIndex = listQuestions.findIndex((item) => item);
        if (currentIndex > 0) {
            handleCheck(currentIndex - 1)();
        }
    };

    const handleFinish = () => {
        const respuestas = getAnswers(); // obtiene las respuestas guardadas
        const preguntasFaltantes = questions.filter(q => {
          const resp = respuestas.find(r => r.id === q.id);
          return !resp || !resp.answers || (Array.isArray(resp.answers) && resp.answers.length === 0);
        });
    
        if (preguntasFaltantes.length > 0) {
          alert("Por favor, responde todas las preguntas antes de continuar.");
          return;
        }
    
        navigate("/answers");
      };
    return (
        <div className="question-container">
            {questions.map((element, index) => {
                return element.type == typesQuestions[1] ?
                    <MultipleChoice
                        key={element.id}
                        id={element.id}
                        question={element.question}
                        options={element.options}
                        show={listQuestions[index]}
                    />
                    : element.type == typesQuestions[2] ?
                        <MultipleSelection
                            key={element.id}
                            id={element.id}
                            show={listQuestions[index]}
                            question={element.question}
                            options={element.options}
                        />
                        : element.type == typesQuestions[3] ?
                            <OpenResponse
                                key={element.id}
                                id={element.id}
                                question={element.question}
                                show={listQuestions[index]}
                            /> : <div key={element.id}></div>
            })}
            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={goToPreviousQuestion}
                    className="navigation-button"
                    disabled={listQuestions.findIndex(q => q) === 0}
                >
                    Anterior
                </button>
                {
                    listQuestions.findIndex(q => q) === questions.length - 1 ?
                        <button
                            onClick={handleFinish}
                            className="navigation-button"
                        >
                            Terminar
                        </button>
                        :
                        <button
                            onClick={goToNextQuestion}
                            className="navigation-button"
                        >
                            Siguiente
                        </button>
                }
            </div>
        </div>
    )
}

export default Questions