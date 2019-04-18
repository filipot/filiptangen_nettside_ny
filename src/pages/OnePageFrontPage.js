
import React, {Component} from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextSpasm from '../TextSpasm.js'
import HoverTextEffect from '../components/HoverTextEffect'
import ImageEffects from '../components/ImageEffects'

import image1 from '../images/bilder/darktable_exported/IMG_20190413_142655_edit_scale.jpg'
import image2 from '../images/bilder/darktable_exported/IMG_20190413_142650_01_edit_scale.jpg'
import linkedinImage from "../images/linkedin.png";
import deviantImage from "../images/deviant.png";
import githubImage from "../images/github.png";

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class OnePageFrontPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            image_src: {image1}
        };
    }

    componentDidMount() {
        this.setState({image_src:image1});
    }


    renderPictureOfMe(){
        if(this.state.show_funny_pic){
            return(<img src={image2} width={"100%"} alt="me"/>);
        }
        else{
            return (<img src={image1} width={"100%"} alt="me"/>);
        }
    }

    /*<h2  className="dropdown-shadow" style={{"width":"auto"}}>Jeg er en fullstack-utvikler</h2>*/

/*
                                    <Row className="justify-content-md-center-always">
                                        <Col xs={1} md={1} sm={1} >
                                            <a href="https://www.deviantart.com/vermacian55/gallery/" target="_blank"><img src={deviantImage} style={{width:"28px", height:"28px"}}/></a>

                                        </Col>
                                        <Col xs={1} md={1} sm={1}>
                                            <a href="https://www.linkedin.com/in/filip-tangen-61614015b/" target="_blank"><img src={linkedinImage} style={{width:"28px", height:"28px"}}/></a>

                                        </Col>
                                        <Col xs={1} md={1} sm={1}>
                                            <a href="https://github.com/filipot" target="_blank"><img src={githubImage} style={{width:"28px", height:"28px"}}/></a>

                                        </Col>


                                    </Row>3*/
    //TODO remove full-height when on mobile (media)
    //TODO make transition between the two pictures http://jsfiddle.net/bDHss/

    render() {
        return (

                    <Container className="centerHorizontal">
                    <Row className="front-page-full-height" style={{overflow:"hidden"}}>
                        <Col className="m-0 p-0" md={1} sm={false}></Col>
                        <Col sm md={3} className="m-0 p-0">
                            <div className="centerVertical image-effect" onMouseEnter={()=>{this.setState({image_src:image2})}}
                                 onMouseLeave={()=>{this.setState({image_src:image1})}}>
                                <img src={this.state.image_src} width={"100%"} alt="me"/>
                            </div>
                        </Col>
                        <Col sm md={7} className="m-0 p-0 " >
                            <div className="centerVertical front-page-text ">
                                <div className="centerVertical front-page-text-inner">
                                    <Row className="justify-content-md-center-always">
                             <h1 className="dropdown-shadow" style={{"width":"auto", color:"#e6a340"}}>Filip Tangen</h1></Row>
                                <br className="d-sm-none d-md-none d-lg-block d-none"/>
                                <br className="d-sm-none d-md-none d-lg-block d-none"/>
                                    <Row className="d-sm-none d-md-none d-lg-block d-none justify-content-md-center-always">
                                        <HoverTextEffect/></Row>

                                    <br className="d-sm-none d-md-none d-lg-block d-none"/>
                                    <br className="d-sm-none d-md-none d-lg-block d-none"/>




                                    <Row  className="d-sm-none d-md-none d-lg-block d-none justify-content-md-center-always">


                                        <Link activeClass="active" to="erfaring" spy={true} smooth={true} offset={-0} duration={500}>
                                            <button>Hvorfor meg?</button>
                                        </Link>
                                    </Row>


                                    <div className="d-sm-block d-md-block d-lg-none d-block text-left p-3 " >
                                        <p>Bachelor i Informatikk ved NTNU i Trondheim</p>
                                        <p><strong>Alder: </strong>20</p>
                                        <p><strong>Tlf: </strong>91334562</p>
                                        <p className="pb-0 mb-2"> filiptangen1998@live.com</p>


                                        <Row className="">
                                            <Col xs={1} md={1} sm={1} className="m-1 scale-on-hover-big">
                                                <a href="https://www.deviantart.com/vermacian55/gallery/" target="_blank"><img src={deviantImage} style={{width:"20px", height:"20px"}}/></a>

                                            </Col>

                                            <Col xs={1} md={1} sm={1} className="m-1 scale-on-hover-big">
                                                <a href="https://www.linkedin.com/in/filip-tangen-61614015b/" target="_blank"><img src={linkedinImage} style={{width:"20px", height:"20px"}}/></a>

                                            </Col>

                                            <Col xs={1} md={1} sm={1} className="m-1 scale-on-hover-big">
                                                <a href="https://github.com/filipot" target="_blank"><img src={githubImage} style={{width:"20px", height:"20px"}}/></a>

                                            </Col>


                                        </Row>
                                    </div>


                                </div>



                                </div>
                        </Col>




                    </Row>
                    </Container>

        )
    }
}

export default OnePageFrontPage;