import ContactItem from "./ContactItem";

function ContactsList({ contacts }) {
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
            ></ContactItem>
          ))}
        </ul>
      ) : (
        <p>No Contacts yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
