import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;