import React from 'react';
import Chat from '../Chat.jsx';
import Login from '../Auth/login.jsx';
import Register from '../Auth/register.jsx';
import PrivateRoute from './PrivateRoute.js';
import AuthRoute from './AuthRoutes.js';

import {
  BrowserRouter as Router,
} from "react-router-dom";

const token = localStorage.getItem('_token');

const routing = (
    <Router>
      <div>
        <AuthRoute exact path="/" component={Login} isLoggedIn={token} />
        <AuthRoute path="/Register" component={Register} isLoggedIn={token} />
        <PrivateRoute path="/chat" component={Chat} isLoggedIn={token} />
      </div>
    </Router>
)
export default routing;
