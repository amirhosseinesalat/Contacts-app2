import { useContext, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import styles from "./components/Contacts.module.css";
import { UserContext } from "./Context/UserContext";
function Contacts() {
  const {
    contacts,
    setContacts,
    editingContact,
    setEditingContact,
    searchTerm,
    setSearchTerm,
    selectedContacts,
    setSelectedContacts,
    addContactHandler,
    deleteHandler,
    updateHandler,
    editHandler,
    toggleSelectHandler,
    deleteSelectedHandler,
    showForm,
    setShowForm,
    manageMode,
    setManageMode,
  } = useContext(UserContext);

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.appContainer}>
      <div className={styles.header}>
        <input
          type="text"
          placeholder="🔍 Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchBox}
        />

        <div className={styles.headerButtons}>
          <button
            className={styles.menuButton}
            onClick={() => setManageMode(!manageMode)}
          >
            ⋮
          </button>

          <button
            className={styles.addButton}
            onClick={() => setShowForm(true)}
          >
            ➕
          </button>
        </div>
      </div>

      {manageMode && selectedContacts.length > 0 && (
        <button
          className={styles.deleteSelected}
          onClick={deleteSelectedHandler}
        >
          🗑 Delete ({selectedContacts.length})
        </button>
      )}

      {showForm && (
        <div className={styles.overlay}>
          <div className={styles.formContainer}>
            <ContactForm  />
          </div>
        </div>
      )}

      <ContactList />
    </div>
  );
}

export default Contacts;
