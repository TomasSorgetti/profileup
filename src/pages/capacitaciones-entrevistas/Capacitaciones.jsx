import React from "react";
import ServicesBanner from "../../components/layout/servicesBanner/ServicesBanner";
import capacitacionesservice from "../../assets/images/capacitaciones_banner.png";
import ServiceWrapper from "../../components/layout/wrapper/ServiceWrapper";
import Acordion from "../../components/ui/acordion/Acordion";
const Capacitaciones = () => {
  const acordeonlist = [
    {
      key: 1,
      title: "¿Cómo se gestionan las sesiones?",
      description:
        "Los procesos deben iniciar con una solicitud formal por mail y se coordinarán de manera virtual para una reunión por google meet. El procedimiento constará de una entrevista breve para conocer la dinámica y desarrollo del consultante a un proceso evaluativo de selección. Una vez culminado, se brindarán puntos fuertes y débiles de la persona, así como también aspectos de mejora en el curriculum. Para armado de curricular únicamente se sugiere consultar aranceles.",
    },
    {
      key: 2,
      title: "¿Cuáles son los beneficios?",
      description:
        "Uno de los mayores beneficios será mejorar el impacto y efectividad que lograrán tus entrevistas laborales, ya que conocer tus puntos débiles y fuertes brindarán una mayor seguridad a tu evaluador. Asimismo, contarán con una evaluación objetiva sobre tus aspectos interpersonales al momento de desarrollar una entrevista y así lograr obtener una evaluación objetiva y cualitativa de tu desempeño en la entrevista, aspecto fundamental de feedback que muchas veces cuesta tanto conseguir de los reclutadores.",
    },
    {
      key: 3,
      title: "¿Qué metodologías utilizan?",
      description: "Proceso de entrevistas por competencias.",
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
  );
};

export default Capacitaciones;
