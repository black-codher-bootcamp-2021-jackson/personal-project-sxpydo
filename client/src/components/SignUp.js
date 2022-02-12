// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import InputField from "../buttons/InputField";
import TextLink from "../buttons/TextLink";
import DefaultButton from "../buttons/DefaultButton";


const SignUp = () => {
    
    return (
        <>
        <div className="flexible-layout">
            <div className="image-layout">
            <img src="https://blush.design/api/download?shareUri=heh0w_1QUZ4wOFnc&w=800&h=800&fm=png"
            alt=" Illustration by Blush" class="sign-img"/>
            </div>
            <div className="form-layout">
                <h1>Create an account</h1>
                <form>
                    <InputField placeholder="Full name" type="text" /> <br/><br/>
                    <InputField placeholder="Email address" type="text" /> <br/><br/>
                    <InputField placeholder="Mobile number" type="email" /> <br/><br/>
                    <select id="dropdown" name="dropdown" class="form-control" required> <option disabled selected value>Pronoun</option>
                        <option value="she">she/her</option>
                        <option value="he">he/him</option>
                        <option value="they">they/them</option>
                        <option value="zie">zie/zim</option>
                    </select> <br/><br/>
                    <InputField placeholder="Create password" variant="password" /> <br/><br/>
                    <InputField placeholder="Confirm password" variant="password" /> <br/><br/>
                    <DefaultButton type="submit" target="./Dashboard.js" label="Create" />
                </form>
            <br/>
            <div className="already">
                <p>Already have an account?</p> <TextLink text="Log in" href="/login" target="_self" />
            </div>
        </div>
        </div>
       </>
    );
}
 
export default SignUp;