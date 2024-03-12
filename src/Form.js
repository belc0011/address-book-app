import React from 'react';
import NavBar from './NavBar';
import { useEffect, useState, useContext} from'react';
import ContactCard from './ContactCard';
import { ContactContext } from "./MyContext.js";

function Form() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nickname, setNickname] = useState('');
    const [group, setGroup] = useState('');
    const [favorite, setFavorite] = useState('');
    const { contacts, setContacts } = useContext(ContactContext);

    function handleName(e) {
        setName(e.target.value);
    }

    function handlePhone(e) {
        setPhone(e.target.value);
    }

    function handleNickname(e) {
        setNickname(e.target.value);
    }

    function handleGroup(e) {
        setGroup(e.target.value);
    }

    function handleFavorite(e) {
        setFavorite(e.target.value);
    }

    function addContact(newContact) {
        setContacts([...contacts, newContact]);
    }

    function handleSubmit(e) {
        const newContact = {
            name: name,
            phone: phone,
            nickname: nickname,
            group: group,
            favorite: favorite
        }
        e.preventDefault();
        fetch('http://localhost:3000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
        .then(res => res.json())
        .then(data => addContact(data))
        setName('');
        setPhone('');
        setNickname('');
        setGroup('');
        setFavorite('');
        alert('Contact added!');
    }
    return (
        <div>
            <main>
                <h1>Add a New Contact</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <div>
                        <input type="text" placeholder="New contact name" id="name" value={name} onChange={handleName}/>
                    </div>
                    <label htmlFor="phone">Phone</label>
                    <div>
                        <input type="text" placeholder="New contact phone" value={phone} onChange={handlePhone}/>
                    </div>
                    <label htmlFor="nickname">Nickname</label>
                    <div>
                        <input type="text" placeholder="Nickname" value={nickname} onChange={handleNickname}/>
                    </div>
                    <label htmlFor="group">Group</label>
                    <div>
                        <select type="dropdown" id="group" value={group} onChange={handleGroup}>
                            <option value="default">Select One</option>
                            <option value="friends">Friends</option>
                            <option value="family">Family</option>
                            <option value="in-laws">In-Laws</option>
                            <option value="coworkers">Coworker</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <label htmlFor="favorite">Favorite?</label>
                    <div>
                    <select type="dropdown" id="favorite" onChange={handleFavorite}>
                        <option value="default">Select One</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    </div>
                    <div>
                        <p></p>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Form;