import React from "react";
import { Switch, Route } from "react-router-dom";

import FoundForm from "../components/Form/FoundForm";
import LostForm from "../components/Form/LostForm";
import FoundPets from "../components/FoundLost/FoundPets";
import LostPets from "../components/FoundLost/LostPets";
import PetFound from "../components/FoundLost/PetFound";
import PetLost from "../components/FoundLost/PetLost";
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
        <FoundPets />
      </Route>
      <Route exact={true} path="/lost">
        <LostPets />
      </Route>
      <Route exact={true} path="/home">
        <Home />
      </Route>
      <Route exact={true} path="/sign_in">
        <SignUpIn />
      </Route>
      <Route exact={true} path="/lost/form/lost">
        <LostForm />
      </Route>
      <Route exact={true} path="/found/form/found">
        <FoundForm />
      </Route>
      <Route exact={true} path="/edit_profile/:id">
        <EditProfile />
      </Route>
      <Route exact={true} path="/found/:id">
        <PetFound />
      </Route>
      <Route exact={true} path="/lost/:id">
        <PetLost />
      </Route>
    </Switch>
  );
};
export default Pages;
