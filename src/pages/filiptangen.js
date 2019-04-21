import React, { Component } from 'react';
import TextSpasm from '../TextSpasm.js'
import * as ParticleText from "../ParticleText";
import OpenEffect from '../components/openeffect'
import {Col, Row,Container } from 'react-bootstrap';
import deviantImage from "../images/deviant.png";
import linkedinImage from "../images/linkedin.png";
import githubImage from "../images/github.png";
import {Link} from "react-scroll/modules";


/* <Col xs={1} md={1} sm={1} className="m-1 scale-on-hover-big">
                            <a href="https://www.deviantart.com/vermacian55/gallery/" target="_blank"><img src={deviantImage} style={{width:"20px", height:"20px"}}/></a>

                        </Col>*/
class filiptangen extends Component {


    componentDidMount() {

        setTimeout(function(){ ParticleText.renderText()}, 200);
    }


    /*
    * <p><strong>Studie:</strong> Bachelor i Informatikk på NTNU</p>
                    <p><strong>Alder:</strong> 20 år</p>
                    <p><strong>Telefon:</strong>91334562</p>
                    <p><strong>Epost:</strong>filiptangen1998@live.com</p>

                    <canvas className="" style={{width:"200px",position:"relative", left:"45px"}} id="canvas" ></canvas>
    * */
    render() {
        return(
            <div>

            <OpenEffect className="open-effect-slide-left filiptangen" when={0} whenclose={0} alwaysDisplay>
                <canvas className="" style={{width:"200px",position:"relative", left:"-10px", top:"50vh", transform:"translateY(-220px)"}} id="canvas" ></canvas>
                <div className="text-left p-3 font-weight-light" style={{fontSize:"14px",width:"175px",position:"fixed",top:"50vh", transform:"translateY(-50%)"}}>
                    <p>Bachelor i Informatikk ved NTNU i Trondheim</p>
                    <p><strong>Alder: </strong>20</p>
                    <p><strong>Tlf: </strong>91334562</p>
                    <p className="pb-0 mb-2"> filiptangen1998@live.com</p>


                    <Container className="m-0 p-0">
                        <Row className="justify-content-center m-0 p-0">


                            <Col xs={1} md={1} sm={1} className="m-0 p-0 scale-on-hover-big">
                                <a href="https://www.linkedin.com/in/filip-tangen-61614015b/" target="_blank"><img src={linkedinImage} style={{width:"20px", height:"20px"}}/></a>

                            </Col>
                            <Col md={1} className="m-0 p-0"/>

                            <Col xs={1} md={1} sm={1} className="m-0 p-0 scale-on-hover-big">
                                <a href="https://github.com/filipot" target="_blank"><img src={githubImage} style={{width:"20px", height:"20px"}}/></a>

                            </Col>


                        </Row>
                    </Container>
                    <br/>
                    <div  className="m-2">
                    <Link  style={{display:"block",width:"48px", margin:"15px auto"}} activeClass="active" to="erfaring" spy={true} smooth={true} offset={0}
                          duration={1000}>
                        <button>2019</button>
                    </Link>
                    <Link  style={{display:"block",width:"48px", margin:"15px auto"}} activeClass="active" to="2018" spy={true} smooth={true} offset={0}
                          duration={1000}>
                        <button>2018</button>
                    </Link>
                    <Link  style={{display:"block",width:"61px", margin:"15px auto"}} activeClass="active" to="resten" spy={true} smooth={true} offset={0}
                          duration={1000}>
                        <button>Resten</button>
                    </Link>
                    </div>


                </div>
            </OpenEffect>


            </div>
        )
    }
}
export default filiptangen;