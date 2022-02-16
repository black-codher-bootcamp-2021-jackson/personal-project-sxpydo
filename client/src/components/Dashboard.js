import React from "react";
import DashNav from "./navs/DashNav";

const Dashboard = () => {

    return(
        <>
        <h1>Hola there!</h1>
        <div className="image-layout">
        <p>“At work at play, let safety lead the way”</p>
            <img
            src="https://blush.design/api/download?shareUri=otuoM_8wLg0KiKiw&w=800&h=800&fm=png"
            alt=" Illustration by Blush" className="dash-img"/>
            </div>
        <div>
            <p>Maps will be located here</p>
        </div>
        <DashNav />
        </>
    )
}

export default Dashboard;