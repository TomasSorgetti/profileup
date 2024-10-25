import styles from "./serviceIconCards.module.css";
import Iconcard from "../iconCard/Iconcard";
import Title from "../../ui/title/Title";

const ServiceIconCards = ({ cards, title, description }) => {
  return (
    <div className={styles.container}>
        <Title title={title} description={description} />
      <div className={styles.cards_cont}>
        {cards.map((card) => (
          <Iconcard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ServiceIconCards;
