import React from "react";
import DashNav from "./navs/DashNav";

const Dashboard = (props) => {

console.log(props)

    return(
        <>
        <h1>{`Welcome ${props.user.first_name}!`}</h1>
        <div className="flexible-layout">
        <div className="image-layout">
        <p>“At work at play, let safety lead the way”</p>
            <img
            src="https://blush.design/api/download?shareUri=otuoM_8wLg0KiKiw&w=800&h=800&fm=png"
            alt=" Illustration by Blush" className="dash-img"/>
            </div>
        <div className="maps">
            <p>COMING SOON - Real time Maps</p>
        </div>
        </div>
        <DashNav />
        </>
    )
}

export default Dashboard;