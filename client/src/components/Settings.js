import React from 'react';
import { Link } from "react-router-dom";
import DashNav from "../components/navs/DashNav";
import InputField from "./signup/InputField";


const Settings = () => {
    return (
        <>
          <div className="flexible-layout">
            <div id="setting-layout">
                <div className="data-group">
                    <img
                    src="https://blush.design/api/download?shareUri=rwNg0QgluNcogQ3B&c=Backdrop_0%7Eebc3e5_Hair_0%7E4a312c_Skin_0%7E915b3c_Top_0%7Ee6985f&w=800&h=800&fm=png"
                    alt=" Illustration by Blush" className="avatar-img"/>
                    <h3>Pedro Alonso</h3>
                    <p>User, Guardian</p>
                </div>
                <div className="data-group">
                    <InputField placeholder="pedroaf23@gmail.com"/> 
                </div>
                <div className="data-group">
                <InputField placeholder="07798765432"/> 
                </div>
                <div className="data-group">
                <InputField placeholder="Wetherby, North Yorkshire"/> 
                </div>
                <div className="icon-group">
                <ul>
                <li><img alt="save icon" className="icon" src="icons/floppy-disk.png"/></li>
                <li><img alt="undo icon" className="icon" src="icons/undo.png"/></li>
                </ul>
            </div>
            </div>
          <div className="image-layout">
              <h1> <Link Link to="/dashboard" id="backlink" className="nav-btn">
                        <img alt="back icon" className="icon" src="icons/left-arrow.png"/>
                        </Link>
                Privacy and Data</h1>
                  <h3>Maps view</h3> <p>Street // Satalite</p> <br/>
                  <h3>Battery Saver activation</h3> <p>Step Out can be used outside from the app saving battery while on the go!</p>
                  <br/>
                  <h3>Now notification</h3>
                  <p>Show a floating button to see latest updates and able to use the app on the go,
                      while your device is locked or while using other apps </p> <br/>
                  <h3>Clear app cache</h3>
                  <div className="log-out">
                        <Link to="/" id="backlink" className="nav-btn">
                            <img alt="log out icon" className="icon" src="icons/log-out.png"/>
                        </Link>
                  </div>
          </div>
        </div>
        <DashNav />
        </>
    );
};

export default Settings;