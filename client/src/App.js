import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import { Switch, Route } from "react-router-dom"
import Departments from './components/Departments'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import DepartmentForm from './components/DepartmentForm'

function App() {
  return (
    <>
      <NavBar />
      <Container >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Departments' component={Departments} />
          <Route path='/DepartmentForm' component={DepartmentForm} />

          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
