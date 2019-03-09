import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {CSSTransitionGroup} from "react-transition-group";
import RedirectButton from "./RedirectButton";

import  "../styles/layout.css";

class Layout extends Component {

    render() {
        return(
            <div className="outer">
                <div className="middle">
                    <div style={{float:"left"}}>
                        <ul >
                            <li>
                                <RedirectButton name="test" timeout={this.props.timeout} path="/" destroy ={() => { this.props.destroy();}}/>
                                <div>
                                    <ul >
                                        <li>
                                            <RedirectButton name="test" timeout={this.props.timeout} path="/" destroy ={() => { this.props.destroy();}}/>
                                        </li>
                                        <li >
                                            <RedirectButton name="test" timeout={this.props.timeout} path="/" destroy ={() => { this.props.destroy();}}/>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <RedirectButton name="test2" timeout={this.props.timeout} path="/kunnskap" destroy ={() => { this.props.destroy();}}/>
                            </li>
                            <li>
                                <RedirectButton name="test3" timeout={this.props.timeout} path="/erfaring" destroy ={() => { this.props.destroy();}}/>
                            </li>
                            <li>
                                <RedirectButton name="test3" timeout={this.props.timeout} path="/personlighet" destroy ={() => { this.props.destroy();}}/>
                            </li>
                            <li>
                                <RedirectButton name="test3" timeout={this.props.timeout} path="/ekstra" destroy ={() => { this.props.destroy();}}/>
                            </li>
                        </ul>



                    </div>
                </div>


                <div className="chevron bottom shadow_test_2">
                    <div className="chevron bottom ">
                        <div className="chevron bottom ">


                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
export default Layout;