import React from 'react';

const Home = () => {

    return (
      <>
        <div className="flexible-layout">
          <div className="image-layout">
              <img
                src="https://blush.design/api/download?shareUri=5nSdU0Szjp&w=800&h=800&fm=png"
                alt=" Illustration by Blush" class="home-img"/>
              <p>"Strut with confidence!"</p>
          </div>
            <section className="step-out">
                <h1 className="step1">STEP OUT</h1>
                <h1 className="step2">STEP OUT</h1>
            </section>
        </div>
     </>
    );
};

export default Home;