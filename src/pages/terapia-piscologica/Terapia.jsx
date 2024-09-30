import React from "react";
import ServicesBanner from "../../components/layout/servicesBanner/ServicesBanner";
import terapiaserivce from "../../assets/images/terapia.png";
import ServiceWrapper from "../../components/layout/wrapper/ServiceWrapper";
import Acordion from "../../components/ui/acordion/Acordion";

const Terapia = () => {

  const acordeonlist = [
    {
      key: 1,
      title: "¿Qué modalidad tienen las terapias?",
      description: "sarasa",
    },
    {
      key: 2,
      title: "¿Cómo es el tratamiento?",
      description: "sarasa 2",
    },
    {
      key: 3,
      title: "¿Cuánto tiempo dura el tratamiento?",
      description: "sarasa 2",
    },
    {
      key: 4,
      title: "¿Como agendo una sesión?",
      description: "sarasa 2",
    },
  ];


  return (
    <ServiceWrapper>
      <>
        <ServicesBanner
          title={
            <>
              Terapia 
              <br />
              psicológica
            </>
          }
          prop1="Organizá tu vida"
          prop2="Gestioná tus tiempos"
          image={terapiaserivce}
          link="/#"
          btnLabel="Agendar una sesión"
        />
        <Acordion acordeonlist={acordeonlist} />
      </>
    </ServiceWrapper>
  );
};

export default Terapia;
