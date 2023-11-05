import React from "react";
import { Link } from "react-router-dom";
import "./Sign_Up.css";

// function validateform() {
//     let x = document.getElementById('phone').value;
//     if(x.length() !== 10) {
//         alert('Enter exactly 10 digits');
//         return false;
//     }
// }

const Sign_Up = () => {
    return (
        <section className="signup" style={{backgroundImage: 'url(' + require('../Navbar/images/bg.png') + ')', backgroundSize: 'cover'}}>
            <div className="container">
                <div className="signup-grid">
                    <div className="signup-text">
                        <h1>Sign Up</h1>
                        <h2>Already a member ? <Link to="/Login">Login</Link></h2>
                    </div>
                    <div className="signup-form">
                        <form>

                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />

                            </div>
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" />

                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />

                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />

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