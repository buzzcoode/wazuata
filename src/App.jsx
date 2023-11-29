import { Routes, Route } from "react-router-dom"

import { Home } from './pages/Home'
import { WaitListPage } from './pages/WaitList'
import { Gallery } from './pages/Gallery'
import { AboutUs } from './pages/AboutUs'
import { ContactPage } from './pages/Contact'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="lista-reserva" element={ <WaitListPage/> } />
        <Route path="galeria" element={ <Gallery/> } />
        <Route path="sobre-nos" element={ <AboutUs/> } />
        <Route path="contacto" element={ <ContactPage/> } />
      </Routes>
    </div>
  )
}

export default App