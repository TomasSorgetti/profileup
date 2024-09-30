import React from "react";
import ServicesBanner from "../../components/layout/servicesBanner/ServicesBanner";
import rrhhService from "../../assets/images/rrhhService.png";
import ServiceWrapper from "../../components/layout/wrapper/ServiceWrapper";
import Acordion from "../../components/ui/acordion/Acordion";
const Rrhh = () => {
  const acordeonlist = [
    {
      key: 1,
      title: "¿Cómo organizan la gestion del proceso?",
      description: "sarasa",
    },
    {
      key: 2,
      title: "¿En cuánto tiempo se ven resultados?",
      description: "sarasa 2",
    },
    {
      key: 3,
      title: "¿Cómo se gestionan las entrevistas?",
      description: "sarasa 2",
    },
    {
      key: 4,
      title: "¿Qué métodos utilizan?",
      description: "sarasa 2",
    },
  ];

  return (
    <ServiceWrapper>
      <>
        <ServicesBanner
          title={
            <>
              RRHH &
              <br />
              selección laboral
            </>
          }
          prop1="Otimiza tu búsqueda"
          prop2="Encuentra al profesional adecuado"
          image={rrhhService}
          link="/#"
          btnLabel="Realizar consulta"
        />
        <Acordion acordeonlist={acordeonlist} />
      </>
    </ServiceWrapper>
  );
};

export default Rrhh;
