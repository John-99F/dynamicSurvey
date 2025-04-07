import { HashRouter, Routes, Route } from "react-router-dom"
import DashBoard  from "./pages/dashboard"  
import Questions  from "./pages/questions"
import Answers from "./pages/answers"
function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element= {<DashBoard/>}/>
          <Route path="/questions" element= {<Questions/>}/>
          <Route path="/answers" element= {<Answers/>}/>
        </Routes>
      </HashRouter>
  )
}

export default App
