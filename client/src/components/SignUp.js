import React from "react";
import InputField from "./InputField";


const SignUp = () => {
    return (
        <>
        <div className="container">

        </div>
        <div>
            <h1>Create an account</h1>
            <form>
                <InputField placeholder="Full name" type="text" />
                <InputField placeholder="Email address" type="text" />
                <InputField placeholder="Mobile number" type="email" />
                <InputField placeholder="Create password" variant="password" />
                <InputField placeholder="Confirm password" variant="password" />

            </form>
        </div>
        <div className="already">
        <p>Already have an account?</p> <a href="/">Log in</a>
        </div>
        </>
    );
}
 
export default SignUp