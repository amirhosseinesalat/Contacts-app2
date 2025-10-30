import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";

function ContactList({
  contacts,
  deleteHandler,
  onEdit,
  onSelect,
  selectedContacts,
  manageMode,
}) {
  return (
    <div className={styles.listContainer}>
      <h3>📇 Contact List</h3>

      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
              onEdit={onEdit}
              onSelect={onSelect}
              selectedContacts={selectedContacts}
              manageMode={manageMode}
            />
          ))}
        </ul>
      ) : (
        <p>No Contacts found!</p>
      )}
    </div>
  );
}

export default ContactList;
