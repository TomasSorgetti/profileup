import React from "react";

// Bootstrap elements
import Card from "react-bootstrap/Card";

// Iconcard CSS
import styles from "./Iconcard.module.css";

const Iconcard = ({ title, description, src }) => {
  return (
    <Card style={{ width: "18rem" }} className={styles.icon_card}>
      <img src={src} alt={title} className="card-img-top" />
      <Card.Body>
        <h4>{title}</h4>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Iconcard;
