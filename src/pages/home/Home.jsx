// Crucial
import React from "react";

// Home CSS
import styles from "./Home.module.css";

// Services card import
import Servicecard from "../../components/features/serviceCard/Servicecard";

// images for service cards
import imagenterapia from "../../assets/images/terapia_card_image.png";
import imageasesoria from "../../assets/images/asesoria_card_image.png";
import imageconsultoria from "../../assets/images/consultoria_card_image.png";
import imageRRHH from "../../assets/images/rrhh_card_image.png";
import imagepsicotecnico from "../../assets/images/psicotecnico_card_image.png";
import imageorientacionprofesional from "../../assets/images/orientacionProfesional_card_image.png";

// Homesocial import
import Homesocial from "../../components/layout/home/homeSocial/Homesocial";

// Title and description import
import Titledesc from "../../components/ui/title/Title";

// Icon card import
import Iconcard from "../../components/features/iconCard/Iconcard";

// Imagenes for icon cards
import profIcon from "../../assets/icons/profesionalismo_icon.svg";
import atenIcon from "../../assets/icons/atencion_detalle_icon.svg";
import solIcon from "../../assets/icons/soluciones_icon.svg";

// Main title import
import Maintitle from "../../components/layout/home/mainTitle/Maintitle";
import HomeForm from "../../components/features/homeForm/HomeForm";

const Home = () => {
  // array for "Servicios"
  const ServiciesCardsHome = [
    {
      id: 1,
      src: imagenterapia,
      name: "Terapia",
      description: "Description 1",
      link: "/terapia-piscologica",
    },
    {
      id: 2,
      src: imageasesoria,
      name: "Asesorías",
      description: "Description 1",
      link: "/asesoria-consultoria",
    },
    {
      id: 3,
      src: imageconsultoria,
      name: "Consultorías",
      description: "Description 1",
      link: "/asesoria-consultoria",
    },
    {
      id: 4,
      src: imageRRHH,
      name: "RRHH",
      description: "Description 1",
      link: "/rrhh",
    },
    {
      id: 5,
      src: imagepsicotecnico,
      name: "Psicotécnico",
      description: "Description 1",
      link: "/psicotecnico-aptopsicologico",
    },
    {
      id: 6,
      src: imageorientacionprofesional,
      name: "Orientación profesional",
      description: "Description 1",
      link: "/capacitaciones-entrevistas",
    },
  ];

  const iconCardsHome = [
    {
      id: 1,
      src: profIcon,
      name: "Profesionalismo",
      description: "Description 1",
    },
    {
      id: 2,
      src: atenIcon,
      name: "Atención al detalle",
      description: "Description 1",
    },
    {
      id: 3,
      src: solIcon,
      name: "Soluciones",
      description: "Description 1",
    },
  ];

  return (
    <div>
      <div className={styles.home_main_banner}>
        <div className={styles.home_main_banner_wrapper}>
          <Maintitle
            markedtext="Para empresas y particulares"
            title="Descubrí todo tu potencial"
            description="RRHH, asesorías, psicotécnicos, terapia y ¡Mucho más!"
          ></Maintitle>
          <HomeForm />
        </div>
      </div>

      <div className={styles.home_body}>
        <div className={styles.trabaja_section_container}>
          <Titledesc title="¿Por qué trabajar con nosotros?" />
          <div className={styles.iconCards_container}>
            {iconCardsHome.map((icon) => (
              <Iconcard
                key={icon.id}
                title={icon.name}
                description={icon.description}
                src={icon.src}
              />
            ))}
          </div>
        </div>

        <div className={styles.servicios_section_container}>
          <Titledesc
            title="Nuestros servicios"
            description="Para conseguir un nuevo empleo, es vital poder comunicar nuestras fortalezas de forma práctica y eficiente"
          />

          <div className={styles.serviceCards_container}>
            {ServiciesCardsHome.map((servicio) => (
              <Servicecard
                key={servicio.id}
                title={servicio.name}
                description={servicio.description}
                src={servicio.src}
                link={servicio.link}
              />
            ))}
          </div>
        </div>

        <div className={styles.home_social_container}>
          <Homesocial />
        </div>
      </div>
    </div>
  );
};

export default Home;
