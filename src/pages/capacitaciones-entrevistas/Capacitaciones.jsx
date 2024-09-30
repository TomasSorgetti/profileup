import React from 'react'
import ServicesBanner from "../../components/layout/servicesBanner/ServicesBanner";
import capacitacionesservice from "../../assets/images/capacitaciones_banner.png";
import ServiceWrapper from "../../components/layout/wrapper/ServiceWrapper";
import Acordion from "../../components/ui/acordion/Acordion";
const Capacitaciones = () => {

  const acordeonlist = [
    {
      key: 1,
      title: "¿Cómo se gestionan las sesiones?",
      description: "sarasa",
    },
    {
      key: 2,
      title: "¿Cuáles son los beneficios?",
      description: "sarasa 2",
    },
    {
      key: 3,
      title: "¿Qué metodologías utilizan?",
      description: "sarasa 2",
    },
  ];


  return (
    <ServiceWrapper>
      <>
        <ServicesBanner
          title={
            <>
              Capacitación  
              <br />
              para entrevistas
            </>
          }
          prop1="Conseguí ese trabajo deseado"
          prop2="Mejorá la comunicación con tu interlocutor"
          image={capacitacionesservice}
          link="/#"
          btnLabel="Realizar consulta"
        />
        <Acordion acordeonlist={acordeonlist} />
      </>
    </ServiceWrapper>
  )
}

export default Capacitaciones
