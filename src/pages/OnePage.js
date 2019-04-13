
import React, {Component} from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextSpasm from '../TextSpasm.js'
import HoverTextEffect from '../components/HoverTextEffect'
import ImageEffects from '../components/ImageEffects'

import image1 from '../images/bilder/darktable_exported/IMG_20190413_142655_edit.jpg'
import image2 from '../images/bilder/darktable_exported/IMG_20190413_142650_01_edit.jpg'

class OnePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            show_scroll_down_mouse:true,
            show_funny_pic: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onWheel);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.onWheel);
    }

    onWheel = (event) =>{
        let wh = window.innerHeight;
        let front = wh*0;
        let first = wh*1;
        let second = wh*1*1.33;


        let show_scroll_down_mouse = this.state.show_scroll_down_mouse;

        console.log(window.scrollY); // Value of scroll Y in px
        if(window.scrollY > front + 150 && show_scroll_down_mouse){
            show_scroll_down_mouse = false;
        }
        else if (window.scrollY < front + 150 && !show_scroll_down_mouse){
            show_scroll_down_mouse=true;
        }



        this.setState({show_scroll_down_mouse:show_scroll_down_mouse})
    };



    scrollDownMouse(){
        let h = 1;
        let v = 15;
        let h2 = 10;
        let v2 = 10;
        if(this.state.show_scroll_down_mouse){
            return(<div className="chevron bottom shadow " style={{opacity:"1"}}>
                <div className="chevron bottom shadow ">
                    <svg width="60" height="60" className="" style={{position:"relative", bottom:"50px", right:"11px"}}>
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
        return(<div></div>);
    }
/*         <img className="centerVertical" src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" width="500px"/>
*
*
*                            <ImageEffects className="centerVertical" src={image1} width="100%" height="

* <HoverTextEffect/>*/


    renderPictureOfMe(){
        if(this.state.show_funny_pic){
            return(<img src={image2} width={"100%"} alt="me"/>);
        }
        else{
            return (<img src={image1} width={"100%"} alt="me"/>);
        }
    }


    render() {
        return (
            <div style={{overflowX:"hidden", width:"100vw"}}>


                <div>
                    <div>
                        <TextSpasm amount={1} speed={2} style={{width:"97%"}}/>
                    </div>
                    {this.scrollDownMouse()}


                    <Container className="centerHorizontal">
                    <Row className="full-height" style={{overflow:"hidden"}}>
                        <Col className="m-0 p-0" md={1} sm={false}></Col>
                        <Col sm md={3} className="m-0 p-0">


                            <div className="centerVertical image-effect" onMouseEnter={()=>{this.setState({show_funny_pic:true})}}
                                 onMouseLeave={()=>{this.setState({show_funny_pic:false})}}>
                                {this.renderPictureOfMe()}

                            </div>

                        </Col>
                        <Col sm md={7} className="m-0 p-0 " >
                            <div className="centerVertical front-page-text " style={{height:"441px"}}>
                                <div className="centerVertical front-page-text-inner">
                             <h1 className="dropdown-shadow" style={{"width":"auto", color:"#FFE878"}}>Filip Tangen</h1>
                                <br/>
                                <br/>
                                <h2  className="dropdown-shadow" style={{"width":"auto"}}>Jeg er en fullstack-utvikler</h2>

                                </div>
                            </div>
                        </Col>




                    </Row>
                    </Container>

                    <Container  className="centerHorizontal">
                    <Row className="white-black third-height">
                        <Container>
                        <Row >
                        <div className="m-1 p-4">

                            <h4>Velkommen til nettsiden min!</h4>
                        </div>
                        </Row>
                        <Row>
                        <p className="padding-left-33" style={{width:"auto"}}> Jeg er en student i 2 klasse på NTNU </p>
                        </Row>
                        </Container>


                    </Row>
                    </Container>
                    <p>teeest</p>
                    <div className="full-height" style={{position:"relative"}}>

                        <Container>
                            <Row>
                                <p>
                                    2019 - 1
                                </p>

                            </Row>

                            <Row>

                            </Row>

                        </Container>

                    </div>
                    <div className="white-black full-height"  style={{position:"relative"}}>
                        <h2 className="white-black align-left" style={{textAlign:"left"}}>2019 - 2</h2>
                            test

                        test
                    </div>

                </div>

            </div>

        )
    }
}

export default OnePage;