import React from 'react'
import './Nav.css'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className="navbar">
                <div className="left-section">
                    <div className="search-container">
                        <IconButton style={{ color: "#62585b", position: "absolute" }}>
                            <SearchIcon />
                        </IconButton>
                        <input type="text" placeholder="Search 8000+ tutorials" />
                    </div>
                </div>
                <div className="center-section">
                    <a href="#">freeCodeCamp(A)</a>
                </div>
                <div className="right-section">
                    <button className="menu-button">Menu</button>
                    <button className="signin-button"><Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                        {"Sign In"}
                    </Link>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Nav
