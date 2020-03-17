import React from 'react'
import axios from 'axios'
import { Button, Header, Segment } from 'semantic-ui-react'

export default class DepartmentView extends React.Component {
    state = {
        department: {}
    }
    componentDidMount() {
        console.log(this.props.match.params)
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
        const { name} = this.state.department
        return (
            <div>
            <Segment>
              <Header as="h1">{ name }</Header>
            </Segment>
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