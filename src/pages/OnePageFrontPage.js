
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
                             <h1 className="dropdown-shadow" style={{"width":"auto", color:"#e6a340"}}>Filip Tangen</h1>
                                <br/>
                                <br/>

                                    <HoverTextEffect/>

                                    <br/>


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


                                    </Row>
                                </div>



                                </div>
                        </Col>




                    </Row>
                    </Container>

        )
    }
}

export default OnePageFrontPage;