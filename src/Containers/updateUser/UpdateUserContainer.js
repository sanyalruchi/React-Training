import React, { Component } from "react";
import UpdateUser from "../../components/updateUser/UpdateUser";
import connect from "react-redux/lib/connect/connect";
import getUsers from "../../selectors";
import {updateUserData} from '../../actions/Actions';

class UpdateUserContainer extends Component {
  constructor(props) {
    super(props);
    this.onUpdate=this.onUpdate.bind(this);
    this.state = {
      currentUser: []
    };
  }
  callUsers(users, id) {
    let data;
    if (users.data && id) {
      data = users.data.filter(data => data.id == id);
    }
    return data;
  }
  onUpdate(updatedData){
    console.log(updatedData, "hdjhsgvcs")
    this.props.updateUserData(updatedData);
    this.props.history.push("/");
  }

  render() {
    const { id } = this.props && this.props.match && this.props.match.params;
    const { fetchUser } = this.props;
    let users = this.callUsers(fetchUser, id);
    return (
      <div className="update-form">
       {users && <UpdateUser user={users[0]} onUpdate={this.onUpdate} /> } 
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fetchUser: getUsers(state.fetchUserData)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserData: (updatedData) => dispatch(updateUserData(updatedData))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserContainer);
