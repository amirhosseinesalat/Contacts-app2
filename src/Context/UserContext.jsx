import { useContext } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [manageMode, setManageMode] = useState(false);
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

  const toggleSelectHandler = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const deleteSelectedHandler = () => {
    if (window.confirm("Are you sure you want to delete selected contacts?")) {
      setContacts((prev) =>
        prev.filter((c) => !selectedContacts.includes(c.id))
      );
      setSelectedContacts([]);
      setManageMode(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
