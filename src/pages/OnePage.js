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

import ReactPlayer from 'react-player'
import react from "../images/kunnskap/react.png";
import bootstrap from "../images/kunnskap/bootstrap.png";
import htmlcssjavascript from "../images/kunnskap/html-css-javascript.png";
import php from "../images/kunnskap/php.png";
import inmarket from "../images/inmarket.jpg";
import framework7 from "../images/kunnskap/framework7.svg";
import node from "../images/kunnskap/node.png";
import java from "../images/kunnskap/javatrans.png";
import OnePageMomentum from "./OnePageMomentum";
import antd from "../images/kunnskap/antd.svg";
import djangorest from "../images/kunnskap/djangorest.png";


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


    /*
                        <ul className="dots">
                            <li className="select" style={{transform:"50px"}}></li>
                            <li className="dot"></li>
                            <li className="dot"></li>
                            <li className="dot"></li>
                            <li className="dot"></li>
                            <li className="dot"></li>
                        </ul>*/

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
                                <OpenEffect className="open-effect-slide-up black-white" height="90%" when={50}
                                            whenclose={50}>
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

                    <Container className="p-0">
                        <Row style={{"display": "block"}}>
                            <h1>
                                Erfaring
                            </h1>
                            <br/>

                            <h2>
                                2019
                            </h2>




                        </Row>

                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <Row className="m-1" >
                            <Col md={8} className=" m-2d-block text-left black-white">
                            <h4>
                            Denne nettsiden <a href="https://getbootstrap.com/"  target="_blank">
                                <img className="scale-on-hover-big" src={react} height={"40px" }/>
                            </a> <a href="https://getbootstrap.com/"  target="_blank">
                                <img className="scale-on-hover-big" src={bootstrap} height={"40px"}/></a></h4>
                            </Col>
                        </Row>

                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <Row className="m-1" >

                            <Col lg={6} md={4} className="p-0"  style={{zIndex:"40000"}}>
                                <div className="">
                                <a href="https://www.inmarket.as" target="_blank" className="m-0">
                                    <img className=" golden-border scale-on-hover rounded" src={inmarket} width="100%" height="auto" />
                                </a>
                                </div>
                            </Col>
                            <Col lg={1} md={0} className="d-md-none d-lg-block"></Col>
                            <Col lg={5} md={7} className=" p-4 text-left black-white">
                                <h4>
                                    Inmarket  <a href="https://getbootstrap.com/" className="m-2"  target="_blank">
                                    <img className="scale-on-hover-big" src={htmlcssjavascript} width="auto" height={"40px"}/>
                                </a>
                                    <a href="https://getbootstrap.com/"  target="_blank" className="m-2">
                                        <img className="scale-on-hover-big" src={php} height={"40px"}/>
                                    </a></h4>



                                <div  className="pl-4 pt-3">
                                <p>Jeg er med i en startup bedrift som heter Inmarket. I bedriften er jobben min å utvikle nettside og app.
                                    For mer informasjon om bedriften se <a  href="https://www.inmarket.as"  target="_blank">nettsiden</a>.

                                </p>
                                <p>Appen er under utvikling. Den blir bygget med disse verktøyene
                                    <a href="https://getbootstrap.com/"  target="_blank" className="m-2">
                                        <img className="scale-on-hover-big" src={react} height={"25px" }/>
                                    </a>
                                    <a href="https://getbootstrap.com/"  target="_blank"  className="m-2">
                                        <img className="scale-on-hover-big" src={framework7} height={"25px"}/>
                                    </a>
                                    <a href="https://getbootstrap.com/"  target="_blank"  className="m-2">
                                        <img className="scale-on-hover-big" src={node} height={"25px"}/>
                                    </a></p>


                                </div>

                            </Col>


                        </Row>

                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <Row className="m-1" >

                            <Col md={8} className=" p-4 text-left black-white">


                                <h4>
                                    Student assistant i faget <a href="https://www.ntnu.no/studier/emner/TDT4100#tab=omEmnet" target="_blank">TDT4100</a>  <a href="https://getbootstrap.com/"  target="_blank">
                                    <img className="scale-on-hover-big" src={java} height={"50px"}/>
                                </a></h4>

                                <div className="pl-4 pt-3">

                                    <p>
                                        Jeg er studass i objektorientert programmering med java.
                                    </p>
                                    <p>
                                        Samtidig er jeg med på et masterprosjekt
                                        Samtidig som jeg er studass er jeg med på et masterprosjekt som tester om det hadde
                                        vært bedre å lære java med selvlæring istedenfor med obligatoriske øvinger.
                                        Jeg har en gruppe med elever som istedenfor å få øvingsopplegget får de
                                        muntlige samtaler med meg hver 2 uke for å sjekke om de kan det de skal kunne.
                                    </p>

                                </div>

                            </Col>


                        </Row>

                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <Row className="m-1" >

                            <Col md={6} className="p-0"  style={{zIndex:"40000"}}>
                                <OnePageMomentum/>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={5} className=" p-4 text-left black-white">
                                <h4>
                                    Momentum  <a href="https://getbootstrap.com/"  target="_blank" className="m-2">
                                    <img className="scale-on-hover-big" src={react} height={"40px" }/>
                                </a><a href="https://getbootstrap.com/"  target="_blank"  className="m-2">
                                    <img className="scale-on-hover-big" src={antd} height={"40px"}/>
                                </a>
                                    <a href="https://getbootstrap.com/"  target="_blank"  className="m-2">
                                        <img className="scale-on-hover-big" style={{backgroundColor:"white"}} src={djangorest} height={"40px"}/>
                                    </a></h4>



                                <div  className="pl-4 pt-3">
                                        Dette prosjektet er i forbindelse med.

                                        Frontend og backend (python django)
                                </div>

                            </Col>


                        </Row>




                        <Row>
                            <p>Med på startup Inmarket
                                Laget </p>



                        </Row>

                        <Row>

                            <p>Momentum
                                Et sted for startups og arbeidssøkere for å finne hverandre.
                                Prosjekt i forbindelse med faget TDT4140.</p>


                        </Row>
                        <Row>

                            <p></p>

                        </Row>

                    </Container>




                    <Container className="p-0">
                        <Row style={{"display": "block"}}>
                            <h2>
                                2018
                            </h2>




                        </Row>
                    </Container>


                    <div className=" full-height" style={{position: "relative"}}>
                        <h2 className=" align-left" style={{textAlign: "left"}}>2018</h2>
                        <p> The Scrummer Times
                            Et sted for startups og arbeidssøkere for å finne hverandre.
                            Prosjekt i forbindelse med faget IT1901.
                            Min gruppe "The Scrummers" fikk karakteren A på dette prosjektet
                            Lære scrum prossessen.</p>


                        <p>Grunderjakten. Jeg hadde en pitch på 1 min hvor vi vant. Spørsmålet var om hvordan
                            VR kan bli brukt for å nå fn bærekraftsmål.
                            Ideen våres var å bruke VR får å få donerere og pengegreier.
                            Se hvordan pengene som du donerere faktisk gjør en forskjell.
                            Se lykkelige barn som får lære. Skoler som blir bygget.
                            Kanskje ha en spesifikk barn som du gir penger til.</p>

                        <p>Lagde sjakk i java og FXML for grafikk</p>
                        <p>Lagde en chrome extension som fjerner youtube suggested videoer. Ikke publisert på chrome
                            shop enda.
                            Gjør slik at man blir redirected fra hovedsiden (med suggested videos) og fjerner suggested
                            videoer fra sidepanelet når man ser på videoer</p>

                        <ReactPlayer url='https://www.youtube.com/watch?v=vbnGkp7ZHNU' width={361} height={314}
                                     controls={true} volume={0} playing={false} playbackRate={2}/>
                    </div>

                    <div className="white-black full-height" style={{position: "relative"}}>
                        <h2 className="white-black align-left" style={{textAlign: "left"}}>2017</h2>


                    </div>


                    <div className="white-black full-height" style={{position: "relative"}}>
                        <h2 className="white-black align-left" style={{textAlign: "left"}}>Younger me</h2>


                        <h1>UNITY</h1>
                        <p>https://www.youtube.com/watch?v=9mtCk-Z-JGA</p>
                        <p>https://www.youtube.com/watch?v=3l9lpXn-MtI</p>
                        <p>https://www.youtube.com/watch?v=c1PZHPf5eC0</p>
                        <p>https://www.youtube.com/watch?v=3l9lpXn-MtI&feature=youtu.be</p>
                        <p>https://www.youtube.com/watch?v=2fBnItQcILA</p>

                        <h1>C++, SDL + OPENGL</h1>
                        <p>https://www.youtube.com/watch?v=O4mURyMJby4</p> (speed 2x plz)
                        <p>https://www.youtube.com/watch?v=0ntGd08KxNA</p>

                    </div>

                </div>

            </div>

        )
    }
}

export default OnePage;