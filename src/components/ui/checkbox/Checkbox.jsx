import styles from "./Checkbox.module.css";

const Checkbox = ({name, handleChange, value, label }) => {
  return (
    <div className={styles.checkbox}>
      <input type="checkbox" name={name} value={value} onChange={handleChange} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
