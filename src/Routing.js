import React from 'react';
import Chat from './chat.jsx';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Chat}></Route >
      </div>
    </Router>
)
export default routing;
