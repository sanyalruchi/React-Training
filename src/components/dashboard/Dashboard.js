import React from "react";
import { Table, Button } from "reactstrap";
//import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// component to display dashboard data
const Dashboard = props => {
  let history = useHistory();

  function handleClick(){
    history.push("/updateUser");
  }

  return (
    <Table responsive bordered>
      <thead>
        <tr className="rowStyle">
          <th colSpan="2">Id</th>
          <th colSpan="2">First Name</th>
          <th colSpan="2">Last Name</th>
          <th colSpan="2">Avatar</th>
          <th colSpan="4">Actions</th>
        </tr>
      </thead>

      <tbody>
        {props.userData.map(user => {
          return (
            <tr key={user.id} className="rowStyle">
              <td colSpan="2">{user.id}</td>
              <td colSpan="2">{user.first_name}</td>
              <td colSpan="2">{user.last_name}</td>
              <td colSpan="2">
                <img className='App-logo' src={user.avatar} alt="avatar"/>
              </td>
              <td colSpan="2">
                {/* <Link to={{ pathname: `/updateUser/${user.id}` }}> */}
                  <Button onClick={handleClick}>Update</Button>
                {/* </Link> */}
              </td>
              <td colSpan="2">
                <Button onClick={() => props.onDelete(user.id)}>Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Dashboard;
