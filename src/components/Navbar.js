import React from "react";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-title">FLIPKART</div>
            <div className="navbar-search">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Write your prompt here"
                />
                <button
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    Search
                </button>
            </div>
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="#" className="navbar-link">
                        Home
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#" className="navbar-link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
