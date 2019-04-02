// ./src/pages/FrontPage.js
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particles from 'react-particles-js'
import svg from '../images/deer.svg'

import bilde from '../images/bilde.png'; // Tell Webpack this JS file uses this image
import waxstamp from '../images/waxstamp.jpg'; // Tell Webpack this JS file uses this image
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


<img variant="top" src={bilde} className="" style={{width:"100%",height:"100%", padding:"20px"}} />
    */
    render() {
        return(
            <div>

                <CSSTransitionGroup
                    transitionAppear={true}
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionAppearTimeout={400}
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={300}
                    transitionName="fadeIn"
                    >
                    {this.state.show ?




                    <div key="1"  className = "center_content_parent"  style={{width:"70vw",height:"35vw"}} >
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
                                            <img variant="top" src={bilde} className="" style={{width:"100%",height:"100%", padding:"20px"}} />


                                            <div >

                                                <h3>Filip Tangen</h3>


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

                                                </svg>-->
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
                                            <img variant="top" src={bilde} className="" style={{width:"100%",height:"100%", padding:"20px"}} />
                                            <div >


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





                        </Card>*/
/*                            <svg height="25vw" width="50vw" style={{position:"absolute"}} viewBox="0 0 200 100" className="shadow_test_2">
                                <polygon points="0,0 200,0 200,100 0,100" style={{fill:"white"}} />
                                <polygon points="100,70 200,0 0,0" style={{fill:"white",stroke:"gray",strokeWidth:"1"}} />
                            </svg>
                            <img src={waxstamp} style={{position:"absolute", width:"60px", height:"auto", }}/>*/
/*
                                            <RedirectButton name="test" destroy={()=>this.setState({show:false})} path='/kunnskap' timeout={300}>Test</RedirectButton>*/
export default FrontPage;