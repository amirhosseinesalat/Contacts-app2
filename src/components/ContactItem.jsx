function ContactItem({ data, deleteHandler, onEdit }) {
  const { id, name, lastName, email, phone } = data;

  return (
    <li>
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📠</span> {email}
      </p>
      <p>
        <span>📞</span> {phone}
      </p>
      <button onClick={() => deleteHandler(id)}>Delete</button>
      <button onClick={() => onEdit(data)}>Edit</button>
    </li>
  );
}

export default ContactItem;
