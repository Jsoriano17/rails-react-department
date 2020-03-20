import React from 'react'
import axios from 'axios'

export default class ItemDelete extends React.Component {

    componentDidMount() {
        const department_id = this.props.match.params.department_id;
        const item_id = this.props.match.params.id
        axios.delete(`/api/departments/${department_id}/items/${item_id}`).then(res => {
            this.props.history.push(`/departments/${department_id}`)
            });
    
    }
    render() {
        return (
          <div></div>
        )
    }
}