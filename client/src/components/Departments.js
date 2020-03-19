
import React from "react";
import { Card, Header, Button, } from "semantic-ui-react";
import { Link } from "react-router-dom";

import axios from 'axios'

class Departments extends React.Component {
  state = { departments: [], };

  componentDidMount() {
    axios.get("/api/departments")
      .then(res => {
        this.setState({ departments: res.data, });
      })
  }

  handleDelete = () => {
    console.log('delete clicked')
  }

  renderDepartments = () => {
    const { departments, } = this.state;

    if (departments.length <= 0)
      return <h2>No Departments</h2>
    return departments.map(department => (
      <Card key={`department-${department.menu_id}`}>
        <Card.Content>
          <Card.Header>{department.name}</Card.Header>
          {/* <Card.Description>
            {department.items.map(item => <h5>{item.name}</h5>)}
          </Card.Description> */}
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`departments/${department.menu_id}`} color='green'>
            View
          </Button>
          <Button as={Link} to={`departments/delete/${department.menu_id}`} color='red'>
            Delete
          </Button>
          <Button as={Link} to={`departments/edit/${department.menu_id}`} color='blue'>
            Edit
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
        <Button as={Link} color="black" to="/departments/new">
          Add Departments
      </Button>
        <br />
        <br />
        <Card.Group>
          {this.renderDepartments()}
        </Card.Group>
      </div>
    )
  }
}

export default Departments;