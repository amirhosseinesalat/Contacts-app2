import { useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

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

    toast.success("Contact added successfully! 🎉", { icon: "📇" });

    setShowForm(false);
  };

  const deleteHandler = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));

    toast.error("Contact deleted 🗑️");
  };

  const updateHandler = (updatedContact) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === updatedContact.id ? updatedContact : c))
    );

    toast.info("Contact updated ✏️");

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
    setContacts((prev) => prev.filter((c) => !selectedContacts.includes(c.id)));
    setSelectedContacts([]);

    toast.error("Selected contacts removed!", { icon: "🗑️" });
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
