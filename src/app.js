import React, { useState, useEffect } from "react";
import "./styles/style.scss";
import Navbar from "./navbar";
import { HashRouter, Route, Switch } from "react-router-dom";
import Soccer from "./soccer";
import Home from "./home";
// The Api
//  https://restcountries.eu/rest/v2/name/{name}
// https://restcountries.eu/rest/v2/all
export default function App() {
  useEffect(async () => {
    const result = await fetch("https://restcountries.eu/rest/v2/name/iran");
    const parsed = await result.json();
    console.log(parsed.soccer);
  }, []);
  return (
    <>
      {/* Navbar */}

      <HashRouter>
        <Navbar />
        <Switch>
          <Route component={Soccer} exact path="/soccer" />
          <Route component={Home} exact path="/" />
        </Switch>
      </HashRouter>
    </>
  );
}
