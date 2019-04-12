
import React, {Component} from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextSpasm from '../TextSpasm.js'

class OnePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            show_scroll_down_mouse:true

        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onWheel);
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.onWheel);
    }

    onWheel = (event) =>{
        let show_scroll_down_mouse = this.state.show_scroll_down_mouse;
        console.log(window.scrollY); // Value of scroll Y in px
        if(window.scrollY > 150 && show_scroll_down_mouse){
            show_scroll_down_mouse = false;
        }
        if (window.scrollY < 150 && !show_scroll_down_mouse){
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
                              fill="none" stroke="#FFF" strokeWidth="1"
                        />
                    </svg>
                </div>
            </div>);
        }
        return(<div></div>);
    }

    render() {

        return (
            <div style={{overflowX:"hidden", width:"100vw"}}>
                <div>
                    <TextSpasm amount={1} speed={2} style={{width:"97%"}}/>
                </div>

                <Container className="">
                    <Row className="full-height" style={{overflow:"hidden"}}>
                        <Col sm>

                            <img className="centerVertical" src="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" width="500px"/>
                        </Col>
                        <Col sm>
                            <div className="centerVertical">
                             <h1 style={{"width":"auto"}}>Filip Tangen</h1>
                                <br/>
                                <h3  style={{"width":"auto"}}>Jeg tror på ...</h3>
                            </div>
                        </Col>
                        {this.scrollDownMouse()}



                    </Row>

                    <Row className="white-black third-height">

                        <p>Blablabal</p>

                    </Row>
                    <Row className="full-height">

                    </Row>
                    <Row className="full-height">
                        <div className="background-div white-black full-height"></div>
                    </Row>

                </Container>

            </div>

        )
    }
}

export default OnePage;