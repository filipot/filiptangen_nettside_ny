import React, {Component} from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import OnePageFrontPage from './OnePageFrontPage'
import OpenEffect from '../components/openeffect'

import FilipTangen from './filiptangen'
import Kunnskap from './OnePageKunnskap'

import TextSpasm from '../TextSpasm.js'
import HoverTextEffect from '../components/HoverTextEffect'
import ImageEffects from '../components/ImageEffects'
import linkedinImage from "../images/linkedin.png";
import deviantImage from "../images/deviant.png";

class OnePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_scroll_down_mouse: true,
            display_name: false,
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onWheel);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onWheel);
    }

    onWheel = (event) => {
        let wh = window.innerHeight;
        let front = wh * 0;
        let first = wh * 1;
        let second = wh * 1 * 1.33;


        let show_scroll_down_mouse = this.state.show_scroll_down_mouse;
        let display_name = this.state.display_name;

        console.log(window.scrollY); // Value of scroll Y in px
        if (window.scrollY > front + 150 && show_scroll_down_mouse) {
            show_scroll_down_mouse = false;
        } else if (window.scrollY < front + 150 && !show_scroll_down_mouse) {
            show_scroll_down_mouse = true;
        }

        if (window.scrollY < first / 2 && display_name) {
            display_name = false;
        } else if (window.scrollY > first / 2 && !display_name) {
            display_name = true;
        }


        this.setState({show_scroll_down_mouse: show_scroll_down_mouse, display_name: display_name})
    };


    scrollDownMouse() {
        let h = 1;
        let v = 15;
        let h2 = 10;
        let v2 = 10;
        if (this.state.show_scroll_down_mouse) {
            return (<div className="chevron bottom shadow " style={{opacity: "1"}}>
                <div className="chevron bottom shadow ">
                    <svg width="60" height="60" className=""
                         style={{position: "relative", bottom: "50px", right: "11px"}}>
                        <path d={"M20.5,5 h" + h + " a" + h2 + "," + h2 + " 0 0 1 " + h2 + ", " + h2 +
                        " v" + v + " a" + v2 + "," + v2 + " 0 0 1 " + -v2 + ", " + v2 +
                        "h" + -h + " a" + h2 + "," + h2 + " 0 0 1 " + -h2 + ", " + -h2 +
                        " v" + -v + " a" + v2 + "," + v2 + " 0 0 1 " + v2 + ", " + -v2 +
                        "M21,10 v7 z"}
                              fill="none" stroke="#FFF" strokeWidth="0.7"
                        />
                    </svg>
                </div>
            </div>);
        }
        return (<div></div>);
    }

    /*
                            <p><h5>Kontakt meg</h5></p>
                            <p><strong>Email:</strong> filiptangen1998@live.com</p>
                            <p><strong>Telefon:</strong> 91334562</p>



                            <a href="https://www.linkedin.com/in/filip-tangen-61614015b/" target="_blank"><img src={linkedinImage} style={{width:"40px", height:"40px",position:"relative",top:"-10px", left:"-7px"}}/></a>
                            <a href="https://www.deviantart.com/vermacian55/gallery/" target="_blank"><img src={deviantImage} style={{width:"25px", height:"25px",position:"relative",top:"-10px", left:"-7px"}}/></a>
*/


    /*                    <Container className="centerHorizontal ">
                        <Row className="third-height ">
                            <Col md={7}></Col>
                            <Col md={5}>
                                <OpenEffect className="open-effect-right white-black " height="90%"
                                            when={window.innerHeight * (0.33 + 2) }>
                                    <Container>
                                        <Row>
                                            <div className="m-1 p-4">

                                                <h4>Hvem er jeg?</h4>
                                            </div>
                                        </Row>
                                        <Row>
                                            <p className="padding-left-33" style={{width: "auto"}}> Jeg er en student i
                                                2 klasse på NTNU </p>
                                        </Row>
                                    </Container>

                                </OpenEffect>
                            </Col>
                        </Row>
                    </Container>*/

    render() {
        return (
            <div style={{overflowX: "hidden", width: "100vw"}}>


                <div>
                    <div>
                        <TextSpasm amount={1} speed={2} style={{width: "97%"}}/>
                    </div>


                    {this.scrollDownMouse()}

                    {this.state.display_name ? <FilipTangen/> : <div></div>}
                    <OnePageFrontPage/>

                    <Container className="centerHorizontal ">

                        <Row className="third-height m-0 p-0">

                            <Col md={4}>
                                <OpenEffect className="open-effect-slide-up black-white" height="90%" when={50} whenclose={50}>
                                    <Container>
                                        <Row>
                                            <div className="m-4">

                                                <h4>Om meg</h4>
                                            </div>
                                        </Row>
                                        <Row className="pl-5 text-left d-block">

                                            <p><strong>Bosted:</strong> Trondheim og Bergen</p>
                                            <p><strong>Studie:</strong> Bachelor i Informatikk på NTNU</p>
                                            <p><strong>Alder:</strong> 20 år</p>


                                            <br/>


                                        </Row>
                                    </Container>

                                </OpenEffect>
                            </Col>


                        </Row>
                    </Container>

                    <Kunnskap/>
                    <div className="full-height" style={{position: "relative"}}>

                        <Container>
                            <Row style={{"display":"block"}}>
                                <h1>
                                    Erfaring
                                </h1>
                                <br/>

                                <h2>
                                    2019
                                </h2>

                            </Row>

                            <Row>

                            </Row>

                        </Container>

                    </div>
                    <div className="white-black full-height" style={{position: "relative"}}>
                        <h2 className="white-black align-left" style={{textAlign: "left"}}>2019 - 2</h2>
                        test

                        test
                    </div>

                </div>

            </div>

        )
    }
}

export default OnePage;