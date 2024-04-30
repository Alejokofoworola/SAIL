import Navbar from "./Component/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/home/Home"
import About from "./page/about/about"
import Service from "./page/service/service"
import PracticeEffect from "./Component/PracticeEffect"
function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
      <PracticeEffect/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
