import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import OpenEffect from '../components/openeffect'



import bootstrap from "../images/kunnskap/bootstrap.png"
import csharp from "../images/kunnskap/csharp.png"
import cplusplus from "../images/kunnskap/c++.png"
import django from "../images/kunnskap/django.png"
import djangorest from "../images/kunnskap/djangorest.png"
import java from "../images/kunnskap/java.jpg"
import python from "../images/kunnskap/python.png"
import materialize from "../images/kunnskap/materialize.png"
import antd from "../images/kunnskap/antd.svg"
import node from "../images/kunnskap/node.png"
import react from "../images/kunnskap/react.png"
import htmlcssjavascript from "../images/kunnskap/html-css-javascript.png"
import php from "../images/kunnskap/php.png"
import framework7 from "../images/kunnskap/framework7.svg"
import unity from "../images/kunnskap/unity.png"
import blender from "../images/kunnskap/Blender.png"
import linux from "../images/kunnskap/linux.png"
import OpenGL from "../images/kunnskap/openGL.png"

import webcollection from "../images/kunnskap/web-collection.png"


class OnePageKunnskap extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

//TODO WRite the right links
    //TODO Ha en wavey background som roterer når man scroller ned på siden :)))


    /*<svg width="400" height="200" className="" style={{position:"relative", top:"250px"}}>
                                <path d={"M0,100a200,100 0 1,0 400,0a200,100 0 1,0 -400,0"}
                                      fill="#fff" stroke="#fff" strokeWidth="1"
                                />
                            </svg>*/
    render() {
        let h1 = 60;
        let h2 = 50;
        return (

            <Container className="centerHorizontal ">
                <Row className="half-height m-0 p-0">
                    <Col md={4}></Col>
                    <Col md={8} style={{position:"relative", top:"-20%"}}>
                        <div className="  half-height">


                            <OpenEffect className=" "
                                        when={window.innerHeight * (0.33 + 0.3)} whenclose={window.innerHeight * (0.2)}>
                            <h2>Min kunnskap</h2>
                                <br/>
                            </OpenEffect>
                            <OpenEffect className="golden-border scale-on-hover open-effect-kunnskap white-black rounded scrollable" height="350px"
                                        when={window.innerHeight * (0.33 + 0.4)} whenclose={window.innerHeight * (0.2)}>

                                <Container>

                                    <Row className="justify-content-md-center pb-4 pt-4">
                                        <Col md={2}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={cplusplus} height={h1}/>
                                            </a>
                                        </Col>
                                        <Col md={2}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={csharp} height={h1 }/>
                                            </a>
                                        </Col>
                                        <Col md={2}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={java} height={h1 + 10}/>
                                            </a>
                                        </Col>
                                        <Col md={3}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={python} height={h1}/>
                                            </a>
                                        </Col>


                                    </Row>
                                    <Row className="justify-content-md-center pb-4" >
                                        <Col md={3}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={htmlcssjavascript} width="auto" height={h2}/>
                                            </a>
                                        </Col>
                                        <Col md={1}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={react} height={h2 }/>
                                            </a>
                                        </Col>
                                        <Col md={2}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={php} height={h2}/>
                                            </a>
                                        </Col>
                                        <Col md={2}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={django} height={h2}/>
                                            </a>
                                        </Col>
                                        <Col md={2}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={djangorest} height={h2}/>
                                            </a>
                                        </Col>
                                        <Col md={2}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={node} height={h2}/>
                                            </a>
                                        </Col>

                                    </Row>
                                    <Row className="justify-content-md-center pb-4">
                                        <Col md={2}>
                          <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={bootstrap} height={h2}/>
                                            </a>
                                        </Col>
                                        <Col md={2}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={materialize} height={h2}/>
                                            </a>
                                        </Col>
                                        <Col md={2}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={antd} height={h2}/>
                                            </a>
                                        </Col>
                                        <Col md={2}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <div className="scale-on-hover-big " style={{height:h2, backgroundColor:"green", color:"white"}}>
                                                    <p className="vertical-center"><strong>W3.css</strong> </p></div>
                                            </a>
                                        </Col>
                                        <Col md={2}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={framework7} height={h2}/>
                                            </a>
                                        </Col>


                                    </Row>

                                    <Row className="justify-content-md-center ">
                                        <Col md={3}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={unity} height={h2}/>
                                            </a>
                                        </Col>
                                        <Col md={3}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={blender} height={h2}/>
                                            </a>
                                        </Col>
                                        <Col md={3}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={linux} height={h2}/>
                                            </a>
                                        </Col>
                                        <Col md={3}>
                                            <a href="https://getbootstrap.com/"  target="_blank">
                                                <img className="scale-on-hover-big" src={OpenGL} height={h2}/>
                                            </a>
                                        </Col>

                                    </Row>
                                </Container>

                            </OpenEffect>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default OnePageKunnskap;