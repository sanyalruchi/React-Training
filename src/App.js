import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardContainer from "./Containers/dashboard/dashboardContainer";
import UpdateUserContainer from './Containers/updateUser/UpdateUserContainer';
import AddNewUserContainer from './Containers/addNewUser/addNewUserContainer';


class App extends Component {
  render() {
    return (      
        <Router>
          <Switch>
            <Route exact path="/" component={DashboardContainer}/>
            <Route path="/updateUser/:id" component={UpdateUserContainer} />
            <Route path="/addNewUser" component={AddNewUserContainer} />
          </Switch>        
        </Router>
        
    );
  }
}

export default App;
