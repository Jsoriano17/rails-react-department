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
import DepartmentView from './components/DepartmentView';
import DepartmentDelete from './components/DepartmentDelete'
import DepartmentEdit from './components/DepartmentEdit'
import ItemNew from './components/ItemNew'
import ItemEdit from './components/ItemEdit'
import ItemDelete from './components/ItemDelete'



function App() {
  return (
    <>
      <NavBar />
      <Container >
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route exact path='/departments' component={Departments} />
          <Route exact path='/departments/new' component={DepartmentForm} />
          <Route exact path='/departments/delete/:id' component={DepartmentDelete} />
          <Route exact path='/departments/edit/:id' component={DepartmentEdit} />
          <Route exact path="/departments/:id" component={DepartmentView} />
          <Route exact path="/departments/:department_id/newItem" component={ItemNew} />
          <Route exact path='/departments/:department_id/editItem/:id' component={ItemEdit} />
          <Route exact path='/departments/:department_id/deleteItem/:id' component={ItemDelete} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
