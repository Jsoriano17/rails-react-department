
import React from "react";
import { Card, Header, Button, } from "semantic-ui-react";
import { Link } from "react-router-dom";

import axios from 'axios'

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then( res => {
        this.setState({ departments: res.data, });
      })
  }

  renderdepartments = () => {
    const { departments, } = this.state;

    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map( department => (
      <Card>
        <Card.Content>
          <Card.Header>{ department.name }</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`/departments/${department.id}`} color='blue'>
            View
          </Button>
        </Card.Content>
      </Card>
    ))
  }

  render() {
    return (
      <div>
      <Header as="h1">Departments</Header>
      <br />
      <Button as={Link} color="blue" to="/departmentform">
        Add Departments
      </Button>
      <br />
      <br />
      <Card.Group>
        { this.renderdepartments() }
      </Card.Group>
    </div>
    )
  }
}

export default Departments;