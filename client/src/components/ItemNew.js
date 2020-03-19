import React from "react";
import { Form, Header } from "semantic-ui-react";
import axios from "axios";

class ItemNew extends React.Component {
  defaultValues = { 
    name: "",
    price: "",
    department_id: this.props.match.params.department_id
  };
  state = { ...this.defaultValues };

  handleSubmit = e => {
    e.preventDefault();
    const item = { ...this.state };
    axios.post(`/api/departments/${this.state.department_id}/items`, item).then(res => {
      this.setState({ ...this.defaultValues });
      this.props.history.push(`/departments/${this.state.department_id}`);
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
    const { name, price } = this.state;

    return (
      <div>
        <Header as="h1">New Item</Header>
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
            <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
              value={price}
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

export default ItemNew


