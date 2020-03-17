import React from 'react'
import axios from 'axios'

class Departments extends React.Component {
  state = { departments: [], }

  componentDidMount() {
    //Make Get axios request
    axios.get('url').then((res) => {

    }).catch((err) => {
      
    })
    //update state
  }
  renderDepartments = () => { }

  render() {
    return (
      <div>
        Departments
      </div>
    )
  }
}

export default Departments

