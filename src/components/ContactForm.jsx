import { v4 } from "uuid";
import inputs from "../constants/input";
import { useState, useEffect } from "react";

function ContactForm({ onAdd, onUpdate, onClose, editingContact }) {
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState(
    editingContact || { id: "", name: "", lastName: "", email: "", phone: "" }
  );

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    }
  }, [editingContact]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!");
      return;
    }

    const newContact = { ...contact, id: v4() };
    onAdd(newContact);
    setContact({ name: "", lastName: "", email: "", phone: "" });
    setAlert("");
  };

  const handleUpdate = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!");
      return;
    }

    onUpdate(contact);
    setAlert("");
    onClose();
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <input
          key={index}
          type={input.type}
          placeholder={input.placeholder}
          name={input.name}
          value={contact[input.name]}
          onChange={changeHandler}
        />
      ))}

      <button onClick={editingContact ? handleUpdate : addHandler}>
        {editingContact ? "Save Changes" : "Add Contact"}
      </button>
      <button onClick={onClose}>Close</button>

      {alert && <p>{alert}</p>}
    </div>
  );
}

export default ContactForm;
