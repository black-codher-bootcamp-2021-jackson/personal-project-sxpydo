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
                <select id="dropdown" name="dropdown" class="form-control" required> <option disabled selected value>Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other" type="text">Other</option>
                </select>
                <InputField placeholder="Create password" variant="password" />
                <InputField placeholder="Confirm password" variant="password" />
            </form>
        <div class="form-group">
            <button id="create" class="create-button">
                Create
            </button>
        </div>
        </div>
        <div className="already">
        <p>Already have an account?</p> <a href="/">Log in</a>
        </div>
        </>
    );
}
 
export default SignUp