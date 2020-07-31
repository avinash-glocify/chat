import React from 'react';
import Chat from '../Chat.jsx';
import Login from '../Auth/login.jsx';
import Register from '../Auth/register.jsx';
import PrivateRoute from './PrivateRoute.js';
import AuthRoute from './AuthRoutes.js';
import Plans from '../Components/Stripe/Plans.jsx';
import Payment from '../Components/Stripe/Payment.jsx';

import {
  BrowserRouter as Router,
} from "react-router-dom";

const token = localStorage.getItem('_token');

const routing = (
    <Router>
      <div>
      <header className="App-header">
        <h1 className="App-title">Welcome to React-Pusher Chat</h1>
      </header>
        <AuthRoute exact path="/" component={Login} isLoggedIn={token} />
        <AuthRoute path="/Register" component={Register} isLoggedIn={token} />
        <PrivateRoute path="/chat" component={Chat} isLoggedIn={token} />
        <PrivateRoute path="/plans" component={Plans} isLoggedIn={token} />
        <PrivateRoute path="/pay" component={Payment} isLoggedIn={token} />
      </div>
    </Router>
)
export default routing;
