import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

// import components
import NavbarHome from './Components/NavbarHome';
import NavbarUser from './Components/NavbarUser';
import ModalSignin from './Components/ModalSignin';
import ModalSignup from './Components/ModalSignup';
import Article from './Components/Article';
import Main from './Components/Main';
import Footer from './Components/Footer';

// import css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      {/* <a href='/'>HomePage</a>
      <a href='/navbaruser'>Sign In</a>
      <a href='/'>Sign Out</a>

      <a href='/modalsignin'>modal signin</a>
      <a href='/modalsignup'>modal signup</a>
      <a href='/article'>article</a>
      <a href='/'>main</a> */}

      <Switch>
        <Route path="/navbaruser">
          <NavbarUser />
        </Route>
        <Route path="/">
          <NavbarHome />
        </Route>
      </Switch>

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
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
