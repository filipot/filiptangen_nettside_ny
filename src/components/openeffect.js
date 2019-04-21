import React, {Component} from 'react';

class ImageEffects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onWheel);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onWheel);
    }

    onWheel = () => {
        let when = this.props.when;
        let whenclose = this.props.whenclose;
        let display = this.state.display;

        if (window.scrollY < whenclose && display) {
            display = false;
        } else if (window.scrollY > when && !display) {
            display = true;
        }


        this.setState({display: display})
    };


    render() {
        let style = {
            width: this.props.width,
            height: this.props.height,
        };
        if (this.state.display || this.props.alwaysDisplay) {

            return (

                <div className={this.props.className + " open-effect"} style={style}>
                    <div className="open-effect-text-opacity">
                    {this.props.children}
                    </div>
                </div>


            )
        }
        return (<div style={style}></div>);
    }
}

export default ImageEffects;