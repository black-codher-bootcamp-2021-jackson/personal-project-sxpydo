// import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import InputField from "./InputField";
import TextLink from "../buttons/TextLink";
import DefaultButton from "../buttons/DefaultButton";


const SignUp = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        navigate(`/dashboard`);
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
                        <InputField placeholder="Full name" type="Full name" required="required" />
                    </div>
                    <div className="form-group">  
                        <InputField placeholder="Email address" type="email" required="required"/>
                    </div>   
                    <div className="form-group">
                        <InputField placeholder="Mobile number" type="mobile" required="required" />
                    </div>
                    <div className="form-group">  
                        <InputField placeholder="Location" type="location" required="required" />
                    </div>
                    <div className="form-group">  
                        <InputField placeholder="Create password" type="password" required="required" />
                    </div>
                    <div className="form-group">  
                        <InputField placeholder="Confirm password" type="password" required="required" />
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