import React from 'react'
import axios from 'axios'


export default class ItemView extends React.Component {
    state = { items: [] };
    componentDidMount() {
        const { departmentId } = this.props;
        axios.get(`/api/departments/${departmentId}/items`).then(res => {
            console.log(res);
            this.setState({
                items: res.data
            });
        });
    }
    render() {
        const { items } = this.state
        return (
            <div>
                {items.map( item => (
                    <div key={`item-${item.id}`}>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        )
    }
}