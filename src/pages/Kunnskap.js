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
                                                          x2="20%"
                                                          y2="25%"
                                                          className="text--line"
                                                    >
                                                        Filip
                                                    </text>
                                                    <text textAnchor="middle"
                                                          x2="60%"
                                                          y2="25%"
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

                    <CSSTransitionGroup
                        transitionAppear={true}
                        transitionLeave={true}
                        transitionAppearTimeout={300}
                        transitionEnterTimeout={0}
                        transitionLeaveTimeout={300}
                        transitionName="SlideIn"
                        style={{position:"fixed", left:"50%", transform:"translateX(-50%)"}}
                    >
                        {this.state.show ?
                            <div className="container" >

                                <div className="card-columns">


                                <div className="card">
                                    <div className="card-header">
                                        Card Header
                                    </div>
                                    <img className="card-img-top" src="https://source.unsplash.com/daily" alt="Card image top"/>
                                        <div className="card-body">
                                            <h3 className="card-title">Each Card body can have a title</h3>
                                            <h4 className="card-subtitle">And a subtitle</h4>
                                            <p className="card-text">This is a card body 1</p>
                                        </div>


                                        <div className="card-body">
                                            <h3 className="card-title">Card body 2 title</h3>
                                            <h4 className="card-subtitle">And subtitle</h4>
                                            <p className="card-text">You can also add a second body or even more</p>
                                        </div>
                                        <img className="card-img-bottom" src="https://source.unsplash.com/daily" alt="Card image bottom"/>
                                            <div className="card-footer">
                                                Card Footer
                                            </div>
                                </div>


                                <div className="card">

                                    <img className="card-img-top" src="https://source.unsplash.com/daily?nature"
                                         alt="Card image top"/>
                                        <div className="card-img-overlay">
                                            <h3 className="card-title">Card title</h3>
                                            <h4 className="card-subtitle">Card subtitle</h4>
                                            <p className="card-text">You can use the cap image as an overlay for the
                                                body</p>
                                        </div>
                                </div>

                                <div className="card">

                                    <img className="card-img-top" src="https://source.unsplash.com/daily?rock"
                                         alt="Card image top"/>
                                        <div className="card-img-overlay white">
                                            <h3 className="card-title">Card title</h3>
                                            <h4 className="card-subtitle">Card subtitle</h4>
                                            <p className="card-text">You can add links to card body</p>
                                            <a href="#" className="card-link">Link 1</a>
                                            <a href="#" className="card-link">Link 2</a>
                                        </div>
                                </div>

                                <div className="card  card-primary p-3 text-center">
                                    <ul className="list-group">
                                        <li className="list-group-item">Item 1</li>
                                        <li className="list-group-item">Item 2</li>
                                        <li className="list-group-item">Item 3</li>
                                    </ul>

                                </div>

                                <div className="card text-white border-danger bg-danger p-1 text-center">

                                    <div className="card-body">
                                        <h2 className="card-title"> My Card</h2>
                                        <p className="card-text"> This is a simple centered text </p>
                                    </div>

                                </div>

                                <div className="card text-primary border-primary">

                                    <div className="card-body">
                                        <h2 className="card-title"> My List</h2>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Item 1</li>
                                            <li className="list-group-item">Item 2</li>
                                            <li className="list-group-item">Item 3</li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="card border-danger text-primary">
                                    <img className="card-img-top" src="https://source.unsplash.com/daily?rock"
                                         alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Card text</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Item 1</li>
                                            <li className="list-group-item">Item 2</li>
                                            <li className="list-group-item">Item 3</li>
                                        </ul>
                                        <div className="card-body">
                                            <a href="#" className="card-link">Link 1</a>
                                            <a href="#" className="card-link">Link 2</a>
                                        </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <ul className="nav nav-tabs card-header-tabs">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Tab 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Tab 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Tab 3</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <img className="card-img-top" src="https://source.unsplash.com/daily?rock"
                                         alt="Card image top"/>
                                        <div className="card-body">
                                            <h3 className="card-title">Card title</h3>
                                            <h4 className="card-subtitle">Card subtitle</h4>
                                            <p className="card-text">You can add navigation (navigation and pills) to
                                                card header</p>
                                        </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <ul className="nav  nav-pills card-header-pill">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Pill 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Pill 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Pill 3</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <img className="card-img-top" src="https://source.unsplash.com/daily?wood"
                                         alt="Card image top"/>
                                        <div className="card-body">
                                            <h3 className="card-title">Card title</h3>
                                            <h4 className="card-subtitle">Card subtitle</h4>
                                            <p className="card-text">You can add navigation (navigation and pills) to
                                                card header</p>
                                        </div>
                                </div>

                                <div className="card text-white bg-dark mt-5">
                                    <div className="card-header">This is a Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a text </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                            :
                            <div></div>
                        }
                    </CSSTransitionGroup>
                <Layout timeout ={600} destroy={()=>this.setState({show:false})}/>
            </div>
        )
    }
}
export default Kunnskap;