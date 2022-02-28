import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import InputField from "./InputField";
import TextLink from "../buttons/TextLink";
import DefaultButton from "../buttons/DefaultButton";


const SignUp = (props) => {
    
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = { first_name: firstName, last_name:lastName, email:email,
                         mobile:mobile, location:location, password:password }; 
        // console.log(user)

        const response = await axios.post('http://localhost:8080/api/user/signup', user);
        if (response.status === 200) {
            props.setUser(response.data.user)
            localStorage.setItem('user', response.data.user);
            navigate(`/dashboard`);
        }
        else {
            console.log ("Register error")
     }
    };



    return (
        <>
        <div className="flexible-layout">
            <div className="image-layout">
            <img src="https://blush.design/api/download?shareUri=heh0w_1QUZ4wOFnc&w=800&h=800&fm=png"
            alt=" Illustration by Blush" className="sign-img"/>
            </div>
            <div id="sign-form">
                <h1>Create an account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <InputField placeholder="First name" type="First name" required="required" 
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <InputField placeholder="Last name" type="Last name" required="required" 
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form-group">  
                        <InputField placeholder="Email address" type="email" required="required"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>   
                    <div className="form-group">
                        <InputField placeholder="Mobile number" type="mobile" required="required"
                            onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <div className="form-group">  
                        <InputField placeholder="Location" type="location" required="required"
                            onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className="form-group">  
                        <InputField placeholder="Create password" type="password" required="required"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">  
                        <InputField placeholder="Confirm password" type="password" required="required"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>  
                    <div className="form-group">
                        <DefaultButton type="submit" id="submit" className="submit-button" label="Create">
                            <Link to="/dashboard"/>
                        </DefaultButton>
                    </div>
                </form>
            <div className="already">
                <p>Already have an account?</p> <TextLink text="Log in" href="/login" target="_self" />
            </div>
        </div>
        </div>
       </>
    );
}
 
export default SignUp;