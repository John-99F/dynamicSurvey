import AnswersTable from "../components/answersTable"
import { respuestas, questions } from "../utils/constants";

function Answers() {
    return (
        <div>
            <AnswersTable 
                questions={questions}
                 respuestas={respuestas}
            /> 
        </div>
    )
}

export default Answers