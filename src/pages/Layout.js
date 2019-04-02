import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import { MdAccountBox } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { FiCode } from "react-icons/fi";

/*import { ICON_NAME } from "react-icons/md";
import {  Glyphicon } from 'react-bootstrap';*/
import {CSSTransitionGroup} from "react-transition-group";
import RedirectButton from "./RedirectButton";
import {withRouter} from 'react-router-dom';
import  "../styles/layout.css";

import icon1 from '../images/icons8-contacts.svg'; // Tell Webpack this JS file uses this image
import icon2 from '../images/bilde.png'; // Tell Webpack this JS file uses this image
import icon3 from '../images/icons8-work-96.png'; // Tell Webpack this JS file uses this image


class Layout extends Component {

    componentDidMount() {/*
        document.onwheel = this.onWheel.bind(this);*/
        window.addEventListener("wheel", this.onWheel/*event => console.info(event.deltaY)*/);

    }
    componentWillUnmount(){
        window.removeEventListener("wheel",this.onWheel);
    }

    redirect = (path) =>{
        this.props.destroy();
        let timeout = this.props.timeout;

        setTimeout(() => {
            this.props.history.push(path)
        }, timeout)

    };

    getPreviousPage() {
        let path = this.props.location.pathname;


        if(path === "/")
            return;
        switch(path){
            case "/kunnskap":
                path = "/";
                break;
            case "/erfaring":
                path = "/kunnskap";
                break;
            case "/personlighet":
                path = "/erfaring";
                break;
            case "/ekstra":
                path = "/personlighet";
                break;
        }

        this.redirect(path);
    }
    getNextPage() {
        let path = this.props.location.pathname;
        switch(path){
            case "/":
                path = "/kunnskap";
                break;
            case "/kunnskap":
                path = "/erfaring";
                break;
            case "/erfaring":
                path = "/personlighet";
                break;
            case "/personlighet":
                path = "/ekstra";
                break;
        }
        this.redirect(path);

    }
/*
    func = (event) =>{
        window.can_switch_page=true;


    }*/

    onWheel = (event) =>{/*
        if(!window.can_switch_page){
            if(window.timer_test !== null) {
                clearTimeout(window.timer_test);
            }
            window.timer_test = setTimeout( ()=>this.func(event), 100);
            return;

        }
        window.can_switch_page = false;*/

        if (event.deltaY< 0) {
                this.getPreviousPage();

        } else {
                this.getNextPage();

        }
    }
/*onWheel={this.onWheel} */


    /*
    *  <div>
                                    <ul >
                                        <li>
                                            <RedirectButton name="test" timeout={this.props.timeout} path="/" destroy ={() => { this.props.destroy();}}/>
                                        </li>
                                        <li >
                                            <RedirectButton name="test" timeout={this.props.timeout} path="/" destroy ={() => { this.props.destroy();}}/>
                                        </li>
                                    </ul>
                                </div>

                                , backgroundColor:"white", paddingRight:"10px", paddingTop:"10px", paddingBottom:"0px", borderRadius:"5px"
    * */
    render() {

        let h = 1;
        let v = 15;
        let h2 = 10;
        let v2 = 10;
        return(
            <div className="outer"  style={{width:"0px"}}>
                <div className="middle">
                    <div style={{float:"left"}} >
                        <ul >
                            <li>
                                <RedirectButton
                                src={<MdAccountBox/>}
                                    name="Meg" timeout={this.props.timeout} path="/" destroy ={() => { this.props.destroy();}}/>

                            </li>

                            <li>
                                <RedirectButton
                                    src={<FaBook/>}

                                    name="Kunnskap" timeout={this.props.timeout} path="/kunnskap" destroy ={() => { this.props.destroy();}}/>
                            </li>
                            <li>
                                <RedirectButton src={<FiCode/>}name="Erfaring" timeout={this.props.timeout} path="/erfaring" destroy ={() => { this.props.destroy();}}/>
                            </li>

                        </ul>



                    </div>
                </div>


                <div className="chevron bottom shadow ">
                    <div className="chevron bottom shadow ">
                            <svg width="60" height="60" className="shadow_test_2" style={{position:"relative", bottom:"50px", right:"11px"}}>
                                <path d={"M20.5,5 h" + h + " a" + h2 + "," + h2 + " 0 0 1 " + h2 + ", " + h2 +
                                    " v" + v + " a" + v2 + "," + v2 + " 0 0 1 " + -v2 + ", " + v2 +
                                    "h" + -h + " a" + h2 + "," + h2 + " 0 0 1 " + -h2 + ", " + -h2 +
                                    " v" + -v + " a" + v2 + "," + v2 + " 0 0 1 " + v2 + ", " + -v2 +
                                "M21,10 v7 z"}
                                    fill="none" stroke="white" strokeWidth="1"
                                />
                            </svg>
                    </div>




                </div>
            </div>
        )
    }/*

                                <li>
                                <RedirectButton name="test3" timeout={this.props.timeout} path="/personlighet" destroy ={() => { this.props.destroy();}}/>
                            </li>
                            <li>
                                <RedirectButton name="test3" timeout={this.props.timeout} path="/ekstra" destroy ={() => { this.props.destroy();}}/>
                            </li>

    10,10 0 0 1 10,107
     + "v" + v + " a" + a10,10 0 0 1 -10,10 h-5 a10,10 0 0 1 -10,-10 v-15 a10,10 0 0 1 10,-10 z}
     <path d={"M20,0 h" + h + " a" + h2 + "," + h2 + " 0 0 1 " + h2 + ", " + h2v15 a10,10 0 0 1 -10,10 h-5 a10,10 0 0 1 -10,-10 v-15 a10,10 0 0 1 10,-10 z} fill="none" stroke="white" stroke-width="3"
                                />*/
}
export default withRouter(Layout);