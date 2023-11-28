import { Routes, Route } from "react-router-dom"

import { Home } from './pages/Home'
import { WaitList } from './pages/WaitList'
import { Gallery } from './pages/Gallery'
import { AboutUs } from './pages/AboutUs'
import { Contact } from './pages/Contact'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="lista-espera" element={ <WaitList/> } />
        <Route path="galeria" element={ <Gallery/> } />
        <Route path="sobre-nos" element={ <AboutUs/> } />
        <Route path="contacto" element={ <Contact/> } />
      </Routes>
    </div>
  )
}

export default App