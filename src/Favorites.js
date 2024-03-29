import React from 'react';
import { useContext} from'react';
import ContactCard from './ContactCard';
import { ContactContext } from "./MyContext.js";

function Favorites() {
  
    const { contacts } = useContext(ContactContext);
    
    return (
        <div>
            <main>
                <h1 className="parent">Favorites</h1>
                <div>
                    {contacts.filter(contact => contact.favorite)
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

export default Favorites;