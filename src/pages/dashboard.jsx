import { Link } from 'react-router-dom'
import '../styles/dashboard.scss'

function DashBoard() {
  return (
    <div className="dashboard">
      <h1>Bienvenido a DesignSoft!</h1>
      <p>¡Somos una empresa dedicada a soluciones de software y hardware!</p>
      <p>
        Ofrecemos productos de alta calidad, siempre a la vanguardia de la
        tecnología. Con más de 5 años de experiencia en el sector tecnológico,
        contamos con una sólida trayectoria que nos impulsa a seguir innovando
        y mejorando continuamente dentro de la industria.
      </p>
      <button className="dashboard-button">
        <Link to="/questions">Ir a la encuesta</Link>
      </button>
    </div>
  );
}

export default DashBoard;