import { useContext } from "react";
import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContacts, setSelectedContacts] = useState([]);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
