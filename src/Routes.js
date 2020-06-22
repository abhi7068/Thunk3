import React, { Component } from 'react'
import SearchPage from './SearchPage'
import {Link,Route,Switch} from "react-router-dom";
import UserRepo from './UserRepo';
const Routes =()=>{
    return (
    <Switch>
      <Route exact path="/" component={SearchPage} />
      {/* <Route exact path="/map/:login" component={(props)=><Map{...props}/>} /> */}
      <Route
           exact
           path="/user/:login"
           component={(props) => <UserRepo {...props} />}
         />
     
    </Switch>
    )
}
export default Routes;