import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import styles from "./components/ContactForm.module.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const addContactHandler = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
    setShowForm(false);
  };

  const deleteHandler = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const updateHandler = (updatedContact) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === updatedContact.id ? updatedContact : c))
    );
    setEditingContact(null);
    setShowForm(false);
  };

  const editHandler = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  return (
    <>
      <button onClick={() => setShowForm(true)}>➕ Add Contact</button>

      {showForm && (
        <div className={styles.overlay}>
          <div className={styles.formContainer}>
            <ContactForm
              onAdd={addContactHandler}
              onClose={() => setShowForm(false)}
              onUpdate={updateHandler}
              editingContact={editingContact}
            />
          </div>
        </div>
      )}

      <ContactList
        contacts={contacts}
        deleteHandler={deleteHandler}
        onEdit={editHandler}
      />
    </>
  );
}

export default App;
