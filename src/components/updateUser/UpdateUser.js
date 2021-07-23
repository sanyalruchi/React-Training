import React, { Component } from "react";
import "./UpdateUser.css";
import { Col, Label, Button, Form, FormGroup, Input } from "reactstrap";

// component to display 'Update User' form
class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleChange = this.handleChange.bind(this);
    console.log(this.state, "state");
    console.log(props.user, "props")
  }

  // method to map updated values to state
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // console.log(this.state, "state");
    // console.log(this.props.user, "props")
    return (
      <div className="update-form">
        <Form>
          <FormGroup row>
            <Label sm={2}>Id :</Label>
            <Col sm={4}>
              <Input
                type="text"
                name="id"
                onChange={this.handleChange}
                value={this.state.id}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>First Name :</Label>
            <Col sm={4}>
              <Input
                type="text"
                name="first_name"
                onChange={this.handleChange}
                value={this.state.first_name}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Last Name :</Label>
            <Col sm={4}>
              <Input
                type="text"
                name="last_name"
                onChange={this.handleChange}
                value={this.state.last_name}
              />
            </Col>
          </FormGroup>

          <Button
            onClick={() => {
              return this.props.onUpdate(this.state);
            }}
          >
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

export default UpdateUser;
