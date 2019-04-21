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

            <OpenEffect className="m-1 open-effect-slide-left filiptangen" when={0} whenclose={0} alwaysDisplay>
                <canvas className="" style={{width:"200px",position:"relative", left:"0px", top:"50vh", transform:"translateY(-185px)"}} id="canvas" ></canvas>
                <div className="p-3 font-weight-light" style={{fontSize:"14px",width:"200px", height:"300px",position:"fixed",top:"50vh", transform:"translateY(-50%)"}}>
                    <p>Bachelor i Informatikk ved NTNU i Trondheim</p>
                    <p>20 år gammel</p>
                    <p><strong>+47</strong> 91334562</p>
                    <p> filiptangen1998@live.com</p>


                    <Container className="m-0 mt-3 p-0">
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



                </div>

                <div>
                    <div  className="p-3 " style={{position:"relative", top:"65vh",width:"200px"}}>
                        <Link  style={{display:"block",width:"165px", margin:"20px auto"}} activeClass="active" to="erfaring" spy={true} smooth={true} offset={0}
                               duration={1000}>
                            <div className="customButton w-100">2019</div>
                        </Link>
                        <Link  style={{display:"block",width:"165px", margin:"20px auto"}} activeClass="active" to="2018" spy={true} smooth={true} offset={0}
                               duration={1000}>
                            <div className="customButton w-100">2018</div>
                        </Link>
                        <Link  style={{display:"block",width:"165px", margin:"20px auto"}} activeClass="active" to="resten" spy={true} smooth={true} offset={0}
                               duration={1000}>
                            <div className="customButton w-100">Resten</div>
                        </Link>
                    </div>
                </div>
            </OpenEffect>


            </div>
        )
    }
}
export default filiptangen;