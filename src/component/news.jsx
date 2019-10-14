import React, {Component} from 'react'
import {Container, Jumbotron, Button} from 'react-bootstrap'
import {Link as Link} from 'react-router-dom';

export default class News extends Component {
    render (){
        return (
            <Container>
            <Jumbotron>
                <h1>NEWS PAGE</h1>
                <h2>Selamat datang di hasymi's blog</h2>
                <p>Berbagai tulisan mengenai proses belajar React JS</p>
            </Jumbotron>
           
        </Container>
        )
    }
}