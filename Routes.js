import React from "react";
import { Route } from "react-router-dom";
import CurrentLocation from "./currentLocation";
import  About from "./About";
import SignIn from "./SignIn";

const Routes = () => {
  return (
    <>
      <Route path="/" exact render={() => <CurrentLocation />} />
      <Route path="/about" render={() => <About/>} />
      <Route path="/signin" render={() => <SignIn/>} />
    </>
  );
};

export default Routes;
