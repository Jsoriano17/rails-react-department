
import React from "react";
import { Card, Header, Button, } from "semantic-ui-react";
import { Link } from "react-router-dom";

import axios from 'axios'
import styled from 'styled-components';

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
    return departments.map( department => (
      <Card key={`department-${department.id}`} as={CardColor}>
        <Card.Content>
          <Card.Header as={ DepartmentHeader } fSize="small">{ department.name }</Card.Header>
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
      <Header as={ DepartmentHeader } fSize="large">Departments</Header>
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

const DepartmentHeader = styled.h1`
font-family: 'Baloo 2', cursive !important;
font-size: ${props => fontSize(props.fSize)} !important;
`
const fontSize = (size) => {
  switch(size) {
    case 'large':
      return '50px';
    case 'small':
      return '25px';
    default:
      return '15px';
  }
};

const CardColor = styled.div`
background: #d4ecff !important;
`
export default Departments;