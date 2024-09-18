// Crucial
import React from 'react'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Navigation library
import { Link, NavLink } from "react-router-dom"

// Logo image import
import logoLight from '../../assets/profielUp_logo-light.png'

// Footer CSS
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={`page-footer font-small blue pt-4 ${styles.footer}`}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
                <div className={styles.logo_footer_container}>
                    <img src={logoLight} alt="logo ProfileUp"  className={styles.logo_footer} />
                </div>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5>Información</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">contacto@mail.com</a></li>
                    <li><a href="#!">(+54) 11 3454-4545</a></li>
                </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
                <h5>Contacto</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">contacto@mail.com</a></li>
                    <li><a href="#!">(+54) 11 3454-4545</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5>Redes sociales</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Linkedin</a></li>
                    <li><a href="#!">Instagram</a></li>
                    <li><a href="#!">whatsapp</a></li>
                </ul>
            </div>
        </div>
    </div>

    <hr />

    <div className="footer-copyright text-center py-3">Todos los derechos reservados a Matías Martínez © Copyright 2024 
    </div>

</footer>
  )
}

export default Footer
