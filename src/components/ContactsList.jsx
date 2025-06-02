function ContactsList({ contacts }) {
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <p>
                <span>📬</span>
                {contact.email}
              </p>
              <p>
                <span>📞</span>
                {contact.phoneNumber}
              </p>
              <button>🗑</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Contacts yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
