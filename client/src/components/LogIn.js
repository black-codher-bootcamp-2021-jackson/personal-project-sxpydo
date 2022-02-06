import React from "react";
import InputField from "./InputField";


const LogIn = () => {
    return (
        <>
        <div className="container">

        </div>
        <div>
            <h1>Log In</h1>
            <p>Hello again!</p>
            <form>
                <InputField placeholder="Email address" type="text" />
                <InputField placeholder="Password" variant="password" />
            </form>
        </div>
        <div className="already">
            <a href="/">Forgotten password</a>
        <p>Don't have an account?</p> <a href="/">Sign up</a>
        </div>
        </>
    );
}
 
export default LogIn