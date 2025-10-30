import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import styles from "./components/App.module.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.appContainer}>
      <input
        type="text"
        placeholder="🔍 Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchBox}
      />

      <button className={styles.addButton} onClick={() => setShowForm(true)}>
        ➕
      </button>

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
        contacts={filteredContacts}
        deleteHandler={deleteHandler}
        onEdit={editHandler}
      />
    </div>
  );
}

export default App;
