import React from 'react';
import { useState, useEffect } from'react';

const ContactContext = React.createContext()

function ContactProvider({children}) {
    const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
    .then(res => res.json())
    .then(data => setContacts(data))
    .catch(error => console.error(error))
  }, []);
    return <ContactContext.Provider value={{contacts, setContacts}}>{children}</ContactContext.Provider>
}

export {ContactContext, ContactProvider}