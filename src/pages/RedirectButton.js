import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
class RedirectButton extends Component {

    redirect = () =>{
        this.props.destroy();
        let path = this.props.path;
        let timeout = this.props.timeout;

        setTimeout(() => {
            this.props.history.push(path)
        }, timeout)

    };
    render() {
        return(
            <Button onClick={() => { this.redirect()}}>
                {this.props.name}
            </Button>
        )
    }
}
export default withRouter(RedirectButton);