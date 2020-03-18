import React from 'react'
import axios from 'axios'

export default class DepartmentDelete extends React.Component {

    componentDidMount() {
        const department_id = this.props.match.params.id;
        axios.delete(`/api/departments/${department_id}`).then(res => {
            this.props.history.push("/departments")
            });
    
    }
    render() {
        return (
          <div></div>
        )
    }
}