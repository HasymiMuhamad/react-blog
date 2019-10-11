import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Form, FormControl, Button} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './home'
import About from './about'
import News from './news'


export default class CustomNavbar extends Component {
    render (){
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Router>
                        <Nav.Link path="/" component={Home} >Home</Nav.Link>
                        <Nav.Link path="/about" component={About} >About</Nav.Link>
                        <Nav.Link path="/news" component={News} >News</Nav.Link>

                        {/* <Route path="/" component={Home} >Home</Route>
                        <Route path="/about" component={About} >About</Route>
                        <Route path="/news" component={News} >News</Route> */}
                        </Router>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}