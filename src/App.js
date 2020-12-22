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
import './AssetsZuhry/icons/css/all.min.css';

function App() {
  return (
    <div>
      <p><a href='/'>Click here to see homepage/navbarhome.</a></p>
      <p><a href='/navbaruser'>Click here to see navbaruser.</a></p>
      <p><a href='/modalsignin'>Click here to see modalsignin.</a></p>
      <p><a href='/modalsignup'>Click here to see modalsignup.</a></p>
      <p><a href='/article'>Click here to see article.</a></p>
      
      <NavbarHome />

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
