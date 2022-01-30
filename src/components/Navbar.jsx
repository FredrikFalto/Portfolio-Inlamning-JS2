import React from "react";

function Navbar() {
    return (
        <div className="main-menu">
            <nav className="main-menu-nav">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/cv">CV</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
