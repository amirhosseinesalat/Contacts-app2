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

  useEffect(() => {
    if (editingContact) {
      setForm(editingContact);
    }
  }, [editingContact]);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

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
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        name="name"
        value={form.name}
        onChange={changeHandler}
        placeholder="Name"
      />

      <input
        name="lastName"
        value={form.lastName}
        onChange={changeHandler}
        placeholder="Last Name"
      />

      <input
        name="email"
        value={form.email}
        onChange={changeHandler}
        placeholder="Email"
      />

      <input
        name="phone"
        value={form.phone}
        onChange={changeHandler}
        placeholder="Phone"
      />

      <button type="submit">{editingContact ? "Update" : "Add Contact"}</button>

      <button type="button" onClick={() => setShowForm(false)}>
        Cancel
      </button>
    </form>
  );
}

export default ContactForm;
