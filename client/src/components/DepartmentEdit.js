import React from "react";
import { Form, Header } from "semantic-ui-react";
import axios from "axios";

class DepartmentsEdit extends React.Component {
  department_id = this.props.match.params.id;
  state = {
    name: ''
  };

  componentDidMount() {
    const department_id = this.props.match.params.id;
    axios.get(`/api/departments/${department_id}`).then(res => {
        // nested axios call
        const departmentData = res.data;
        this.setState({
          name: departmentData.name
        });
    })
}

  handleSubmit = e => {
    e.preventDefault();
    const department_id = this.props.match.params.id;
    const department = { ...this.state};
    axios.put(`/api/departments/${department_id}`, department).then(res => {
      this.props.history.push("/departments");
    }).catch( (err) => {
      console.log(err.response)
  })

  };

  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <Header as="h1">Edit Department</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />

          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default DepartmentsEdit;