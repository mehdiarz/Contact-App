import styles from "./ContactItem.module.css"

function ContactItem({data :{id, name, email, phoneNumber, }, deleteHandler}) {
  return (
    <li className={styles.item}>
      <p>{name}</p>
      <p>
        <span>📬</span>
        {email}
      </p>
      <p>
        <span>📞</span>
        {phoneNumber}
      </p>
      <button onClick={() => deleteHandler(id)}>🗑</button>
    </li>
  );
}

export default ContactItem;
