import React from 'react';
import { Link } from "react-router-dom";
import DashNav from "../components/navs/DashNav";
import InputField from "./signup/InputField";
import DefaultButton from "./buttons/DefaultButton";


const Guardian = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    };


    return (
        <>
        <Link to="/dashboard" id="backlink" className="nav-btn">
              <img alt="back icon" className="icon" src="icons/left-arrow.png"/>
        </Link>
                <h2> <Link Link to="/dashboard" id="backlink" className="nav-btn">
                        <img alt="back icon" className="icon" src="icons/left-arrow.png"/>
                        </Link>
                Take 5 and Stay Alive</h2>
                <p>Input upto 5 guardians from your contacts</p>
            <div id="guardian-form">
                <h1>Add guardian</h1>
                <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <InputField placeholder="First name" type="First name" required="required" />
                </div>
                <div class="form-group">
                    <InputField placeholder="Last name" type="Last name" required="required" />
                </div>
                <div class="form-group">  
                    <InputField placeholder="Email address" type="email" required="required" />
                </div>   
                <div class="form-group">
                    <InputField placeholder="Mobile number" type="mobile" required="required" />
                </div>
                <div className="form-group">
                        <DefaultButton type="submit" id="submit" className="submit-button" label="Add">
                            <Link to="/guardian"/>
                        </DefaultButton>
                </div>
                </form>
            </div>
            <DashNav />
        </>
    );
};

export default Guardian;