import React from "react";
import { Link } from "react-router-dom";

function ContactCard ( {name, phone, nickname, favorite, group}) {
    return (
        <div>
            {favorite ? <h2>{name}</h2> : <h3>{name}</h3>}
            <ul>
                <li>"{nickname}"</li>
                <li>Phone: {phone}</li>
                <Link to="/groups">Group: {group}</Link>
            </ul>
        </div>
    )
}

export default ContactCard;