import ContactItem from "./ContactItem";

function ContactList({ contacts, deleteHandler, onEdit }) {
  return (
    <div>
      <h3>Contact List</h3>
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
        <p>No Contacts yet!</p>
      )}
    </div>
  );
}

export default ContactList;
