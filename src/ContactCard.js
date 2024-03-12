import React from "react";
import { Link } from "react-router-dom";

function ContactCard ( {name, phone, nickname, favorite, group}) {
    return (
        <div>
            {favorite ? <h3>{name}</h3> : <h4>{name}</h4>}
            <ul>
                <li>"{nickname}"</li>
                <li>Phone: {phone}</li>
                <Link to="/groups">Group: {group}</Link>
            </ul>
        </div>
    )
}

export default ContactCard;