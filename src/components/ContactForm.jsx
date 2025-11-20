import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import styles from "./ContactForm.module.css";

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
          <input
            className={styles.input}
            name="name"
            value={form.name}
            onChange={changeHandler}
            placeholder="Name"
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}

          <input
            className={styles.input}
            name="lastName"
            value={form.lastName}
            onChange={changeHandler}
            placeholder="Last Name"
          />
          {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}

          <input
            className={styles.input}
            name="email"
            value={form.email}
            onChange={changeHandler}
            placeholder="Email"
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <input
            className={styles.input}
            name="phone"
            value={form.phone}
            onChange={changeHandler}
            placeholder="Phone"
          />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}

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
