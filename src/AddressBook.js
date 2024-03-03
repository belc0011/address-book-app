import React from "react";
import { useState, useEffect } from "react";

function AddressBook() {
    useEffect(() => {
        fetch("http://localhost:3000/contacts")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }, [])
    return (
        <div>
            <h1>Address Book</h1>
            <ul>
                <li>
                    <input type="text" />
                </li>
            </ul>
        </div>
    )
}

export default AddressBook;