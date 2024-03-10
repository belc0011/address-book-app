import React from 'react';
import NavBar from './NavBar';
import { useEffect, useState} from'react';

function Favorites() {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/")
        .then(res => res.json())
        .then(data => setFavorites(data))
        .catch(error => console.error(error));
     }, [])

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Favorites</h1>
                <div>
                    {favorites.filter(contact => contact.favorite === "true")
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