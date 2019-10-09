import React, {Component} from 'react'
import {Link as Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button, Container} from 'react-bootstrap';
import './home.css';

export default class Home extends Component {
    render (){
        return (
            <Container>
                
                
              
                <Jumbotron>
                    <h1>HOME PAGE</h1>
                    <h2>Selamat datang di hasymi's blog</h2>
                    <p>Berbagai tulisan mengenai proses belajar React JS</p>
                </Jumbotron>
                <div>
                    <Link to="/news">
                        <Button variant="info">News</Button>
                    </Link>
                    <Link to="/about">
                        <Button variant="info">About</Button>
                    </Link>
                    <Link to="/">
                        <Button variant="info">Home</Button>
                    </Link>
                </div>
            </Container>
        )
    }
}