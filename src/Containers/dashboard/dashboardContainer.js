import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Dashboard from '../../components/dashboard/Dashboard';
import {connect} from "react-redux";
import {requestUserData} from '../../actions/Actions';

class DashboardContainer extends Component {

  componentDidMount(){
    this.props.requestUserData();
  }

  render() {
    console.log(this.props.fetchUserData, "fetchUserData");
    const users=this.props && this.props.fetchUserData && this.props.fetchUserData.userData ;
    return (
      <div>
        <div>
        <Link to={{pathname:`/addNewUser`}}>
          <Button className="add-button">Add Repo</Button>
        </Link>
        </div>
        {users && users.data && <Dashboard userData={users.data}></Dashboard>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.fetchUserData.userData, "userdata in dash")
  return {
    fetching: state.fetching,
    fetchUserData: state.fetchUserData
  }
}

const mapDispatchToProps = dispatch => {
  console.log("in dispatch action")
  return {
    requestUserData: () => dispatch(requestUserData())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
