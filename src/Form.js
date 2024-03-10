import React from 'react';
import NavBar from './NavBar';
import { useEffect, useState} from'react';
import ContactCard from './ContactCard';

function Form() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nickname, setNickname] = useState('');
    const [group, setGroup] = useState('');
    const [favorite, setFavorite] = useState('');
    
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

    function handleSubmit(e) {
        e.preventDefault();
        <ContactCard name={name} phone={phone} nickname={nickname} group={group} favorite={favorite}/>
    }
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <div>
                        <input type="text" placeholder="New contact name" id="name" onChange={handleName}/>
                    </div>
                    <label htmlFor="phone">Phone</label>
                    <div>
                        <input type="text" placeholder="New contact phone" onChange={handlePhone}/>
                    </div>
                    <label htmlFor="nickname">Nickname</label>
                    <div>
                        <input type="text" placeholder="Nickname" onChange={handleNickname}/>
                    </div>
                    <label htmlFor="group">Group</label>
                    <div>
                        <select type="dropdown" id="group" onChange={handleGroup}>
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
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
    )
}

export default Form;