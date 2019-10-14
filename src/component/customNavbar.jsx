import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Form, FormControl, Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './home.jsx'
import News from './news.jsx'
import About from './about.jsx'



class CustomNavbar extends Component {
    render (){
        return (
            <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/" component={Home}>Home</Nav.Link>
              <Nav.Link href="/about" component={About}>About</Nav.Link>
              <Nav.Link href="/news" component={News}>News</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>
        )
    }
}


export default CustomNavbar;