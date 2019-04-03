import React, { Component } from 'react';
import TextSpasm from '../TextSpasm.js'
import * as ParticleText from "../ParticleText";

class filiptangen extends Component {


    componentDidMount() {

        ParticleText.renderText();
    }

    render() {
        return(
            <canvas id="canvas" style={{left:"", top:"-20px", width:"200px", height:"", translate:"transformX(-50%)"}}></canvas>

        )
    }
}
export default filiptangen;