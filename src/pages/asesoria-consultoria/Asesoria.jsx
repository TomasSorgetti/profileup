import React from 'react'
import ServicesBanner from "../../components/layout/servicesBanner/ServicesBanner";
import asesoriaservice from "../../assets/images/asesoria_banner.png";
import ServiceWrapper from "../../components/layout/wrapper/ServiceWrapper";
import Acordion from "../../components/ui/acordion/Acordion";
const Asesoria = () => {


  const acordeonlist = [
    {
      key: 1,
      title: "¿Cómo se gestionan los procesos de asesoría?",
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
              Asesoría y   
              <br />
              consultoría
            </>
          }
          prop1="Mejora el desempeño de tu equipo"
          prop2="Estate al tanto de las nuevas tendencias en el área"
          image={asesoriaservice}
          link="/#"
          btnLabel="Realizar consulta"
        />
        <Acordion acordeonlist={acordeonlist} />
      </>
    </ServiceWrapper>
  )
}

export default Asesoria
