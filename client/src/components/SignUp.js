// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import InputField from "./buttons/InputField";
import TextLink from "./buttons/TextLink";
import DefaultButton from "./buttons/DefaultButton";


const SignUp = () => {
    
    return (
        <>
        <div className="flexible-layout">
            <div className="image-layout">
            <img src="https://blush.design/api/download?shareUri=heh0w_1QUZ4wOFnc&w=800&h=800&fm=png"
            alt=" Illustration by Blush" class="sign-img"/>
            </div>
            <div id="sign-form">
                <h1>Create an account</h1>
                <form>
                <div class="form-group">
                    <InputField placeholder="Full name" type="text" />
                </div>
                <div class="form-group">  
                    <InputField placeholder="Email address" type="text" />
                </div>   
                <div class="form-group">
                    <InputField placeholder="Mobile number" type="email" />
                </div>
                <div class="form-group">  
                    <InputField placeholder="Create password" type="password" />
                </div>
                <div class="form-group">  
                    <InputField placeholder="Confirm password" type="password" />
                </div>  
                <div class="form-group">
                    <Link to="/dashboard">
                    <DefaultButton type="submit" id="submit" className="submit-button" label="Create" />
                    </Link>
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