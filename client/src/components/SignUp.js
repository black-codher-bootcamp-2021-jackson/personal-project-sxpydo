import React from "react";
import InputField from "./InputField";
import "../styles/SignUp.css";


const SignUp = () => {
    return (
        <>
        <div className="flex-layout">
        <div className="image-layout">
            <img src="https://blush.design/api/download?shareUri=heh0w_1QUZ4wOFnc&w=800&h=800&fm=png"
            alt=" Illustration by Blush" class="sign-img"/>
        </div>
        <div className="form-layout">
            <h1>Create an account</h1>
            <form>
                <InputField placeholder="Full name" type="text" />
                <InputField placeholder="Email address" type="text" />
                <InputField placeholder="Mobile number" type="email" />
                <select id="dropdown" name="dropdown" class="form-control" required> <option disabled selected value>Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other" type="text">Other</option>
                </select>
                <InputField placeholder="Create password" variant="password" />
                <InputField placeholder="Confirm password" variant="password" />
            </form>
        <a href ="./Dashboard.js">
            <button id="create" class="create-button">
                Create
            </button>
        </a>
        </div>
        <div className="already">
        <p>Already have an account?</p> <a href="/">Log in</a>
        </div>
        </div>
        </>
    );
}
 
export default SignUp