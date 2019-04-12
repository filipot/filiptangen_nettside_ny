import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class RedirectButton extends Component {

    redirect = () => {
        let nowpath = this.props.location.pathname;
        let path = this.props.path;
        if (nowpath === path) {
            return;
        }
        this.props.destroy();

        let timeout = this.props.timeout;

        setTimeout(() => {
            this.props.history.push(path)
        }, timeout)

    };

    render() {
        return (
            <div>

                {
                    this.props.disabled ?
                        <button onClick={() => {
                            this.props.redirect(this.props.path);
                            /*
                            this.redirect()*/
                        }} className="p-1" style={{width: "110px", height: "auto", borderRadius: "0px 5px 5px 0px"}}
                                disabled>
                            {this.props.src}<p>
                            {this.props.name}</p>

                            {this.props.children}
                        </button>
                        :
                        <button onClick={() => {
                            this.props.redirect(this.props.path);
                            /*
                            this.redirect()*/
                        }} className="p-1" style={{width: "110px", height: "auto", borderRadius: "0px 5px 5px 0px"}}>
                            {this.props.src}<p>
                            {this.props.name}</p>

                            {this.props.children}
                        </button>
                }
            </div>
        )
    }
}

export default withRouter(RedirectButton);