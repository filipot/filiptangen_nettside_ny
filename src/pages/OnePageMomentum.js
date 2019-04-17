import React, {Component} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';


import momentum1 from '../images/momentum1.jpg'
import momentum2 from '../images/momentum2.jpg'
import momentum3 from '../images/momentum3.jpg'
import momentum4 from '../images/momentum4.jpg'
import momentum5 from '../images/momentum5.jpg'

class OnePageMomentum extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);
        this.click = this.click.bind(this);

        this.state = {
            index: 0,
            direction: null,
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    click(e) {
        let s = this.state.index;
        s ++;
        if(s > 5)
            s = 0;

        this.setState({
            index: s,
        });
    }


    render() {
        const { index, direction } = this.state;

        return (

            <Carousel
                activeIndex={index}

                onClick={this.click}
                className="scale-on-hover"
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={momentum1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p style={{color:"black"}}>Liste over bedriftene i systemet</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={momentum2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p style={{color:"black"}}>Bedriften og stillingene den har</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={momentum3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p style={{color:"black"}}>Bedrifteier sin profil</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={momentum4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p style={{color:"black"}}>Redigering av bedrift, med et selvlaget tagsystem</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={momentum5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p style={{color:"black"}}>Redigering av profil</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        );
    }
}

export default OnePageMomentum;