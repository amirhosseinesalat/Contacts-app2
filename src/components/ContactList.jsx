import { useContext } from "react";
import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";
import { UserContext } from "../Context/UserContext";

function ContactList() {
  const {
    contacts,
    deleteHandler,
    editHandler,
    toggleSelectHandler,
    selectedContacts,
    manageMode,
  } = useContext(UserContext);

  return (
    <div className={styles.listContainer}>
      <h3>📇 Contact List</h3>

      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data={contact} />
          ))}
        </ul>
      ) : (
        <p>No Contacts found!</p>
      )}
    </div>
  );
}

export default ContactList;
