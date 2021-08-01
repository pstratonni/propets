import React from "react";
import { Switch, Route } from "react-router-dom";

import LostFoundForm from "../components/Form/LostFoundForm";

import FoundPet from "../components/FoundLost/FoundPet";
import LostPets from "../components/FoundLost/LostPets";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import EditProfile from "../components/Profile/EditProfile";
import SignUpIn from "../components/SignUpIn/SignUpIn";
const Pages = () => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Main />
      </Route>
      <Route exact={true} path="/found">
        <FoundPet />
      </Route>
      <Route exact={true} path="/lost">
        <LostPets />
      </Route>
      <Route exact={true} path="/home">
        <Home />
      </Route> <Route exact={true} path="/sign_in">
        <SignUpIn />
      </Route>
      <Route exact={true} path="/form/lost">
        <LostFoundForm />
      </Route>
      <Route exact={true} path="/form/found">
      <LostFoundForm />
      </Route>
      <Route exact={true} path="/edit_profile/:id">
      <EditProfile/>
      </Route>
    </Switch>
  );
};
export default Pages;
