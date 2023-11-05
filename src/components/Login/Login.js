import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {

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
                            <input type="email" name="email" id="email" required class="form-control" placeholder="Enter your email" aria-describedby="helpId" />

                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input name="password" id="password" required class="form-control" placeholder="Enter your password" aria-describedby="helpId" />

                        </div>
                        <div class="btn-group" style={{width: '60%', margin: '0 auto'}}>
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