function ContactItem({data :{id, name, email, phoneNumber}}) {
  return (
    <li key={id}>
      <p>{name}</p>
      <p>
        <span>📬</span>
        {email}
      </p>
      <p>
        <span>📞</span>
        {phoneNumber}
      </p>
      <button>🗑</button>
    </li>
  );
}

export default ContactItem;
