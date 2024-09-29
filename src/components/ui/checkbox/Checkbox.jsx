import styles from "./Checkbox.module.css";

const Checkbox = ({ id, name, handleChange, value, label }) => {
  return (
    <div className={styles.checkbox}>
      <input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        onChange={handleChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
