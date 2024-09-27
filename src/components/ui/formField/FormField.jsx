import styles from "./FormField.module.css";

export default function FormField({
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  textarea,
  required,
}) {
  return (
    <div className={styles.formField}>
      <label>{label}</label>
      {textarea ? (
        <textarea
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          required={required}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          required={required}
        />
      )}
    </div>
  );
}
