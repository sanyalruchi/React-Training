import React, {Component} from "react";
import { Col, Label, Button, Form, FormGroup, Input } from "reactstrap";

class AddNewUser extends Component {
  constructor(props) {
    console.log("inside add comp constructor");
    super(props);
    this.state = {
      id: '',
      first_name: '',
      last_name: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    //console.log(this.state, "state");
  }

  render(){
    console.log("inside add comp render");
  return (
    <Form>
      <FormGroup row>
            <Label sm={1}>Id :</Label>
            <Col sm={4}>
              <Input
                type="text"
                name="id"
                value= {this.state.id}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={1}>First Name :</Label>
            <Col sm={4}>
              <Input
                type="text"
                name="first_name"
                value= {this.state.first_name}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={1}>Last Name :</Label>
            <Col sm={4}>
              <Input
                type="text"
                name="last_name"
                value= {this.state.last_name}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>

          <Button
            onClick={() =>              
              this.props.onAddUser(this.state)
            }
          >
            ADD USER
          </Button>
    </Form>
  );
};
}

export default AddNewUser;
