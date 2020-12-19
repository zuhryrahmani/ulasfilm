import React, {useState} from 'react';
import { Switch, Route, Link } from "react-router-dom";

// import components
import NavbarHome from './NavbarHome';
import ModalSignin from './ModalSignin';
import ModalSignup from './ModalSignup';
import Article from './Article';
import Main from './Main';

function HomePage() {
  return (
    <div>
      {/* JSX */}
      <NavbarHome />

      <Switch>
        <Route path="/homepage/modalsignin">
          <ModalSignin />
        </Route>
        <Route path="/homepage/modalsignup">
          <ModalSignup />
        </Route>
        <Route path="/homepage/article">
          <Article />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default HomePage;