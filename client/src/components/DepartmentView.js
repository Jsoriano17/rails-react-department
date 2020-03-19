import React from 'react'
import axios from 'axios'
import { Button, Header, Segment } from 'semantic-ui-react'
import ItemView from './ItemView';

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
        const { name} = this.state.department
        return (
            <div>
            <Segment>
              <Header as="h1">{ name }</Header>
            </Segment>
            <br />
            <ItemView props departmentId={this.props.match.params.id}/>
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