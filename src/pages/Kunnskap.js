import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {CSSTransitionGroup} from "react-transition-group";
import RedirectButton from "./RedirectButton";

import Layout from "./Layout";

/*transitionAppear={true}
                transitionLeave={true}
                transitionAppearTimeout={2000}
                transitionEnterTimeout={2000}
                transitionLeaveTimeout={2000}

                transitionName="SlideIn"
* */
/*<div key="1"  className = "center_content_parent"  style={{width:"80%",height:"70%"}} >
                        <Row>
                            <Col sm={4}>


                                <Card className="shadow_test" style={{margin:"20px", width:'100%', height:'70%', minHeight:"70%"}}>
                                    <div >
                                        <Card.Img variant="top" src={bilde} />
                                        <Card.Body>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk of
                                                the card's content.
                                            </Card.Text>

                                            <svg viewBox="0 0 300 200">
                                                <symbol id="s-text">
                                                    <text textAnchor="middle"
                                                          x="20%"
                                                          y="25%"
                                                          className="text--line"
                                                    >
                                                        Filip
                                                    </text>
                                                    <text textAnchor="middle"
                                                          x="60%"
                                                          y="25%"
                                                          className="text--line2"
                                                    >
                                                        Tangen
                                                    </text>

                                                </symbol>

                                                <g className="g-ants">
                                                    <use xlinkHref="#s-text"
                                                         className="text-copy"></use>
                                                    <use xlinkHref="#s-text"
                                                         className="text-copy"></use>
                                                    <use xlinkHref="#s-text"
                                                         className="text-copy"></use>
                                                    <use xlinkHref="#s-text"
                                                         className="text-copy"></use>
                                                    <use xlinkHref="#s-text"
                                                         className="text-copy"></use>
                                                </g>

                                            </svg>

                                        </Card.Body>
                                    </div>
                                </Card>




                            </Col>

                            <Col sm={8}>
                                <Card  className = "center_content shadow" style={{ width: '100%', height: '100%'}}>

                                    <Container style={{maxWidth: "max-content", height:'100%'}} >
                                        <Row style={{height:'100%'}}>


                                        </Row>
                                    </Container>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <RedirectButton name="test" destroy={()=>this.setState({show:false})} path='/kunnskap' timeout={300}>Test</RedirectButton>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>*/
class Kunnskap extends Component {
    state={
        show:true,

    };
    render() {
        return(
            <div>
                <Layout timeout ={600} destroy={()=>this.setState({show:false})}/>
                    <CSSTransitionGroup
                        transitionAppear={true}
                        transitionLeave={true}
                        transitionAppearTimeout={300}
                        transitionEnterTimeout={0}
                        transitionLeaveTimeout={300}
                        transitionName="SlideIn"
                    >
                        {this.state.show ?
                            <div key="1" >
                                <h2 key="2">We don't mind keeping you posted!</h2>
                                <p key="3">THE OTHER WEBSITE!
                                </p>

                                <RedirectButton name="test" destroy={()=>this.setState({show:false})} path='/' timeout={300}>Test</RedirectButton>



                                <p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p>
                                <p>tggggg</p>

                                <p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p>
                                <p>tggggg</p>

                                <p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p>
                                <p>tggggg</p>
                                <div id="test">
                                    <p> THIS IS THE TEST</p>
                                </div>

                                <p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p>
                                <p>tggggg</p>

                                <p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p>
                                <p>tggggg</p>

                                <p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p><p>tggggg</p>
                                <p>tggggg</p>

                            </div>
                            :
                            <div></div>
                        }
                    </CSSTransitionGroup>
            </div>
        )
    }
}
export default Kunnskap;