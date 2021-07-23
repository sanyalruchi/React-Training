import React, { Component, Suspense, lazy } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { connect } from "react-redux";
import { requestUserData, deleteUserData } from "../../actions/Actions";
// import ReactSelect from "../../components/reactSelect";
// import AppSidebar from '../../components/sidebar/index';
import DisplaySelectedUser from '../DisplayUser/displaySelectedUser';
import ErrorBoundary from '../ErrorBoundary';

const DashBoardUserData = lazy(() => import('../../components/dashboard/Dashboard'));

class DashboardContainer extends Component {
  constructor(){
    // There is only one reason when one needs to pass props to super():
    //When you want to access this.props in constructor.
    super();
    this.state = {
      hasError: false
    }
    console.log("inside constructor of Dashboard");
  }

  componentDidMount() {
    console.log("inside did mount of Dashboard");
    this.props.requestUserData();
  }

  onDeleteUser = userId => {
    this.props.deleteUserdata(userId);
  };

  componentWillUnmount(){
    console.log("inside componentWillUnmount of dashboard");
  }

  static getDerivedStateFromError(error){
    console.log(error, "error inside getDerivedStateFromError");
    return {hasError: true}
  }

  // componentDidCatch(error, info){
  //   console.log(error, "error caught");
  //   console.log(info.componentStack, "info");
  //   this.setState({
  //     error: error,
  //     errorInfo: info
  // })
  // }

  render() {
    if(this.state.hasError){
      return (<h1>Helloooooo</h1>)
    }
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

          <Link to={{pathname: '/hooksExample'}}>
            <Button>Hooks Example</Button>
          </Link>
        </div>

       
        {users &&
          users.data && ( <ErrorBoundary>
            <Suspense fallback={<h3>Loading....</h3>}>
            <DashBoardUserData userData={users.data} onDelete={this.onDeleteUser} />
            </Suspense>
            
            </ErrorBoundary>
          )}
          {/* <ReactSelect></ReactSelect> */}
        

       
          {users &&
          users.data && ( <ErrorBoundary>
            <DisplaySelectedUser user={users.data[0].first_name}></DisplaySelectedUser> </ErrorBoundary>
          )}
       
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "inside mapStateToProps")
  return {
    fetching: state.fetching,
    fetchUserData: state.fetchUserData
  };
};

const mapDispatchToProps = dispatch => {
  console.log( "inside dispatch props")
  return {
    requestUserData: () => dispatch(requestUserData()),
    deleteUserdata: id => dispatch(deleteUserData(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
