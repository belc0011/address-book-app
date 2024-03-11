import React from 'react';
import NavBar from './NavBar';
import { useEffect, useState, useContext} from'react';
import ContactCard from './ContactCard';
import { ContactContext } from "./MyContext.js";

function Groups() {
    const { contacts } = useContext(ContactContext);
    return (
        <div>
            <main>
                <h1>Groups</h1>
                <h2>Family</h2>
                <div>
                    {contacts.filter(contact => contact.group === "family")
                    .map(contact => {
                        return (
                            <ContactCard name={contact.name} phone={contact.phone} nickname={contact.nickname} favorite={contact.favorite} key={contact.id} group={contact.group}/>
                        )
                    })}
                </div>
                <h2>Co-Workers</h2>
                <div>
                    {contacts.filter(contact => contact.group === "coworkers")
                  .map(contact => {
                    return (
                        <ContactCard name={contact.name} phone={contact.phone} nickname={contact.nickname} favorite={contact.favorite} key={contact.id} group={contact.group}/>
                    )
                })}
                </div>
                <h2>In-Laws</h2>
                <div>
                    {contacts.filter(contact => contact.group === "in-laws")
                .map(contact => {
                    return (
                        <ContactCard name={contact.name} phone={contact.phone} nickname={contact.nickname} favorite={contact.favorite} key={contact.id} group={contact.group}/>
                    )
                })}
                </div>
                <h2>Friends</h2>
                <div>
                    {contacts.filter(contact => contact.group === "friends")
                    .map(contact => {
                        return (
                            <ContactCard name={contact.name} phone={contact.phone} nickname={contact.nickname} favorite={contact.favorite} key={contact.id} group={contact.group}/>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default Groups;