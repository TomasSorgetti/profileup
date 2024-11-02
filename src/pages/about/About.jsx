import React from "react";

// styles
import styles from "./About.module.css";

// Profile image
import profileImage from "../../assets/images/profile_image.png";
// Main title import
import Maintitle from "../../components/layout/home/mainTitle/Maintitle";

const About = () => {
  return (
    <div>
      <div className={styles.about_banner}>
        <div className={styles.about_wrapper}>
          <Maintitle
            markedtext="MATÍAS ALBERTO MARTÍNEZ"
            title="Sobre mí, y mi carrera"
            description="En esta sección vas a conocerme como persona, y como profesional"
          ></Maintitle>
          <div className={styles.profile_image}>
            <img src={profileImage} alt="profile" />
          </div>
        </div>
      </div>

      <div>
        <p>
          Somos ProfileUp BA, una consultora comprometida con la búsqueda y
          selección de personal con la motivación de brindarle a nuestros
          clientes una experiencia que se adapte a las necesidades de sus
          organizaciones. Nos dedicamos a la detección de oportunidades de
          mejoras con un seguimiento cercano, fomentando la marca empleadora y
          la atracción del talento.
        </p>
        <p>
          Mi nombre es Matías Martinez, soy Lic. En Psicología y Mgter. en
          Psicología Organizacional con Orientación Gerencial en UAI. Inicié mi
          recorrido en el área de Recursos Humanos en una cátedra de Técnicas de
          Evaluación Diagnóstica en la Universidad de Buenos Aires donde
          participé como alumno desde el año 2016 hasta mi cargo docente desde
          marzo 2020 hasta febrero 2022.
        </p>
        <p>
          Actualmente continúo mi trabajo como Talent Adquisition de la empresa
          en la que trabajo, así como también para diversos clientes que
          requieran de nuestros servicios.
        </p>
      </div>
    </div>
  );
};

export default About;
