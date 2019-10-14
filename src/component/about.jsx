import React, {Component} from 'react'
import { Container, Jumbotron, Button } from 'react-bootstrap'
import {Link as Link} from 'react-router-dom'


export default class About extends Component {
    render (){
        return (
            <Container>
                <Jumbotron>
                    <h1>ABOUT PAGE</h1>
                    <p>Ini adalah halaman page</p>
                </Jumbotron>
                
            </Container>
        )
    }
}
