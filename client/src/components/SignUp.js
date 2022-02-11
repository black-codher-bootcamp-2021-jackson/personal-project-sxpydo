// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import InputField from "../buttons/InputField";
import TextLink from "../buttons/TextLink";
import DefaultButton from "../buttons/DefaultButton";
import "../styles/SignUp.css";


const SignUp = () => {

    // const navigate = useNavigate();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [user, setUser] = useState();

    // async function registerUser(e) {
    //     e.preventDefault()

    //     const response = await fetch(`/api/`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             user,
    //             email,
    //             password,
    //         }),
    //     });
    //         const data = await response.json();
    //         console.log(data);
    // }

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
                <select id="dropdown" name="dropdown" class="form-control" required> <option disabled selected value>Pronoun</option>
                    <option value="she">she/her</option>
                    <option value="he">he/him</option>
                    <option value="they">they/them</option>
                    <option value="zie">zie/zim</option>
                </select>
                <InputField placeholder="Create password" variant="password" />
                <InputField placeholder="Confirm password" variant="password" />
                <DefaultButton type="submit" label="Create" />
            </form>
        </div>
        <div className="already">
        <p>Already have an account?</p> <TextLink text="Log in" href="/login" target="_self" />
        </div>
        </div>
        </>
    );
}
 
export default SignUp;