import React, { Component } from 'react';
import TextSpasm from '../TextSpasm.js'
import * as ParticleText from "../ParticleText";
import OpenEffect from '../components/openeffect'
import {Col, Row} from 'react-bootstrap';
import deviantImage from "../images/deviant.png";
import linkedinImage from "../images/linkedin.png";
import githubImage from "../images/github.png";
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

            <OpenEffect className="open-effect-slide-down filiptangen" when={0} whenclose={0} alwaysDisplay>
                <canvas className="" style={{width:"200px",position:"relative", left:"-10px", top:"50vh", transform:"translateY(-150px)"}} id="canvas" ></canvas>
                <div className="text-left p-3 font-weight-light" style={{fontSize:"14px",width:"175px",position:"fixed",top:"50vh", transform:"translateY(-50%)"}}>
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
            </OpenEffect>


            </div>
        )
    }
}
export default filiptangen;