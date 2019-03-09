// ./src/pages/FrontPage.js
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RedirectButton from './RedirectButton';

import { CSSTransitionGroup } from 'react-transition-group'

class FrontPage extends Component {
    state={
        show:true,

    };
    toTest = () =>{
        this.props.history.push("/kunnskap");
    };
    /*
this.toTest
    */
    render() {
        return(
            <CSSTransitionGroup
                transitionAppear={true}
                transitionLeave={true}
                transitionAppearTimeout={300}
                transitionEnterTimeout={0}
                transitionLeaveTimeout={300}
                transitionName="SlideIn"
                >
                {this.state.show ?
                <div key="1"  className = "center_content_parent"  style={{width:"70%",height:"60%"}} >

                    <Card  className = "center_content" style={{ width: '100%', height: '100%'}}>

                        <Container style={{maxWidth: "max-content"}}>
                            <Row>
                                <Col sm={3}>
                                    <Card  >
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>
                                            <RedirectButton name="test" destroy={()=>this.setState({show:false})} path='/kunnskap' timeout={300}>Test</RedirectButton>
                                        </Card.Body>
                                    </Card>


                                </Col>
                                <Col sm={9}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <RedirectButton name="test" destroy={()=>this.setState({show:false})} path='/kunnskap' timeout={300}>Test</RedirectButton>
                                    </Card.Body>

                                </Col>
                            </Row>
                        </Container>;



                    </Card>
                </div>
                :
                    <div></div>
                }
            </CSSTransitionGroup>

        )
    }
}
export default FrontPage;