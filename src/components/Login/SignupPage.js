import React from "react";

import Signup from "./Signup";
import './Signup.css'


const SignupPage = () => {



  return (
    <>
      <div className="login-homepage ">
        <br />
        <br />
        <img src="logo.png" className="new-logo d-flex align-items-center justify-content-center" alt="arca continental logo"/>
      </div>
      <div className="brown"></div>
      <div className="login-form">
        <Signup />
      </div>
    </>
  );
}

export default SignupPage;