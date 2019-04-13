
import React, {Component} from 'react';

class ImageEffects extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
    }
    componentWillUnmount(){
    }



    render() {
        return (
            <div className={this.props.className + " image-effect"}>
               <img src={this.props.src} width={this.props.width} height={this.props.height} alt="lol"/>
            </div>

        )
    }
}

export default ImageEffects;