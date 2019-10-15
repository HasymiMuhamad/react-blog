import React, {Component} from 'react'
import {Container, Jumbotron, Button, Row, Col} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import {Link as Link} from 'react-router-dom';

export default class News extends Component {
    render (){
        return (
            <Container>
            {/* <Jumbotron>
                <h1>NEWS PAGE</h1>
                <h2>Selamat datang di hasymi's blog</h2>
                <p>Berbagai tulisan mengenai proses belajar React JS</p>
            </Jumbotron> */}
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://urusandunia.com/wp-content/uploads/2017/06/mobil-sport-termahal-di-dunia-Zenvo-ST1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://statik.tempo.co/data/2018/01/29/id_680476/680476_720.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="http://media.pricebook.co.id/article/5a72afa8150ba0eb47c92a2d/5a72afa8150ba0eb47c92a2d_1517806798.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/>
            <br/>
            <br/>
            <Row>
                <Col></Col>
                <Col xs={12}> 
                <p align='justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent tristique magna sit amet purus gravida quis blandit. Massa massa ultricies mi quis hendrerit dolor magna eget est. Bibendum at varius vel pharetra vel turpis nunc eget. Viverra mauris in aliquam sem. Nunc consequat interdum varius sit amet. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. At varius vel pharetra vel turpis nunc. Donec ultrices tincidunt arcu non sodales. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Amet nisl suscipit adipiscing bibendum.

Velit ut tortor pretium viverra. Justo donec enim diam vulputate ut pharetra. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Facilisis leo vel fringilla est ullamcorper eget nulla. Urna duis convallis convallis tellus. A erat nam at lectus urna duis convallis. Curabitur gravida arcu ac tortor dignissim. Massa id neque aliquam vestibulum morbi. Vulputate odio ut enim blandit volutpat. Libero justo laoreet sit amet cursus sit amet dictum.

Vestibulum lorem sed risus ultricies tristique. Aliquam eleifend mi in nulla. Dolor sit amet consectetur adipiscing. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Congue quisque egestas diam in arcu cursus euismod quis. In pellentesque massa placerat duis ultricies lacus sed turpis. Nulla aliquet enim tortor at auctor urna nunc id cursus. Laoreet sit amet cursus sit amet. Lectus arcu bibendum at varius vel pharetra vel. Massa id neque aliquam vestibulum morbi blandit.

Quam pellentesque nec nam aliquam sem et tortor consequat. Enim nec dui nunc mattis. Ut placerat orci nulla pellentesque. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Viverra adipiscing at in tellus integer. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Eu nisl nunc mi ipsum. Porta lorem mollis aliquam ut porttitor leo a. Ut etiam sit amet nisl purus in. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices.

Tellus id interdum velit laoreet id. Eget arcu dictum varius duis at consectetur lorem donec. Sed cras ornare arcu dui. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. A iaculis at erat pellentesque. Duis ut diam quam nulla porttitor massa id. Arcu cursus vitae congue mauris rhoncus. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Est ante in nibh mauris cursus mattis molestie a iaculis.</p>
                </Col>
                <Col></Col>
            </Row>
           <br/>
           <br/>
        </Container>
        )
    }
}