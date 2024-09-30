import React from 'react'
import ServicesBanner from "../../components/layout/servicesBanner/ServicesBanner";
import psicotecnicoservice from "../../assets/images/psicotecnico_banner.png";
import ServiceWrapper from "../../components/layout/wrapper/ServiceWrapper";
import Acordion from "../../components/ui/acordion/Acordion";

const Psicotecnico = () => {

  const acordeonlist = [
    {
      key: 1,
      title: "¿Cómo se efectúan las evaluaciones?",
      description: "sarasa",
    },
    {
      key: 2,
      title: "¿Cuándo recibo los resultados?",
      description: "sarasa 2",
    },
    {
      key: 3,
      title: "¿Qué modalidad tiene el apto?",
      description: "sarasa 2",
    },
  ];

  return (
    <ServiceWrapper>
      <>
        <ServicesBanner
          title={
            <>
              Psicotécnico y 
              <br />
              apto psicológico
            </>
          }
          prop1="Revisa tu salud emocional"
          prop2="Sé evaluado por profesionales"
          image={psicotecnicoservice}
          link="/#"
          btnLabel="Agendar una sesión"
        />
        <Acordion acordeonlist={acordeonlist} />
      </>
    </ServiceWrapper>
  )
}

export default Psicotecnico
