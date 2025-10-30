import styles from "./ContactItem.module.css";

function ContactItem({
  data,
  deleteHandler,
  onEdit,
  onSelect,
  selectedContacts,
  manageMode,
}) {
  const { id, name, lastName, email, phone } = data;

  const isSelected = selectedContacts.includes(id);

  return (
    <li
      className={`${styles.item} ${
        manageMode && isSelected ? styles.selected : ""
      }`}
    >
      {manageMode && (
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(id)}
          className={styles.checkbox}
        />
      )}

      <div className={styles.info}>
        <p className={styles.name}>
          {name} {lastName}
        </p>
        <p className={styles.email}>📠 {email}</p>
        <p className={styles.phone}>📞 {phone}</p>
      </div>

      {!manageMode && (
        <div className={styles.actions}>
          <button
            onClick={() => onEdit(data)}
            className={`${styles.actionBtn} ${styles.editBtn}`}
          >
            ✏️
          </button>
          <button
            onClick={() => deleteHandler(id)}
            className={`${styles.actionBtn} ${styles.deleteBtn}`}
          >
            🗑️
          </button>
        </div>
      )}
    </li>
  );
}

export default ContactItem;
