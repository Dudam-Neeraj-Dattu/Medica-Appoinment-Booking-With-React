import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import myImage from '../Navbar/images/Stethoscope.png'

import "./Navbar.css";


const Navbar = () => {
    const [click, setClick] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // eslint-disable-next-line
    const [username, setUsername] = useState("");
    // eslint-disable-next-line
    const [email, setEmail] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);


    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // remove email phone
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        // setUsername("");

        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }
        setEmail('');
        window.location.reload();
    }
    // eslint-disable-next-line
    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    useEffect(() => {
        const storedemail = sessionStorage.getItem("email");

        if (storedemail) {
            setIsLoggedIn(true);
            setUsername(storedemail);
        }
    }, []);

    // document.getElementById('sign-in').innerText = 'Welcome' + username;

    return (
        <section className="navbar">
            <nav>
                <div className="nav__logo">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1 className="nh1">Stay Healthy <img src={require('../Navbar/images/Stethoscope.png')} /></h1></Link>
                </div>
                <ul className={click ? 'nav__links active' : 'nav__links'}>
                    <li className="link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="link">
                        <Link to="/search/doctors">Appointments</Link>
                    </li>
                    <li className="link">
                        <Link to="/healthblog">Health Blog</Link>
                    </li>
                    <li className="link">
                        <Link to="/reviews">Reviews</Link>
                    </li>
                    {isLoggedIn ? (
                        <>
                            <li className="link">
                                <Link to="/Login">
                                    <button className="btn1 sign-up" id="sign-in"></button>
                                </Link>
                            </li>
                            <li className="link">
                                <button className="btn1 login" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>

                        </>
                    ) : (
                        <>
                            <li className="link">
                                <Link to="../Sign_Up">  
                                    <button className="btn1 sign-up">Sign Up</button>
                                </Link>
                            </li>
                            <li className="link">
                                <Link to="/Login">
                                    <button className="btn1 login">Login</button>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </section>
    );
};

export default Navbar;