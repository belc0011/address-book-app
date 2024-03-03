import React from "react";

function NavBar() {
    return (
        <nav>
            <div>
                <span>
                    <a href="/">  Address Book  </a>
                </span>
            </div>
            <div>
                <span>
                    <a href="/groups">  Groups  </a>
                </span>
            </div>
            <div>
                <span>
                    <a href="/add">  Add New Contact  </a>
                </span>
            </div>
        </nav>
    )
}

export default NavBar;