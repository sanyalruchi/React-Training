import React from 'react';
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Dashboard = props => {
  console.log(props.userData, "in dashboard");
  return (
    <Table responsive bordered>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Avatar</th>
          <th colSpan="2">Actions</th>
        </tr>
      </thead>

      <tbody>

        {props.userData.map((user) => {

          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <img src={user.avatar} />
              </td>
              <td>
                <Link to={{ pathname:`/updateUser/${user.id}`}}>
                  <Button>Update</Button> 
                </Link>
              </td>
              <td>
                <Button onClick="onDelete()">Delete</Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  )
}

export default Dashboard;