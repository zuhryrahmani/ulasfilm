import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

// import components
import HomePage from './Components/HomePage';
import HomeUser from './Components/HomeUser';
import Footer from './Components/Footer';

// import css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <a href='/'>HomePage</a>
      <a href='/homeuser'>Sign In</a>
      <a href='/'>Sign Out</a>

      <a href='/homeuser/modalsignin'>modal signin</a>
      <a href='/homeuser/modalsignup'>modal signup</a>
      <a href='/homeuser/article'>article</a>
      <a href='/homeuser/'>main</a>

      {/* <Switch>
        <Route path="/navbarhome">
          <NavbarHome />
        </Route>
        <Route path="/navbaruser">
          <NavbarUser />
        </Route>
      </Switch> */}

      {/* <NavbarHome />

      <Switch>
        <Route path="/modalsignin">
          <ModalSignin />
        </Route>
        <Route path="/modalsignup">
          <ModalSignup />
        </Route>
        <Route path="/article">
          <Article />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch> */}

      <Switch>
        <Route path="/homeuser">
          <HomeUser />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>


      <Footer />
    </div>
  );
}

export default App;
