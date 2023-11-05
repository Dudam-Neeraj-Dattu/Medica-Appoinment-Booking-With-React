import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import "./Login.css";

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
            navigate("/")
        }
        // eslint-disable-next-line
    }, []);
    const login = async (e) => {
        e.preventDefault();
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // name: name,
                email: email,
                password: password,
            }),
        });
        const json = await res.json();
        if (json.authtoken) {
            sessionStorage.setItem('auth-token', json.authtoken);

            sessionStorage.setItem('email', email);
            navigate('../Navbar/Navbar');
            window.location.reload()
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    alert(error.msg);
                }
            } else {
                alert(json.error);
            }
        }
    };
    return (
        <div class="container">
            <div class="signup-grid">
                <div class="signup-text">
                    <h1>Login</h1>
                    <h2>Are you a new member ? <Link to="/Sign_Up">Sign Up Here</Link></h2>
                </div>
                <div class="signup-form">
                    <form>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required class="form-control" placeholder="Enter your email" aria-describedby="helpId" />

                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" required class="form-control" placeholder="Enter your password" aria-describedby="helpId" />

                        </div>
                        <div class="btn-group" style={{ width: '60%', margin: '0 auto' }}>
                            <button type="submit" class="submit">Login</button>
                            <button type="reset" class="reset">Reset</button>
                        </div>
                    </form>
                    <div class="forgot-password">
                        <a href="#"><h2>Forgot your password?</h2></a>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Login;