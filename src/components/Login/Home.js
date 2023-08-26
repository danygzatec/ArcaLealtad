import React from "react";
import './Home.css'

import LoginDemo from "./Login";


const Home = () => {



  return (
    <>
      <div className="login-homepage ">
        <br />
        <br />
        <img src="logo.png" className="new-logo d-flex align-items-center justify-content-center" alt="arca continental logo"/>
      </div>
      <div className="brown"></div>
      <div className="login-form">
        <LoginDemo />
      </div>
    </>
  );
}

export default Home;
