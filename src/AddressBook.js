import React from "react";
import { useContext } from "react";
import ContactCard from "./ContactCard.js";
import { ContactContext } from "./MyContext.js";

function AddressBook( ) {
    const { contacts } = useContext(ContactContext);
    
    return (
        <div>
            <main>
                <h1>Address Book</h1>
                <h2 id="main-heading">Hello! All of your contacts are listed below.</h2>
                <em>Favorite contacts are listed in green</em>
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