import React, { Component } from "react";
import connect from "react-redux/lib/connect/connect";
import AddNewUser from "../../components/addNewUser/AddNewUser";
import { addUserData } from "../../actions/Actions";

class AddNewUserContainer extends Component {
  constructor(props) {
    super(props);
    console.log("inside constructor");
    this.state = {
      formdata: {}
    };
  }

  handleAdd=(userData)=> {
    console.log(userData, "data in handleAdd container");
    console.log(" props in handle add method", this.props.match);
    this.props.addNewUser(userData);
    this.props.history.push("/");
    // dispatch({type: ADD_USER_DATA, data: userdata});
  }

  render() {
    console.log("inside render");
    return (
      <div>
        <AddNewUser onAddUser={this.handleAdd} />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   console.log(state, "props in add container statetoprops");
//   return {
//     props: state.addUserData
//   };
// };

const mapDispatchToProps = dispatch => {
  console.log("inside dispatch to props");
  return {
    addNewUser: userData => dispatch(addUserData(userData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddNewUserContainer);

//export default AddNewUserContainer;
