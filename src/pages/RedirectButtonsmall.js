import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
class RedirectButtonsmall extends Component {

    redirect = () =>{
        let nowpath = this.props.location.pathname;
        let path = this.props.path;
        if(nowpath === path){
            return;
        }
        this.props.destroy();

        let timeout = this.props.timeout;

        setTimeout(() => {
            this.props.history.push(path)
        }, timeout)

    };
    render() {
        return(

<span>
    {this.props.disabled ?
        <button onClick={(e) => { e.stopPropagation();e.preventDefault(); this.props.redirect(this.props.path);}} className=" m-0 text-center d-inline-block" style={{  borderRadius:"20px"}} disabled>
            <p className="m-0 p-1" style={{fontSize:"10px"}}>
                {this.props.name}</p>

        </button>

        :
        <button onClick={(e) => {  e.stopPropagation();e.preventDefault();this.props.redirect(this.props.path); }} className=" m-0 text-center d-inline-block" style={{  borderRadius:"20px"}}>
            <p className="m-0 p-1 " style={{fontSize:"10px"}}>
                {this.props.name}</p>

        </button>
    }

</span>
        )
    }
}
export default withRouter(RedirectButtonsmall);