import styles from "./FormField.module.css";

export default function FormField({
  id,
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
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          required={required}
        />
      ) : (
        <input
          id={id}
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
