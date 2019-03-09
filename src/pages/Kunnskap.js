import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {CSSTransitionGroup} from "react-transition-group";
import RedirectButton from "./RedirectButton";

/*transitionAppear={true}
                transitionLeave={true}
                transitionAppearTimeout={2000}
                transitionEnterTimeout={2000}
                transitionLeaveTimeout={2000}

                transitionName="SlideIn"
* */
class Kunnskap extends Component {
    state={
        show:true,

    };
    render() {
        return(
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
        )
    }
}
export default Kunnskap;