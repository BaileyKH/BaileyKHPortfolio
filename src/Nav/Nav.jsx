import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return(
    <nav>
        <div className="logo">
            <h1><Link to="/">Bailey<span>KH</span></Link></h1>
        </div>
        <div className="nav-items">
            <a href="#" className="links">Projects</a>
            <a href="#" className="links">Resume</a>
            <Link to="/contact" className="links">Contact</Link>
        </div>
    </nav>
    );
}

export default Nav