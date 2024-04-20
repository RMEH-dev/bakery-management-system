import "./../index.css";
import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { SignUpForm } from "../components/signupform";
import Home from "./customer/home";
export default function SignUp() {
  const [showSignUp, setShowSignUp] = useState(true);

  return (
    <Fragment>
      <div>
        <Home />
      </div>
      <SignUpForm isVisible={showSignUp} onClose={() => setShowSignUp(false)} />
    </Fragment>
  );
}
