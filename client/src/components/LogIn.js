import React from "react";
import InputField from "./InputField";


const LogIn = () => {
    return (
        <>
        <div className="container">
        <img
        src="https://blush.design/api/download?shareUri=rhPx27XLK186rHlI&w=800&h=800&fm=png"
        alt=" Illustration by Blush" class="log-img"/>
        </div>
        <div>
            <h1>Log In</h1>
            <p>Hello again!</p>
            <form>
                <InputField placeholder="Email address" type="text" />
                <InputField placeholder="Password" variant="password" />
                <a href="/">Forgotten password</a>
            </form>
        <div class="form-group">
            <button id="log" class="submit-button">
                Log in
            </button>
        </div>
        </div>
        <div className="already">
            <a href="/">Forgotten password</a>
        <p>Don't have an account?</p> <a href="/">Sign up</a>
        </div>
        </>
    );
}
 
export default LogIn