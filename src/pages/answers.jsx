import AnswersTable from "../components/answersTable"
import { questions } from "../utils/constants";
import "../styles/answers.scss";
function Answers() {
    return (
        <div>
            <AnswersTable 
                questions={questions}
            /> 
        </div>
    )
}

export default Answers