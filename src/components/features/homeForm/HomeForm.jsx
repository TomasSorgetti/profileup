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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form}>
      <span className={styles.title}>¿Querés obtener más información?</span>
      <FormField
        name="name"
        label="Nombre:"
        type="text"
        placeholder="Juan Perez"
        value={formData.name}
        handleChange={handleChange}
        required
      />
      <FormField
        name="email"
        label="Email:"
        type="email"
        placeholder="example@ex.com"
        value={formData.email}
        handleChange={handleChange}
        required
      />
      <FormField
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
