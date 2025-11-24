import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import styles from "./ContactForm.module.css";
import FormInput from "../inputs/FormInput";

function ContactForm() {
  const {
    addContactHandler,
    updateHandler,
    editingContact,
    setEditingContact,
    setShowForm,
  } = useContext(UserContext);

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingContact) {
      setForm(editingContact);
    }
  }, [editingContact]);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name cannot be empty";
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name cannot be empty";
    }

    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email format";
    }

    if (!/^\d{8,15}$/.test(form.phone)) {
      newErrors.phone = "Phone must be digits only (8–15 characters)";
    }

    return newErrors;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.warning("Please fix the highlighted fields ⚠️");
      return;
    }

    if (editingContact) {
      updateHandler(form);
    } else {
      const newContact = { ...form, id: crypto.randomUUID() };
      addContactHandler(newContact);
    }

    setForm({ name: "", lastName: "", email: "", phone: "" });
    setEditingContact(null);
    setShowForm(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <form className={styles.form} onSubmit={submitHandler}>
          <FormInput
            placeholder={"Name"}
            value={form.name}
            name={"name"}
            onChange={changeHandler}
            error={errors.name}
          />
          <FormInput
            placeholder={"lastName"}
            value={form.lastName}
            name={"lastName"}
            onChange={changeHandler}
            error={errors.lastName}
          />
          <FormInput
            placeholder={"email"}
            value={form.email}
            name={"email"}
            onChange={changeHandler}
            error={errors.email}
          />
          <FormInput
            placeholder={"phone"}
            value={form.phone}
            name={"phone"}
            onChange={changeHandler}
            error={errors.phone}
          />

          <div className={styles.btnRow}>
            <button type="submit" className={styles.buttonPrimary}>
              {editingContact ? "Update" : "Add Contact"}
            </button>
            <button
              type="button"
              className={styles.buttonSecondary}
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
