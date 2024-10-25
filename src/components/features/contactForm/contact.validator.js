export function validateContact(data) {
  const errors = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  //* Name validation
  if (data.name.trim() === "") {
    errors.name = "El nombre es requerido";
  } else if (data.name.length < 3) {
    errors.name = "El nombre debe ser mayor a 3 caracteres";
  }

  //* Phone validation
  if (data.phone.trim() === "") {
    errors.phone = "El teléfono es requerido";
  }
  // else if (!/\d{3}-\d{3}-\d{4}/.test(data.phone)) {
  //   errors.phone = i18next.t("ValidationContact.phoneInvalid");
  // }

  //* Email validation
  if (data.email.trim() === "") {
    errors.email = "El email es requerido";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "El email es inválido";
  }

  //* Message validation
  if (data.message.trim() === "") {
    errors.message = "El mensaje es requerido";
  }

  return errors;
}
