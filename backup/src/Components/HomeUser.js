import React, {useState} from 'react';
import { Switch, Route, Link } from "react-router-dom";

// import components
import NavbarUser from './NavbarUser';
import ModalSignin from './ModalSignin';
import ModalSignup from './ModalSignup';
import Article from './Article';
import Main from './Main';

function HomeUser() {
  return (
    <div>
      {/* JSX */}
      <NavbarUser />

      <Switch>
        <Route path="/homeuser/modalsignin">
          <ModalSignin />
        </Route>
        <Route path="/homeuser/modalsignup">
          <ModalSignup />
        </Route>
        <Route path="/homeuser/article">
          <Article />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default HomeUser;