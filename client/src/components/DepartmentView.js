import React from 'react'
import axios from 'axios'
import { Button, Header, Segment, Accordion } from 'semantic-ui-react'

export default class DepartmentView extends React.Component {
  state = {
    department: {}
  }
  componentDidMount() {
    const department_id = this.props.match.params.id;
    axios.get(`/api/departments/${department_id}`).then(res => {
      // nested axios call
      const departmentData = res.data;
      this.setState({
        department: departmentData,
      });
    })
  }
  render() {
    const { name, department_id, items } = this.state.department
    return (
      <div>
        <Segment>
          <Header as="h1">{name}</Header>
        </Segment>
        <Accordion.Content active={activeIndex === accordionIndex}>
          {items.map(item => (
            <div key={item.id}>
              {`${item.name}`}
            </div>
          ))}
          <ItemForm departmentId={department_id} addItem={addItem} />
        </Accordion.Content>
        <br />
        <br />
        <Button
          color="black"
          onClick={this.props.history.goBack}
        >
          Back
            </Button>
      </div>
    )
  }
}