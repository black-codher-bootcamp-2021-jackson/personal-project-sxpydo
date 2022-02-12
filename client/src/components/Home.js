import React from 'react';
import "../styles/Home.css";

const Home = () => {

    return (
      <>
        <div className="flexible-layout">
            <div className="step-out">
                <h1 className="step1" style={{ transform: "matrix(1, 0, 0, -1, 0, 0)" }}>STEP OUT</h1>
                <h1 className="step2">STEP OUT</h1>
            </div>
          <div className="image-layout">
              <img
                src="https://blush.design/api/download?shareUri=5nSdU0Szjp&w=800&h=800&fm=png"
                alt=" Illustration by Blush" class="home-img"/>
                <p style={{ fontFamily: "'Karla', sans-serif" }}>"Strut with confidence!"</p>
          </div>
        </div>
     </>
    );
};

export default Home;