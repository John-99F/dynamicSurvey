import { getAnswers } from "../utils/answersUtils";

function AnswersTable({questions}) {
    const obtenerRespuesta = (id) => {
        const resp = getAnswers().find((r) => r.id === id);
        if (!resp) return 'Sin respuesta';
        if (Array.isArray(resp.answers)) {
          return resp.answers.join(', ');
        }
        return resp.answers;
      };
    
      return (
        <div className="answers-container">
        <h2 className="answers-title">Respuestas de la Encuesta</h2>
        <table className="answers-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q) => (
              <tr key={q.id}>
                <td>{q.id}</td>
                <td>{q.question}</td>
                <td>{obtenerRespuesta(q.id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      );
}

export default AnswersTable