import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';


import momentum1 from '../images/lowpoly_canyon.png'
import momentum2 from '../images/lowpoly_cold.png'
import momentum3 from '../images/lowpoly_war.png'
import momentum4 from '../images/lowpoly_cabnin.png'
import ReactPlayer from 'react-player'

class OnePageUnity extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.click = this.click.bind(this);

        this.state = {
            index: 0,
            direction: null,
            finished:true
        };
    }
    componentWillUnmount() {
        this.state.finished = true;
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    click(e) {
        e.preventDefault();
        e.stopPropagation();
        if(this.state.finished === false)
            return;
        let s = this.state.index;
        s ++;
        if(s > 1)
            s = 0;
        setTimeout(()=>{this.setState({finished:true})},700);

        this.setState({
            index: s,
            finished:false
        });
    }


    render() {
        const { index, direction } = this.state;

        return (

            <Carousel
                activeIndex={index}
                onSelect={this.handleSelect}

                defaultActiveIndex={0}
                className=""
                controls={true}
                interval={null}
                indicators={false}
            >
                <Carousel.Item>


                    <ReactPlayer
                                 url='https://www.youtube.com/watch?v=ppMql8ClJlY'
                                 style={{margin: "0 auto"}} width={500} height={250}
                                 controls={true} volume={0} playing={true} playbackRate={2} loop={true}/>

                    <Carousel.Caption  style={{color:"white", position:"relative", left:"0px"}}>

                        <h4 className="m-2"></h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ReactPlayer
                        url='https://youtu.be/RfhamfHfC3E'
                        style={{margin: "0 auto"}} width={361*1.2} height={314*1.2}
                        controls={true} volume={0} playing={true} playbackRate={2} loop={true}/>

                    <Carousel.Caption  style={{color:"white", position:"relative", left:"0px"}}>

                        <h4 className="m-2"></h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        );
    }
}

export default OnePageUnity;