import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from "semantic-ui-react"
import styled from 'styled-components';

const NavBar = () => (
  <Menu as={NavbarColor}>
    <Link to='/'>
      <Menu.Item as={NavbarFont}>
        Home
      </Menu.Item>
    </Link>
    <Link to='/About'>
      <Menu.Item as={NavbarFont}>
        About
      </Menu.Item>
    </Link>
    <Link to='/departments'>
      <Menu.Item as={NavbarFont}>
        Departments
      </Menu.Item>
    </Link>
  </Menu>

)

const NavbarFont = styled.div`
font-family: 'Baloo 2', cursive;
font-size: 20px;
transition: background 0.4s ease-in-out !important;

&:hover {
  background: #d4ecff !important;
  transition: background 0.4s ease-in-out !important;
}
`
const NavbarColor = styled.div`
background: #91cfff !important;
`

export default NavBar