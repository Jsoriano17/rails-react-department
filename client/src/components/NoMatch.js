import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Header} from 'semantic-ui-react'

const NoMatch = () => {
  return(
    <div style={styles.container}>
      <Header as='h2' style={styles.header}>
        PAGE WAS NOT FOUND
      </Header>
      <Header as='h3'>
        Please click the button below 
      </Header>
      <Header as='h3'>
        to redirect to the Home page
      </Header>
      <Link to='/'>
        <Button color='red'>Home</Button>
      </Link>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px'
  }, 
  header: {
    fontSize: '50px'
  }
}

export default NoMatch