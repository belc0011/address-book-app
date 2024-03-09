import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <div>
            <NavLink to="/">Home</NavLink>
            </div>
            <div>
            <NavLink to="/groups">Groups</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;