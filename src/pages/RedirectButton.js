import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
class RedirectButton extends Component {

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
            <Button onClick={() => { this.redirect()}} style={{width:"100px", height:"80px", borderRadius:"0px 5px 5px 0px"}}>
                {this.props.src}<p>
                {this.props.name}</p>
            </Button>
        )
    }
}
export default withRouter(RedirectButton);