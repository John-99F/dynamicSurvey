import {Link } from 'react-router-dom'

function DashBoard() {

    return (
        <div>
            <button>
                <Link to={"/questions"}>Navegar a la encuesta</Link>
            </button>
        </div>
    )
}

export default DashBoard