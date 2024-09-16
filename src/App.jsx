import './App.css'

// Define pages routes
import { Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contacto from './pages/contacto/Contacto'
import Rrhh from './pages/rrhh/Rrhh'
import Terapia from './pages/terapia-piscologica/Terapia'
import Asesoria from './pages/asesoria-consultoria/Asesoria'
import Psicotecnico from './pages/psicotecnico-aptopsicologico/Psicotecnico'
import Capacitaciones from './pages/capacitaciones-entrevistas/Capacitaciones'
import Error from './pages/error-page/Error'

// navbar
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>

    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contacto' element={<Contacto/>} />
      <Route path='/rrhh' element={<Rrhh/>} />
      <Route path='/terapia-piscologica' element={<Terapia/>} />
      <Route path='/asesoria-consultoria' element={<Asesoria/>} />
      <Route path='/psicotecnico-aptopsicologico' element={<Psicotecnico/>} />
      <Route path='/capacitaciones-entrevistas' element={<Capacitaciones/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    </>
  )
}

export default App
