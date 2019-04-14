import React, { Component } from 'react';
import TextSpasm from '../TextSpasm.js'
import * as ParticleText from "../ParticleText";
import OpenEffect from '../components/openeffect'
class filiptangen extends Component {


    componentDidMount() {

        setTimeout(function(){ ParticleText.renderText()}, 200);
    }

    render() {
        return(
            <div>

            <OpenEffect className="open-effect-slide-down filiptangen" when={0} whenclose={0} alwaysDisplay>
                <canvas className="" style={{width:"200px"}} id="canvas" ></canvas>
            </OpenEffect>
            </div>
        )
    }
}
export default filiptangen;