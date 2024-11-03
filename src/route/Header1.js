import "./main.css";
import {  Link } from "react-router-dom";


function Header () {
    return (
        <>
            <div className="header">
                <ul>
                <li>How it works</li>
                <li>Gifts</li>
                <li><Link to='/About'>About</Link></li>
                <li><img src="./logo.png"/></li>
                <li>Login</li>
                <li>Members</li>
                <li>Contracts</li>
                </ul>        
            </div>
        </>
    )
};

export default Header;