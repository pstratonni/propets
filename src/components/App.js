import React, { useState } from "react";
import Pages from "../Layouts/Pages";
import Head from "./Hedars/Head";
import NavBar from "./NavBar";
import LogIn from "./Profile/LogIn";

export const navContext = React.createContext();

const App = () => {
  const [isNav, setIsNav] = useState(false);
  const [isLostFound, setIsLostFound] = useState(false);
  const renderNavigation = () => {
    return isNav ? (
      <>
        <Head />
        <NavBar />
      </>
    ) : null;
  };

  return (
    <navContext.Provider
      value={{ isNav, setIsNav, isLostFound, setIsLostFound }}
    >
      <main className={isNav ? "page home-page" : null}>
        {renderNavigation()}
        <Pages />
        {isNav ? <LogIn /> : null}
      </main>
    </navContext.Provider>
  );
};

export default App;
