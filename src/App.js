import React, { Component, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import UpdateUserContainer from './Containers/updateUser/UpdateUserContainer';
import AddNewUserContainer from './Containers/addNewUser/addNewUserContainer';
import HooksExample from './components/HooksExample';
//const Dashboard = lazy(() => import('./Containers/dashboard/dashboardContainer'));
import LoginButton from './components/LoginButton';

class App extends Component {
  render() {
    return (   
      <LoginButton></LoginButton>   
      // <Router>
      //   <Switch>
      //     <Route exact path="/" component={LoginButton}/>
      //     <Route path="/updateUser" component={UpdateUserContainer} />
      //     <Route path="/addNewUser" component={AddNewUserContainer} />
      //     <Route path="/hooksExample" component={HooksExample}/>
      //   </Switch>
      // </Router> 
    );
  }
}

export default App;
