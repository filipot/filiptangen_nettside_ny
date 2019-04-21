import React, {Component} from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import OnePageFrontPage from './OnePageFrontPage'
import OnePageLowpoly from './OnePageLowpoly'
import OnePageSDL from './OnePageSDL'
import OnePageUnity from './OnePageUnity'
import OpenEffect from '../components/openeffect'

import FilipTangen from './filiptangen'
import Kunnskap from './OnePageKunnskap'

import TextSpasm from '../TextSpasm.js'
import HoverTextEffect from '../components/HoverTextEffect'
import ImageEffects from '../components/ImageEffects'
import linkedinImage from "../images/linkedin.png";
import deviantImage from "../images/deviant.png";

import ScrollAnimation from 'react-animate-on-scroll';
import ReactPlayer from 'react-player'
import react from "../images/kunnskap/react.png";
import bootstrap from "../images/kunnskap/bootstrap.png";
import htmlcssjavascript from "../images/kunnskap/html-css-javascript.png";
import php from "../images/kunnskap/php.png";
import inmarket from "../images/inmarket.jpg";
import bryggeforum from "../images/bryggeforum.jpg";
import framework7 from "../images/kunnskap/framework7.png";
import node from "../images/kunnskap/node.png";
import java from "../images/kunnskap/javatrans.png";
import OnePageMomentum from "./OnePageMomentum";
import antd from "../images/kunnskap/antd.png";
import djangorest from "../images/kunnskap/djangorest.png";
import django from "../images/kunnskap/django.png";
import unity from "../images/kunnskap/unityw.png";
import csharp from "../images/kunnskap/csharp.png";
import questline from "../images/questline.png";
import githubImage from "../images/github.png";
import chrome from "../images/kunnskap/chrome.png";

import * as Scroll from 'react-scroll';
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller} from 'react-scroll'
import linux from "../images/kunnskap/linux.png";
import python from "../images/kunnskap/python.png";
import blender from "../images/kunnskap/Blender.png";
import cplusplus from "../images/kunnskap/c++.png";
import OpenGL from "../images/kunnskap/openGL.png";


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
        let second = first + 550;


        let show_scroll_down_mouse = this.state.show_scroll_down_mouse;
        let display_name = this.state.display_name;

        console.log(window.scrollY); // Value of scroll Y in px
        if (window.scrollY > front + 150 && show_scroll_down_mouse) {
            show_scroll_down_mouse = false;
        } else if (window.scrollY < front + 150 && !show_scroll_down_mouse) {
            show_scroll_down_mouse = true;
        }

        if (window.scrollY < 4 && display_name) {
            display_name = false;
        } else if (window.scrollY > 4 && !display_name) {
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
            return (

                <div>
                    <Link activeClass="active" to="erfaring" spy={true} smooth={true} offset={0} duration={500} style={{
                        zIndex: "10000",
                        width: "100px",
                        height: "100px",
                        position: "absolute",
                        top: "90%",
                        left: "46%"
                    }}/>
                    <div className="chevron bottom shadow " style={{opacity: "1"}}>
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


    /* <Container className="centerHorizontal ">

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
                                            <p><strong>Studie:</strong> Bachelor i Informatikk på NTNU</p>
                                            <p><strong>Alder:</strong> 20 år</p>
                                            <p><strong>Telefon:</strong>91334562</p>
                                            <p><strong>Epost:</strong>filiptangen1998@live.com</p>


                                            <br/>


                                        </Row>
                                    </Container>

                                </OpenEffect>
                            </Col>


                        </Row>
                    </Container>
                     <ul>

                            <li className="m-1 mb-3">Bachelor i Informatikk ved NTNU i Trondheim
                            </li>
                            <li className="m-1 mb-3">20 år gammel
                            </li>
                            <li className="m-1 mb-3">91334562
                            </li>
                            <li className="m-1 mb-3">filiptangen1998@live.com
                            </li>

                        </ul>



                    <Kunnskap/>*/


    /*
                                    <p>Samtidig som jeg var studass var jeg med på en masteroppgave.
                                        Istedenfor det vanlige øvingsopplegget så møtte jeg studentene i masteroppgaven
                                        hver andre uke og hadde en diskusjon med de, hvor de skulle overbevise meg at de kunne pensum.
                                    </p>
*/

    render() {
        return (
            <div style={{overflowX: "hidden", width: "100vw"}}>

                {this.state.display_name ? <FilipTangen/> : <div></div>}
                <div className="container-padding-md">
                    <div className="d-md-block d-lg-block d-sm-block d-none">
                        <TextSpasm amount={1} speed={2} style={{width: "97%"}}/>
                    </div>


                    {this.scrollDownMouse()}


                    <OnePageFrontPage/>


                    <Container id="erfaring" className="p-0">
                        <Row className="mt-5 mb-5 pl-5 pb-5 d-block">

                            <Col>
                                <Link activeClass="active" to="erfaring" spy={true} smooth={true} offset={0}
                                      duration={500}>
                                    <h1>

                                        Min erfaring
                                    </h1>
                                    <br/>

                                    <h2>
                                        2019
                                    </h2>
                                </Link>
                            </Col>


                        </Row>


                        <Row className="mt-5 mb-5 pl-5 pb-5">
                            <Col md={8} className=" m-2d-block text-left black-white">
                                <h4>
                                    www.filiptangen.com <a href="https://reactjs.org/" target="_blank">
                                    <img className="scale-on-hover-big" src={react} height={"40px"}/>
                                </a> <a href="https://getbootstrap.com/" target="_blank">
                                    <img className="scale-on-hover-big" src={bootstrap} height={"40px"}/></a></h4>
                            </Col>
                        </Row>

                        <Row className="mt-5 mb-5 pl-5 pb-5">

                            <Col lg={7} md={4} className="p-0" style={{zIndex: "40000"}}>
                                <ScrollAnimation animateIn="image-animation" duration={0.5}>

                                    <a href="https://www.inmarket.as" target="_blank" className="m-0 image-animation">
                                        <ScrollAnimation animateIn="image-animation-cover" duration={0.5}>
                                            <img className=" golden-border scale-on-hover rounded" src={inmarket}
                                                 width="100%" height="auto"/>
                                        </ScrollAnimation>


                                    </a>
                                </ScrollAnimation>
                            </Col>
                            <Col lg={5} md={7} className="pl-5  p-4 text-left black-white">
                                <h4>
                                    Inmarket <a href="https://html-css-js.com/" className="m-2" target="_blank">
                                    <img className="scale-on-hover-big" src={htmlcssjavascript} width="auto"
                                         height={"40px"}/>
                                </a>
                                    <a href="https://www.php.net/" target="_blank" className="m-2">
                                        <img className="scale-on-hover-big" src={php} height={"40px"}/>
                                    </a></h4>


                                <div className="pl-4 pt-3">
                                    <p><u>Jeg er med i en startup bedrift</u> som heter Inmarket. I bedriften er jobben min å
                                        utvikle nettside og app.
                                        For mer informasjon om bedriften se <a href="https://www.inmarket.as"
                                                                               target="_blank">nettsiden</a>.

                                    </p>
                                    <p>Appen er under utvikling. Den blir bygget med disse verktøyene
                                        <a href="https://reactjs.org/" target="_blank" className="m-2">
                                            <img className="scale-on-hover-big" src={react} height={"25px"}/>
                                        </a>
                                        <a href="https://framework7.io/" target="_blank" className="m-2">
                                            <img className="scale-on-hover-big" src={framework7} height={"25px"}/>
                                        </a>
                                        <a href="https://nodejs.org/en/" target="_blank" className="m-2">
                                            <img className="scale-on-hover-big" src={node} height={"25px"}/>
                                        </a></p>


                                </div>

                            </Col>


                        </Row>


                        <Row className="mt-5 mb-5 pl-5 pb-5">

                            <Col md={8} className=" p-4 text-left black-white">


                                <h4>
                                    Student assistant i faget <a
                                    href="https://www.ntnu.no/studier/emner/TDT4100#tab=omEmnet"
                                    target="_blank">TDT4100</a> <a href="https://www.java.com/en/download/faq/whatis_java.xml" target="_blank" className="m-2">
                                    <img className="scale-on-hover-big" src={java} height={"40px"}/>
                                </a></h4>

                                <div className="pl-4 pt-3">

                                    <p>
                                        Faget handler om å lære objektorientert programmering og dette blir gjort via
                                        java.
                                        I forbindelse med jobben har jeg også fått pedagogisk opplæring på <a href=""
                                                                                                              target="_blank">LAOS</a> kurset.
                                    </p>


                                </div>

                            </Col>


                        </Row>


                        <Row className="mt-5 mb-5 pl-5 pb-5">

                            <Col md={6} className="p-0" style={{zIndex: "40000"}}>
                                <OnePageMomentum/>
                            </Col>
                            <Col md={6} className=" pl-5 p-4 text-left black-white">
                                <h4>
                                    Momentum <a href="https://reactjs.org/" target="_blank" className="m-2">
                                    <img className="scale-on-hover-big" src={react} height={"40px"}/>
                                </a><a href="https://ant.design/" target="_blank" className="m-2">
                                    <img className="scale-on-hover-big" src={antd} height={"40px"}/>
                                </a>
                                    <a href="https://www.djangoproject.com/" target="_blank" className="m-2">
                                        <img className="scale-on-hover-big" src={django} height={"40px"}/>
                                    </a>
                                    <a href="https://www.django-rest-framework.org/" target="_blank" className="m-2">
                                        <img className="scale-on-hover-big" style={{backgroundColor: "white"}}
                                             src={djangorest} height={"40px"}/>
                                    </a></h4>


                                <div className="pl-4 pt-3">
<p>
                                    I forbindelse med faget <a href="https://www.ntnu.no/studier/emner/TDT4140" target="_blank">Programvareutvikling </a>
                                     laget fem andre og meg en nettside med navnet Momentum.
                                    Nettsiden er et møtested for startup-bedrifter og arbeidssøkere.
</p>
                                    <p>
                                        Ta en titt på slideshowet hvis du ønsker et innblikk på hvordan siden så ut som.
                                    </p>
                                </div>

                            </Col>


                        </Row>

                        <Row className="mt-5 mb-5 pl-5 pb-5">

                            <Col md={8} className=" p-4 text-left black-white">
                                <h4>Linux <a href="https://www.linux.com/what-is-linux" target="_blank" className="m-2">
                                    <img className="scale-on-hover-big" src={linux} height={"40px"}/>
                                </a></h4>

                                <div className="pl-4 pt-3">

                                    <p>
                                        Jeg har blitt en entusiastisk tilhenger av Linux.
                                        Spesielt er jeg blitt glad i å bruke <a href="https://i3wm.org/" target="_blank">i3-wm</a>.

                                    </p>

                                </div>
                            </Col>


                        </Row>

                    </Container>


                    <Container className="p-0">
                        <Row id = "2018" className="mt-5 mb-5 pl-5 pb-5 d-block">
                            <h2>
                                2018
                            </h2>


                        </Row>

                        <Row className="mt-5 mb-5 pl-5 pb-5">
                            <Col md={8} className=" p-4 text-left black-white">
                                <h4>Battle Against The Algorithm <a href="https://chrome.google.com/webstore?hl=no" target="_blank"
                                                                    className="m-2">
                                    <img className="scale-on-hover-big " src={chrome} height={"40px"}/>
                                </a></h4>

                                <div className="pl-4 pt-3">

                                    <p>
                                        Youtube sine algoritmer er eksperter på å fange oppmerksomhet med å vise foreslåtte videoer.
                                        Denne chrome extensionen har jeg laget for å fjerne foreslåtte videoer fra youtube.

                                    </p>
                                    <p> <a href="https://github.com/filipot/BattleAgainstTheAlgorithms" target="_blank">Koden</a> ligger ute.</p>


                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-5 mb-5 pl-5 pb-5">

                            <Col md={1}/>
                            <Col md={5}>
                                <div className="justify-content-center w-100">
                                    <ReactPlayer className="golden-border scale-on-hover rounded "
                                                 url='https://www.youtube.com/watch?v=vbnGkp7ZHNU'
                                                 style={{margin: "0 auto"}} width={361*1.2} height={314*1.2}
                                                 controls={false} volume={0} playing={true} playbackRate={2} loop={true}/>
                                </div>
                            </Col>
                            <Col md={1}/>
                            <Col md={3} className=" p-4 text-left black-white">
                                <h4>Sjakk <a href="https://www.java.com/en/download/faq/whatis_java.xml" target="_blank" className="m-2">
                                    <img className="scale-on-hover-big" src={java} height={"40px"}/>
                                </a></h4>

                                <div className="pl-4 pt-3">

                                    <p>

                                    </p>

                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-5 pl-5 pb-5">
                            <Col md={8} className=" p-4 text-left black-white">
                                <h4>The Scrummer Times <a href="https://www.python.org/" className="m-2"
                                                          target="_blank">
                                    <img className="scale-on-hover-big" src={python} height={"40px"}/>
                                </a> <a href="https://www.djangoproject.com/" target="_blank" className="m-2">
                                    <img className="scale-on-hover-big" src={django} height={"40px"}/>
                                </a></h4>

                                <div className="pl-4 pt-3">

                                    <p>
                                        I forbindelse med faget <a href="https://www.ntnu.no/studier/emner/IT1901#tab=omEmnet" target="_blank">Informatikk prosjektarbeid 1 </a>
                                        laget fem andre og meg en nettside som vi kalte for The Scrummer Times.
                                        Det var en nettside med mange forskjellige brukertyper som uregistrert bruker, registrert bruker, forfatter, redaktør, daglig leder og administrator.
                                        Prosjektet ble gjennomført ved å ha Django som backend og frontend.
                                        Gruppen fikk karakter A.


                                    </p>


                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-5 pl-5 pb-5">

                            <Col md={6}>
                                <a href="https://online.ntnu.no/wiki/online/info/innsikt-og-interface/interessegrupper/questline/"
                                   target="_blank" className="m-0">
                                    <img className=" golden-border scale-on-hover rounded" src={questline} width="75%"
                                         height="auto"/>
                                </a>
                            </Col>

                            <Col md={6} className=" p-4 text-left black-white">

                                <h4>Questline <a href="https://www.blender.org/" target="_blank" className="m-2">
                                    <img className="scale-on-hover-big" src={blender} height={"40px"}/>
                                </a></h4>

                                <div className="pl-4 pt-3">

                                    <p>
                                        Innenfor linjeforeningen min Online har vi en interessegruppe som heter Questline.
                                        Interessegruppen er for de som er interesserte i Dungeons and Dragons og jeg
                                        lagde deres logo.
                                    </p>


                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-5 mb-5 pl-5 pb-5">

                            <Col md={6} className=" p-4 text-left black-white">
                                <h4>Gr&uuml;nderjakten 2018</h4>

                                <div className="pl-4 pt-3">

                                    <p>
                                        Under <a href="http://startntnu.no/grunderjakten/" target="_blank">gr&uuml;nderjakten 2018</a> var det fire problemstillinger som ble gitt ut av bedrifter.
                                        Jeg holdt en pitch på 60 sekunder for en bedrift som drev med VR.
                                        Problemstillingen handlet om hvordan FNs bærekraftmål kan bli nådd ved hjelp av VR.
                                    </p>
                                    <p>
                                        Ut fra sirka 20 lag vant gruppen min VR-problemstillingen og premien ble å møte bedriften
                                        på pizzakveld og mingle.
                                    </p>

                                </div>
                            </Col>
                        </Row>


                    </Container>
                    <Container className="p-0">
                        <Row id="resten" className="mt-5 mb-5 pl-5 pb-5 d-block">
                            <h2>
                                Resten
                            </h2>


                        </Row>
                        <Row className="mt-5 mb-5 pl-5 pb-5">
                            <Col lg={6} md={6} className="p-0" style={{zIndex: "40000"}}>
                                <div className="">
                                    <a href="https://folk.ntnu.no/sanderbl/webtek/Prosjekt/nettside/index.html"
                                       target="_blank" className="m-0">
                                        <img className=" golden-border scale-on-hover rounded" src={bryggeforum}
                                             width="100%" height="auto"/>
                                    </a>
                                </div>
                            </Col>
                            <Col md={6} className=" p-4 text-left black-white">
                                <h4>Gløshaugen Bryggeforum<a href="https://html-css-js.com/" className="m-2"
                                                             target="_blank">
                                    <img className="scale-on-hover-big" src={htmlcssjavascript} height={"40px"}/>
                                </a></h4>

                                <div className="pl-4 pt-3">

                                    <p>
                                        I forbindelse med faget <a href="https://www.ntnu.no/studier/emner/IT2805#tab=omEmnet" target="_blank">webteknologi </a>
                                        laget jeg og tre andre en nettside for Gløshaugen bryggeforum for å informere om organisasjonen.
                                        I faget var det bare lov å bruke rein HTML, CSS og Javascript. Gruppen fikk karakter A på prosjektet.
                                    </p>
                                    <p>
                                        Se <a href="https://folk.ntnu.no/sanderbl/webtek/Prosjekt/nettside/index.html" target="_blank">nettsiden</a> her. Trykk på ølglasset :)
                                    </p>

                                </div>
                            </Col>
                        </Row>


                        <Row className="mt-5 mb-5 pl-5 pb-5">

                            <Col md={6} className=" p-4 text-left black-white">
                                <h4>Tullet rundt i Unity<a href="https://unity.com/" className="m-2"
                                                             target="_blank">
                                    <img className="scale-on-hover-big" src={unity} height={"40px"}/>
                                </a><a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)" className="m-2"
                                       target="_blank">
                                    <img className="scale-on-hover-big" src={csharp} height={"40px"}/>
                                </a></h4>

                                <div className="pl-4 pt-3">
                                    <p>
                                        Da jeg var rundt 15 år ble jeg svært interessert i spillmotoren Unity.</p>
                                    <p>
                                        Blant annet laget jeg et pikselert spill hvor man kan ødelegge alt som man ser,
                                        og grafikken er generert via kode.</p>
                                    <p>
                                        Også lagde jeg en "voxel-engine" hvor man kan lage terreng som flyter og
                                        som man kan ødelegge, dette fikk jeg til ved å bruke <a href="https://en.wikipedia.org/wiki/Marching_cubes" target="_blank">marching cubes algoritmen</a>

                                    </p>

                                </div>
                            </Col>
                            <Col lg={6} md={6} className="p-0" style={{zIndex: "40000"}}>
                                <OnePageUnity/>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-5 pl-5 pb-5">
                            <Col lg={8} md={8} className="p-0" style={{zIndex: "40000"}}>
                                <OnePageLowpoly/>
                            </Col>
                            <Col md={4} className=" p-4 text-left black-white">
                                <h4>Lowpoly kunst<a href="https://www.blender.org/" target="_blank" className="m-2">
                                    <img className="scale-on-hover-big" src={blender} height={"40px"}/>
                                </a></h4>

                                <div className="pl-4 pt-3">

                                    <p>
                                        Da jeg var 14 år gammel ble jeg fasinert over <a href="https://www.sessions.edu/notes-on-design/whats-the-deal-with-low-poly-art/" target="_blank">lowpoly-kunststil</a>.
                                        Jeg eksperimenterte mye rundt i blender og laget disse bildene.
                                    </p>

                                </div>
                            </Col>


                        </Row>


                        <Row className="mt-5 mb-5 pl-5 pb-5">

                            <Col md={6} className=" p-4 text-left black-white">
                                <h4>Prøvde å lage spill <a href="http://www.cplusplus.com/"  target="_blank" className="m-2">
                                    <img className="scale-on-hover-big" src={cplusplus} height={"40px"}/>
                                </a><a href="https://www.opengl.org/"  target="_blank" className="m-2">
                                    <img className="scale-on-hover-big" src={OpenGL} height={"40px"}/>
                                </a></h4>

                                <div className="pl-4 pt-3">

                                   <p>Noe av det første jeg begynte med var å prøve å lage spill med bruk av C++, SDL og OpenGL</p>
                                    <p>Da laget jeg et spill hvor det var mulig å redigere på nivåene.</p>
                                    <p>Også prøvde jeg å lage et zombie spill</p>

                                </div>
                            </Col>
                            <Col lg={6} md={6} className="p-0" style={{zIndex: "40000"}}>
                                <OnePageSDL/>
                            </Col>
                        </Row>



                    </Container>

                </div>

            </div>

        )
    }
}

export default OnePage;