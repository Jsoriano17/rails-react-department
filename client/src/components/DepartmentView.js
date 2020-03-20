import React from 'react'
import axios from 'axios'
import { Button, Header, Segment, Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default class DepartmentView extends React.Component {
  state = {
    items: [],
    department: {},
    department_id: this.props.match.params.id
  }
  componentDidMount() {
    axios.get(`/api/departments/${this.state.department_id}/items`).then(res => {
      this.setState({
        items: res.data,
      });
      this.getDepartmentName()
    })
  }

  getDepartmentName() {
    axios.get(`/api/departments/${this.state.department_id}`).then(res => {
      this.setState({
        department: res.data
      })
    })
  }

  renderItems = () => {
    const { items, department_id } = this.state

    if (items.length <= 0) {
      return <h2>No Items</h2>
    }

    return (items.map(item => (
      <Card key={`item-${item.id}`} as={CardColor}>
        <Card.Content>
          <Card.Header as={CardHeader} >{item.name}</Card.Header>
          <Card.Description>Price:{item.price}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={Link} to={`${department_id}/deleteItem/${item.id}`} color='red'>
            Delete
        </Button>
          <Button as={Link} to={`${department_id}/editItem/${item.id}`} color='blue'>
            Edit
        </Button>
        </Card.Content>
      </Card>
    )))
  }

  render() {
    const { department, department_id } = this.state
    return (
      <div>
        <Button as={Link} color="black" style={{ ...styles.cardHeader}} to={`${department_id}/newItem`}>
          Add Items
          </Button>
        <Segment as={CardBackColor}>
          <Header as="h1">{department.name}</Header>
          <Card.Group>
            {this.renderItems()}
          </Card.Group>
        </Segment>
        <br />
        <br />

      </div>
    )
  }
}
const CardColor = styled.div`
background: #d4ecff !important;
`
const CardBackColor = styled.div`
background: #91cfff !important;
`
const CardHeader = styled.h1`
font-family: 'Baloo 2', cursive !important;
font-size: 20px !important;
`
const styles = {
  cardHeader: {
    fontFamily: "'Baloo 2', cursive !important",
    fontSize: "50px !important"
  }
}