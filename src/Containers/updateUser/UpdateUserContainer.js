import React, { Component } from "react";
import UpdateUser from "../../components/updateUser/UpdateUser";
import connect from "react-redux/lib/connect/connect";
// import getUsers from "../../selectors";
import { updateUserData } from "../../actions/Actions";

class UpdateUserContainer extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      currentUser: []
    };
  }

  /**
   * to fetch selected user data
   * @param {list of users} users
   * @param {id of selected user} id
   */
  selctedUser(users, id) {
    let data;
    if (users.data && id) {
      data = users.data.filter(data => data.id === id);
    }
    return data;
  }

  /**
   * to dispatch fucntion to update data
   * @param {updated data of user} updatedData
   */
  onUpdate(updatedData) {
    this.props.updateUserData(updatedData);
    this.props.history.push("/");
  }

  render() {
    const { id } = this.props && this.props.match && this.props.match.params;
    const { fetchUser } = this.props;
    let users = this.selctedUser(fetchUser, id);
    return (
      <div className="update-form">
        {users && <UpdateUser user={users[0]} onUpdate={this.onUpdate} />}
      </div>
    );
  }
}

/**
 * to map component state to props
 * @param {state in store} state
 */
const mapStateToProps = state => {
  console.log(state, "state in update")
  return {
    //fetchUser: getUsers(state.fetchUserData)
  };
};

/**
 * to dispatch action -  updateUserData
 */
const mapDispatchToProps = dispatch => {
  return {
    updateUserData: updatedData => dispatch(updateUserData(updatedData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateUserContainer);
