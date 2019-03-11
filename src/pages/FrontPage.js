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
className="shadow_test" style={{margin:"20px", width:'100%', height:'70%', minHeight:"70%"}}
    */
    render() {
        return(
            <div>

                <CSSTransitionGroup
                    transitionAppear={true}
                    transitionLeave={true}
                    transitionAppearTimeout={400}
                    transitionEnterTimeout={0}
                    transitionLeaveTimeout={300}
                    transitionName="fadeIn"
                    >
                    {this.state.show ?
                    <div key="1"  className = "center_content_parent"  style={{width:"44em",height:"30em"}} >

                        <Card  className = "center_content shadow" style={{ width: '100%', height: '100%'}}>

                            <Container style={{maxWidth: "max-content", height:'100%'}} >
                                <Row style={{height:'100%'}}>


                                    <Col sm={7}>
                                        <Card.Body>
                                            <Card.Title>Hello!</Card.Title>
                                            <Card.Text>
                                                Jeg ønsker meg en jobb
                                            </Card.Text>
                                        </Card.Body>

                                    </Col>
                                    <Col sm={1}>

                                        <div className="vertical-center"style={{  borderLeft: "1px solid gray",
                                            height: "95%"}}></div>


                                    </Col>
                                    <Col sm={4} style={{height:"100%"}}>
                                        <div>
                                            <div >
                                                <img variant="top" src={bilde} className="" style={{width:"100%",height:"100%", padding:"20px"}} />

                                                <svg viewBox="0 0 250 50">
                                                    <symbol id="s-text">
                                                        <text textAnchor="middle"
                                                              x="20%"
                                                              y="70%"
                                                              className="text--line"
                                                        >
                                                            Filip
                                                        </text>
                                                        <text textAnchor="middle"
                                                              x="70%"
                                                              y="70%"
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
                                                <p>Linkedin</p>

                                            </div>
                                        </div>




                                    </Col>
                                </Row>
                            </Container>





                        </Card>
                    </div>
                    :
                        <div></div>
                    }
                </CSSTransitionGroup>
                <Layout timeout ={400} destroy={()=>this.setState({show:false})}/>
            </div>

        )
    }
}

/*
                                            <RedirectButton name="test" destroy={()=>this.setState({show:false})} path='/kunnskap' timeout={300}>Test</RedirectButton>*/
export default FrontPage;