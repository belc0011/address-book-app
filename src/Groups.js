import React from 'react';
import NavBar from './NavBar';
import { useEffect, useState} from'react';
import ContactCard from './ContactCard';

function Groups() {
    const [groupContacts, setGroupContacts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/contacts")
        .then(res => res.json())
        .then(data => setGroupContacts(data))
        .catch(error => console.error(error));
    }, [])

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Groups</h1>
                <h2>Family</h2>
                <div>
                    {groupContacts.filter(contact => contact.group === "family")
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