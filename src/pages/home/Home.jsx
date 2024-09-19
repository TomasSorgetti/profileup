// Crucial
import React from 'react'

// Home CSS
import styles from './Home.module.css'

// Services card import
import Servicecard from '../../components/serviceCard/Servicecard'

// images for service cards
import imagenterapia from '../../assets/terapia_card_image.png'
import imageasesoria from '../../assets/asesoria_card_image.png'
import imageconsultoria from '../../assets/consultoria_card_image.png'
import imageRRHH from '../../assets/rrhh_card_image.png'
import imagepsicotecnico from '../../assets/psicotecnico_card_image.png'
import imageorientacionprofesional from '../../assets/orientacionprofesional_card_image.png'

// Homesocial import
import Homesocial from '../../components/homeSocial/Homesocial'

// Title and description import
import Titledesc from '../../components/titleAndDesc/Title'

// Icon card import
import Iconcard from '../../components/iconCard/Iconcard'

// Imagenes for icon cards 
import profIcon from '../../assets/profesionalismo_icon.svg'
import atenIcon from '../../assets/atencion_detalle_icon.svg'
import solIcon from '../../assets/soluciones_icon.svg'

const Home = () => {

  // array for "Servicios"
  const ServiciesCardsHome = [
    {
      id: 1,
      src: imagenterapia,
      name: "Terapia",
      description: "Description 1",
      link: '/terapia-piscologica'
    },
    {
      id: 2,
      src: imageasesoria,
      name: "Asesorías",
      description: "Description 1",
      link: '/asesoria-consultoria'
    },
    {
      id: 3,
      src: imageconsultoria,
      name: "Consultorías",
      description: "Description 1",
      link: '/asesoria-consultoria'
    },
    {
      id: 4,
      src: imageRRHH,
      name: "RRHH",
      description: "Description 1",
      link: '/rrhh'
    },
    {
      id: 5,
      src: imagepsicotecnico,
      name: "Psicotécnico",
      description: "Description 1",
      link: '/psicotecnico-aptopsicologico'
    },
    {
      id: 6,
      src: imageorientacionprofesional,
      name: "Orientación profesional",
      description: "Description 1",
      link: '/capacitaciones-entrevistas'
    },

  ]

  const iconCardsHome = [
    {
      id: 1,
      src: profIcon,
      name: "Profesionalismo",
      description: "Description 1"
    },
    {
      id: 2,
      src: atenIcon,
      name: "Atención al detalle",
      description: "Description 1"
    },
    {
      id: 3,
      src: solIcon,
      name: "Soluciones",
      description: "Description 1"
    },
    
  ]

  return (
    <div>

      <div className={styles.iconCards_container}>
        {
          iconCardsHome.map(icon => (
            <Iconcard key={icon.id} title={icon.name} description={icon.description} src={icon.src} />
          ))
        }
      </div>

      <Titledesc title="Nuestros servicios" description="Para conseguir un nuevo empleo, es vital poder comunicar nuestras fortalezas de forma práctica y eficiente" />

      <div className={styles.serviceCards_container}>
        {
          ServiciesCardsHome.map(servicio => (
            <Servicecard key={servicio.id} title={servicio.name} description={servicio.description} src={servicio.src} link={servicio.link} />
          ))
        }
      </div>

      <Homesocial />

    </div>
  )
}

export default Home

