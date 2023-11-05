import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign_Up.css";
import { API_URL } from '../../config';

// function validateform() {
//     let x = document.getElementById('phone').value;
//     if(x.length() !== 10) {
//         alert('Enter exactly 10 digits');
//         return false;
//     }
// }



const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');
    const navigate = useNavigate();
    const register = async (e) => {
        e.preventDefault();
        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json();
        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            // phone and email
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("../Login/Login");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg);
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    return (
        <section className="signup" style={{backgroundImage: 'url(' + require('../Navbar/images/bg.png') + ')', backgroundSize: 'cover'}}>
            <div className="container">
                <div className="signup-grid">
                    <div className="signup-text">
                        <h1>Sign Up</h1>
                        <h2>Already a member ? <Link to="/Login">Login</Link></h2>
                    </div>
                    <div className="signup-form">
                        <form method="POST" onSubmit={()=>register}>

                            <div className="form-group">
                                <label for="name">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />

                            </div>
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />

                            </div>
                            <div className="form-group">
                                <label htmlfor="email">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                                {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}

                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />

                            </div>
                            <div className="btn-group" style={{width: '60%', margin: '0 auto'}}>
                                <button type="submit" className="submit">Submit</button>
                                <button type="reset" className="reset">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );

}

export default Sign_Up;