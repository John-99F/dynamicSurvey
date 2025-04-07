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
        <div style={{ padding: '20px' }}>
          <h2>Respuestas de la Encuesta</h2>
          <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
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