import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashBoard  from "./pages/dashboard"  
import Questions  from "./pages/questions"
import Answers from "./pages/answers"
function App() {
  return (
      <BrowserRouter basename="/dynamicSurvey">
        <Routes>
          <Route path="/" element= {<DashBoard/>}/>
          <Route path="/questions" element= {<Questions/>}/>
          <Route path="/answers" element= {<Answers/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
