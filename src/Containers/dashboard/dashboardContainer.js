import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Dashboard from "../../components/dashboard/Dashboard";
import { connect } from "react-redux";
import { requestUserData, deleteUserData } from "../../actions/Actions";
import ReactSelect from "../../components/reactSelect";
import AppSidebar from '../../components/sidebar/index';

class DashboardContainer extends Component {

  componentDidMount() {
    console.log("inside did mount")
    this.props.requestUserData();
  }

  onDeleteUser = userId => {
    this.props.deleteUserdata(userId);
  };

  render() {
    const users =
      this.props &&
      this.props.fetchUserData &&
      this.props.fetchUserData.userData;
    return (
      <div>
        
        <div>
          <Link to={{ pathname: `/addNewUser` }}>
            <Button className="add-button">Add Repo</Button>
          </Link>
        </div>
        <div >
        {users &&
          users.data && (
            <Dashboard userData={users.data} onDelete={this.onDeleteUser} />
          )}
          <ReactSelect></ReactSelect>
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    fetchUserData: state.fetchUserData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUserData: () => dispatch(requestUserData()),
    deleteUserdata: id => dispatch(deleteUserData(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
