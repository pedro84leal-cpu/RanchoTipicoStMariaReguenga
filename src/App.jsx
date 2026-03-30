import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home'
import Contactos from './Pages/contactos/contactos';
import Historia from './Pages/Historia/historia';
import Galeria from './Pages/Galeria/galeria';
import Agenda from './Pages/Agenda/agenda';

function App() {


  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/historia" element={<Historia />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/agenda' element={<Agenda />} />




      </Routes>
    </>
  )
}

export default App
