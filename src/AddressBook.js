import React from "react";
import { useState, useEffect } from "react";
import ContactCard from "./ContactCard.js";

function AddressBook() {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/contacts")
        .then(res => res.json())
        .then(data => setContacts(data))
        .catch(error => console.error(error));
    }, [])
    return (
        <div>
            <h1>Address Book</h1>
            {contacts.map(contact => {
                return (
                    <ContactCard name={contact.name} phone={contact.phone} nickname={contact.nickname} favorite={contact.favorite} key={contact.id} group={contact.group}/>
                )
            })}
        </div>
    )
}

export default AddressBook;