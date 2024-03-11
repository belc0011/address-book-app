import React from "react";
import { useState, useEffect, useContext } from "react";
import ContactCard from "./ContactCard.js";
import NavBar from "./NavBar.js";
import { ContactContext } from "./MyContext.js";

function AddressBook( ) {
    const { contacts } = useContext(ContactContext);
    console.log(contacts);
    return (
        <div>
            <main>
                <h1>Address Book</h1>
                {contacts.map(contact => {
                    return (
                        <ContactCard name={contact.name} phone={contact.phone} nickname={contact.nickname} favorite={contact.favorite} key={contact.id} group={contact.group}/>
                    )
                })}
            </main>
        </div>
    )
}

export default AddressBook;