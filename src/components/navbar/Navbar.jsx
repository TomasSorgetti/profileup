import React from 'react'
import { Link,NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <header>
            <div>
                <Link>ProfileUp</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        Servicios
                        <ul>
                            <li>
                                <NavLink to="/rrhh">RRHH</NavLink>
                            </li>
                            <li>
                                <NavLink to="/terapia-piscologica">Terapia</NavLink>
                            </li>
                            <li>
                                <NavLink to="/asesoria-consultoria">Asesoria</NavLink>
                            </li>
                            <li>
                                <NavLink to="/psicotecnico-aptopsicologico">Psicotecnico</NavLink>
                            </li>
                            <li>
                                <NavLink to="/capacitaciones-entrevistas">Capacitaciones</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/about">Sobre mí</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contacto"}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar
