// ./src/pages/FrontPage.js
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import bilde from '../images/bilde.jpg'; // Tell Webpack this JS file uses this image

import '../styles/ElasticStrokeAnimation.css'
import '../styles/fadeInSlideOut.css'

import RedirectButton from './RedirectButton';

import { CSSTransitionGroup } from 'react-transition-group'
import Layout from "./Layout";

class FrontPage extends Component {
    state={
        show:true,

    };
    toTest = () =>{
        this.props.history.push("/kunnskap");
    };
    /*
this.toTest<div style={{width:"300px",height:"200px"}}></div>
    */
    render() {
        return(
            <div>
            <Layout timeout ={600} destroy={()=>this.setState({show:false})}/>
                <CSSTransitionGroup
                    transitionAppear={true}
                    transitionLeave={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={0}
                    transitionLeaveTimeout={300}
                    transitionName="fadeIn"
                    >
                    {this.state.show ?
                    <div key="1"  className = "center_content_parent"  style={{width:"80%",height:"70%"}} >

                        <Card  className = "center_content shadow" style={{ width: '100%', height: '100%'}}>

                            <Container style={{maxWidth: "max-content", height:'100%'}} >
                                <Row style={{height:'100%'}}>
                                    <Col sm={4}>
                                        <Card className="shadow_test" style={{margin:"20px", width:'100%', height:'70%', minHeight:"70%"}}>
                                            <div >
                                            <Card.Img variant="top" src={bilde} />
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>

                                                    <svg viewBox="0 0 300 200">
                                                        <symbol id="s-text">
                                                            <text textAnchor="middle"
                                                                  x="20%"
                                                                  y="25%"
                                                                  className="text--line"
                                                            >
                                                                Filip
                                                            </text>
                                                            <text textAnchor="middle"
                                                                  x="60%"
                                                                  y="25%"
                                                                  className="text--line2"
                                                            >
                                                                Tangen
                                                            </text>

                                                        </symbol>

                                                        <g className="g-ants">
                                                            <use xlinkHref="#s-text"
                                                                 className="text-copy"></use>
                                                            <use xlinkHref="#s-text"
                                                                 className="text-copy"></use>
                                                            <use xlinkHref="#s-text"
                                                                 className="text-copy"></use>
                                                            <use xlinkHref="#s-text"
                                                                 className="text-copy"></use>
                                                            <use xlinkHref="#s-text"
                                                                 className="text-copy"></use>
                                                        </g>

                                                    </svg>

                                            </Card.Body>
                                            </div>
                                        </Card>





                                    </Col>
                                    <Col sm={8}>
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
                            </Container>





                        </Card>
                    </div>
                    :
                        <div></div>
                    }
                </CSSTransitionGroup>

            </div>

        )
    }
}
export default FrontPage;