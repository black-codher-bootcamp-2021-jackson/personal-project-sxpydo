import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import TextLink from "../buttons/TextLink";
import DefaultButton from "../buttons/DefaultButton";

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, setUser] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user")
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser)
        }
    }, [])

    // log in the user
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, password };
        // send the username and password to the server
        const response = await axios.post('/api/login', user);
        // Authenticate the user
        // authenticateUser(email, password); if user is authenticated then do the following
        // set the state of the user
        setUser(response.data);
        // store the user in localStorage
        localStorage.setItem('user', JSON.stringify(response.data));

        // When the authentication is done
        // Redirect the user to the `/profile/${userName}` page
        // the below code adds the `/profile/${userName}` page
        // to the history stack.
        navigate(`/dashboard`);
    };

    return (
        <>
        <div className="flexible-layout">
            <div className="image-layout">
            <img
            src="https://blush.design/api/download?shareUri=rhPx27XLK186rHlI&w=800&h=800&fm=png"
            alt=" Illustration by Blush" class="log-img"/>
            </div>
            <div id="sign-form">
                <h1>Log In</h1>
                <p>Hello again!</p>
                <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <InputField placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
                                required="required" /> 
                </div>
                <div class="form-group">
                    <InputField placeholder="Password*" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                required="required" />
                </div>
                <div class="form-group">
                    <Link to="/dashboard">
                    <DefaultButton type="submit" id="submit" className="submit-button" label="Log in" />
                    </Link>
                </div>
                </form>
            <div className="already">
                <a href="/">Forgotten password</a>
                <p>Don't have an account?</p> <TextLink text="Sign up" href="/signup" target="_self" /> 
            </div>
         </div>   
        </div>
        </>
    );
};
 
export default LogIn;