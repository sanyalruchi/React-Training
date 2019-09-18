import React, { Component } from "react";
import connect from "react-redux/lib/connect/connect";
import AddNewUser from "../../components/addNewUser/AddNewUser";
import { addUserData } from "../../actions/Actions";

// container component for Add User component
class AddNewUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formdata: {}
    };
  }

  /**
   * function to add new user
   * userData - new user data
   */
  handleAdd = userData => {
    this.props.addNewUser(userData);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <AddNewUser onAddUser={this.handleAdd} />
      </div>
    );
  }
}

/**
 * to dispatch action -  addUserData
 */
const mapDispatchToProps = dispatch => {
  return {
    addNewUser: userData => dispatch(addUserData(userData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddNewUserContainer);
