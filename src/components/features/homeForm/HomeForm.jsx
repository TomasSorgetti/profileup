import styles from "./HomeForm.module.css";
import FormField from "../../ui/formField/FormField";
import { useState } from "react";
import Checkbox from "../../ui/checkbox/Checkbox";

export default function HomeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    conditions: false,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheckboxChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <span className={styles.title}>¿Querés obtener más información?</span>
      <FormField
        id="home_name"
        name="name"
        label="Nombre:"
        type="text"
        placeholder="Juan Perez"
        value={formData.name}
        handleChange={handleChange}
        required
      />
      <FormField
        id="home_email"
        name="email"
        label="Email:"
        type="email"
        placeholder="example@ex.com"
        value={formData.email}
        handleChange={handleChange}
        required
      />
      <FormField
        id="home_message"
        name="message"
        label="Mensaje:"
        type="text"
        placeholder="Tu mensaje..."
        textarea
        value={formData.message}
        handleChange={handleChange}
        required
      />
      <Checkbox
        id="home_conditions"
        name="conditions"
        label="Acepto los terminos y condiciones"
        handleChange={handleChange}
        value={formData.conditions}
      />
      <button type="submit" className={styles.button}>
        Consultar
      </button>
    </form>
  );
}
