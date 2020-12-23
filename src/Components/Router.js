import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import Hobby from "Routes/Hobby";
import Life from "Routes/Life";
import Whoru from "Routes/Whoru";
import Studying from "Routes/Studying";

export default ()=>(
    <Router>
    <>
    <Header/>
        <Switch>
            <Route path="/whoru" exact component={Whoru}/>
            <Route path="/studying" exact component={Studying}/>
            <Route path="/" exact component={Home}/>
            <Route path="/hobbies"exact component={Hobby}/>
            <Route path="/life" exact component={Life}/>
            <Redirect from="*" to="/"/>
        </Switch>
    </>
    </Router>
);