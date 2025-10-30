import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";

function ContactList({ contacts, deleteHandler, onEdit }) {
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
