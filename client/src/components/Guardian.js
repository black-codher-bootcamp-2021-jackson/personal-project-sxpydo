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
                <div class="form-group">
                    <select id="dropdown" name="dropdown" required="required">
                    <option disabled selected value>Relationship to you</option>
                        <option value="mother">Mother</option>
                        <option value="father">Father</option>
                        <option value="son">Son</option>
                        <option value="daughter">Daughter</option>
                        <option value="husband">Husband</option>
                        <option value="wife">Wife</option>
                        <option value="partner">Partner</option>
                        <option value="brother">Brother</option>
                        <option value="sister">Sister</option>
                        <option value="in-law">Mother-in-law</option>
                        <option value="in-law">Father-in-law</option>
                        <option value="friend">Friend</option>
                    </select>
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