import styles from "./Carrousel.module.css";
import Servicecard from "../../features/serviceCard/Servicecard";
import arrowRight from "../../../assets/icons/arrow_rigt.png";
import arrowLeft from "../../../assets/icons/arrow_left.png";

import imagenterapia from "../../../assets/images/terapia_card_image.png";
import imageasesoria from "../../../assets/images/asesoria_card_image.png";
import imageconsultoria from "../../../assets/images/consultoria_card_image.png";
import imageRRHH from "../../../assets/images/rrhh_card_image.png";
import imagepsicotecnico from "../../../assets/images/psicotecnico_card_image.png";
import imageorientacionprofesional from "../../../assets/images/orientacionProfesional_card_image.png";
import { useEffect, useState } from "react";

export default function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
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
  const totalCards = cards.length;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(totalCards - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 2 < totalCards - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className={styles.carrousel}>
      {/* Carrousel button left */}
      <button
        onClick={handlePrev}
        className={`${styles.carrousel_button} ${styles.left}`}
      >
        <img src={arrowLeft} alt="arrow left" />
      </button>

      {/* Carrousel slider */}
      <div className={styles.carrousel_slider_container}>
        <div
          className={styles.carrousel_slider}
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {cards.map((card) => (
            <div style={{ width: "33.33%" }} key={card.id}>
              <Servicecard
                title={card.name}
                description={card.description}
                src={card.src}
                link={card.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carrousel button right */}
      <button
        onClick={handleNext}
        className={`${styles.carrousel_button} ${styles.right}`}
      >
        <img src={arrowRight} alt="arrow right" />
      </button>
    </div>
  );
}
