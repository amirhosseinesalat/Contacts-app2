import styles from "./ContactItem.module.css";

function ContactItem({ data, deleteHandler, onEdit }) {
  const { id, name, lastName, email, phone } = data;

  return (
    <li className={styles.contactItem}>
      <p><strong>{name} {lastName}</strong></p>
      <p>📠 {email}</p>
      <p>📞 {phone}</p>

      <div className={styles.buttons}>
        <button onClick={() => deleteHandler(id)}>Delete</button>
        <button onClick={() => onEdit(data)}>Edit</button>
      </div>
    </li>
  );
}

export default ContactItem;
