import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';


import momentum1 from '../images/lowpoly_canyon.png'
import momentum2 from '../images/lowpoly_cold.png'
import momentum3 from '../images/lowpoly_war.png'
import momentum4 from '../images/lowpoly_cabnin.png'

class OnePageLowpoly extends React.Component {
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

    }

    click(e) {
        e.preventDefault();
        e.stopPropagation();
        if(this.state.finished === false)
            return;
        let s = this.state.index;
        s ++;
        if(s > 3)
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

                onClick={this.click}
                className="scale-on-hover"
                defaultActiveIndex={0}
                className="rounded golden-border scale-on-hover pointer-on-hover"
                controls={false}
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={momentum1}
                        alt="First slide"
                    />
                    <Carousel.Caption  style={{color:"white", position:"relative", left:"0px"}}>

                        <h4 className="m-2">Canyon</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={momentum2}
                        alt="Third slide"
                    />
                    <Carousel.Caption  style={{color:"white", position:"relative", left:"0px"}}>

                        <h4 className="m-2">Winterland</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={momentum3}
                        alt="Third slide"
                    />

                    <Carousel.Caption  style={{color:"white", position:"relative", left:"0px"}}>

                        <h4 className="m-2">Trench warfare</h4>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={momentum4}
                        alt="Third slide"
                    />

                    <Carousel.Caption  style={{color:"white", position:"relative", left:"0px"}}>

                        <h4 className="m-2">Hunter cabin</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        );
    }
}

export default OnePageLowpoly;