import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <div>
            <NavLink to="/" className="nav-link">Home</NavLink>
            </div>
            <div>
            <NavLink to="/groups" className="nav-link">Groups</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;