// ./src/pages/Frontendjs
import React, {Component} from 'react';
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

import {CSSTransitionGroup} from 'react-transition-group'
import Layout from "./Layout";

import linkedinImage from "../images/linkedin.png"
import deviantImage from "../images/deviant.png"

class FrontPage extends Component {
    state = {
        show: true,

    };
    toTest = () => {
        this.props.history.push("/kunnskap");
    };
    /*
this.toTest<div style={{width:"300px",height:"200px"}}></div>
className="shadow_test" style={{margin:"20px", width:'100%', height:'70%', minHeight:"70%"}}


<img variant="top" src={bilde} className="" style={{width:"100%",height:"100%", padding:"20px"}} />
    */


    /*BILDE
    *   <img variant="top" src={bilde} className="" style={{width:"100%",height:"100%", padding:"20px"}} />

    *
    * */


    /*                                                            <p></p>
                                                        Selvlært programmerer med muligheten for å lære nye ting veldig kjapt. Stor interesse innenfor innovasjon og det å skape produkter. Er fremoverrettet og elsker å jobbe med nyskaping.
                                                        //Nevn fullstack, nevn frontend, nevn spill, nevn entreprenørskap nevn trening, nevn
                                                            Liker å være kreativ og ønsker en dag å opprette mitt eget selskap
                                                        <p>Bilde med ting som trening, friluft, programmering, </p>

                                                            <p>GLAD I Å HJELPE. GOD I TEAMS.
                                                            Jeg elsker å møte nye folk. Alle er mine venner</p>*/
    render() {
        return (
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


                        <div key="1" className="center_content_parent" style={{width: "70vw", height: "35vw"}}>
                            <div className="center_content" style={{width: '100%', height: '100%'}}>
                                <Row style={{height: '100%'}}>
                                    <Col sm={4} style={{height: "100%"}}>
                                        <Card className="shadow-sm card-border lightshade-bg darkshade-text"  style={{height:"60vh"}}>

                                            <Container style={{maxWidth: "max-content", height: '100%'}}>
                                                <Card.Body>

                                                    <Card.Title>
                                                        <img style={{width:"200px",height:"200px"}}/>
                                                        <h2>Filip Tangen</h2></Card.Title>
                                                    <Card.Text style={{textAlign:"left"}}>
                                                        <br/>


                                                        <p><strong>Bosted:</strong> Trondheim og Bergen</p>
                                                        <p><strong>Studie:</strong> Andre klasse i bachelor i Informatikk på NTNU</p>
                                                        <p><strong>Alder:</strong> 20 år</p>



                                                        <p><h5>Kontakt meg</h5></p>
                                                        <p><strong>Email:</strong> filiptangen1998@live.com</p>
                                                        <p><strong>Telefon:</strong> 91334562</p>

                                                        <a href="https://www.linkedin.com/in/filip-tangen-61614015b/" target="_blank"><img src={linkedinImage} style={{width:"40px", height:"40px",position:"relative",top:"-10px", left:"-7px"}}/></a>
                                                        <a href="https://www.deviantart.com/vermacian55/gallery/" target="_blank"><img src={deviantImage} style={{width:"25px", height:"25px",position:"relative",top:"-10px", left:"-7px"}}/></a>



                                                    </Card.Text>
                                                </Card.Body>
                                            </Container>



                                        </Card>


                                    </Col>
                                    <Col sm={0.5}>




                                    </Col>

                                    <Col sm={7}>

                                        <Card className=" shadow-sm card-border lightshade-bg darkshade-text"   style={{height:"60vh"}}>

                                            <Container style={{maxWidth: "max-content", height: '100%'}}>
                                                <Card.Body>
                                                    <br/>

                                                    <Card.Title>Om meg</Card.Title>
                                                    <Card.Text className="d-flex justify-content-center" >
                                                        <div  style={{width:"80%"}}>
                                                            <br/>
                                                            <p>Jeg en full stack developer</p>
                                                            <p>Jeg lærer fort</p>
                                                            <p>Jeg er god til å samarbeide</p>
                                                            <p>Jeg elsker å møte nye folk</p>
                                                            <p>Jeg elsker å presentere</p>
                                                            <p>Jeg er en hjelpende hånd</p>
                                                            <p>Jeg elsker å kunne bruke kreativiten til å designe</p>
                                                            <p>Jeg synes innovasjon er det gøyeste som finnes og har stor interesse innenfor grundermiljøet</p>
                                                            <p>Jeg er glad i å trene</p>
                                                            <br/>




                                                        <button onClick={()=>{this.setState({show: false});setTimeout(()=>{this.props.history.push("/kunnskap")},400)}}> Se hva jeg kan </button>
                                                        </div>
                                                        </Card.Text>
                                                </Card.Body>
                                            </Container>


                                        </Card>


                                    </Col>


                                </Row>

                            </div>


                        </div>
                        :
                        <div></div>
                    }
                </CSSTransitionGroup>
                <Layout timeout={400} destroy={() => this.setState({show: false})}/>
            </div>

        )
    }
}


/*


                                                <svg viewBox="0 0 250 50">
                                                    <symbol id="s-text">
                                                        <text textAnchor="middle"
                                                              x2="20%"
                                                              y2="70%"
                                                              className="text--line"
                                                        >
                                                            Filip
                                                        </text>
                                                        <text textAnchor="middle"
                                                              x2="70%"
                                                              y2="70%"
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
                                                              x2="20%"
                                                              y2="70%"
                                                              className="text--line"
                                                        >
                                                            Filip
                                                        </text>
                                                        <text textAnchor="middle"
                                                              x2="70%"
                                                              y2="70%"
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