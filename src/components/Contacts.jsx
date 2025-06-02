import { useState } from "react";

import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";


function Contacts() {
  const [contact, setContact] = useState({
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
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    });
    console.log(contacts);
  };
  return (
    <div>
      <div>
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
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts}></ContactsList>
    </div>
  );
}

export default Contacts;
