import React from "react";
import ServicesBanner from "../../components/layout/servicesBanner/ServicesBanner";
import psicotecnicoservice from "../../assets/images/psicotecnico_banner.png";
import ServiceWrapper from "../../components/layout/wrapper/ServiceWrapper";
import Acordion from "../../components/ui/acordion/Acordion";
import Carrousel from "../../components/layout/carrousel/Carrousel";
const Psicotecnico = () => {
  const acordeonlist = [
    {
      key: 1,
      title: "¿Cómo se efectúan las evaluaciones?",
      description:
        "Las evaluaciones pueden ser virtuales o presenciales, siempre deberán tener algún indicador particular que pueda brindar un marco de solicitud, ya que algunas instituciones requieren de entidades como obras sociales y organismos públicos como requisito excluyente para los trámites de renovación de registro ó ingresos a facultades. En caso de no requerir de manera excluyente esta información, la solicitud se realiza por mail a nuestra consultora y se le brindará un procesional que realice la evaluación completa según las necesidades atribuidas por dicha persona o entidad. La evaluación constará de aproximadamente 2 horas reloj para las diferentes actividades y deberá ser completada en su totalidad. Se deberá abonar la totalidad de la evaluación previo a la entrega del informe. Este brindará información cualitativa y una descripción de “APTO/NO APTO” para la indicación del informe.",
    },
    {
      key: 2,
      title: "¿Cuándo recibo los resultados?",
      description:
        "Una vez que fue realizada la evaluación, el profesional contará con aproximadamente 5 días para realizar el informe y hacer la entrega del mismo de manera virtual. ",
    },
    {
      key: 3,
      title: "¿Qué modalidad tiene el apto?",
      description:
        "La entrega del apto será virtual con el sello y matrícula del profesional evaluador. En caso de ser necesaria una entrega en formato papel y presencial, se deberá coordinar con anterioridad. Consultar la opción de envíos logísticos.",
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
      <Carrousel />
    </ServiceWrapper>
  );
};

export default Psicotecnico;
