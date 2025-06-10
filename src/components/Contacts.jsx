import { useState } from "react";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";
import { v4 } from "uuid";

import styles from "./Contacts.module.css"

function Contacts() {
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = (event) => {
    if (
      !contact.name ||
      !contact.email ||
      !contact.lastName ||
      !contact.phoneNumber
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
    console.log(contacts);
  };
  
    const deleteHandler = (id) => {
      const newContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(newContacts);
    };
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactsList
        contacts={contacts}
        deleteHandler={deleteHandler}
      ></ContactsList>
    </div>
  );
}

export default Contacts;
