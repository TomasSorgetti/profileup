// Crucial
import React from "react";

// Home CSS
import styles from "./Home.module.css";

// Services card import
import Servicecard from "../../components/features/serviceCard/Servicecard";
import { servicios } from "../../data/servicios";

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
  const iconCardsHome = [
    {
      id: 1,
      src: profIcon,
      name: "Profesionalismo",
      description: "Servicios éticos y de alta calidad.",
    },
    {
      id: 2,
      src: atenIcon,
      name: "Atención al detalle",
      description: "Enfoque personalizado para cada caso.",
    },
    {
      id: 3,
      src: solIcon,
      name: "Soluciones",
      description: "Estrategias efectivas para tus objetivos.",
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
            {servicios.map((servicio) => (
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
