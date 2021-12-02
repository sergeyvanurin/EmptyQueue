import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Card from '../Card/Card.js';
import Home from '../Home/Home.js';
import Search from '../Search/Search.js';

const Webpages = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/card" component = {Card} />
            <Route path = "/search" component = {Search} />
        </Router>
    );
};export default Webpages;