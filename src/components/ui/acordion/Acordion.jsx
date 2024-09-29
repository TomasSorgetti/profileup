import styles from "./Acordion.module.css";
import Accordion from "react-bootstrap/Accordion";
import React from "react";

const Acordion = ({ acordeonlist }) => {
  return (
    <Accordion className={styles.accordion}>
      {acordeonlist?.map((item) => (
        <Accordion.Item
          className={styles.accordionItem}
          key={item.key}
          eventKey={item.key}
        >
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>{item.description}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Acordion;
