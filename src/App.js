import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import FrontPage from './pages/FrontPage'
import Kunnskap from './pages/Kunnskap'
import Erfaring from './pages/Erfaring'
import Personlighet from './pages/Personlighet'
import Ekstra from './pages/Ekstra'
import Particles from 'react-particles-js'
import PageShell from './pages/PageShell'
import './App.css';
import { HashRoute } from 'react-router-dom'
import * as ParticleText from './ParticleText'
import {withRouter} from 'react-router-dom';
import f from './images/envelope.svg'
import svg from './images/envelope.svg'

class App extends Component {
    componentDidMount() {
        window.canScroll = false;
        window.timer_test = null;
        window.can_switch_page = false;
        ParticleText.renderText();
    }

    /*params={{
                "fps_limit": 28,
                "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 30,
                        "opacity": 0.4
                    },
                    "move": {
                        "speed": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "opacity_min": 0.05,
                            "speed": 2,
                            "sync": false
                        },
                        "value": 0.4
                    }
                },
                "polygon": {
                    "enable": true,
                    "scale": 1,
                    "type": "inline",
                    "move": {
                        "radius": 10
                    },
                    "url": "images/envelope.svg",
                    "inline": {
                        "arrangement": "equidistant"
                    },
                    "draw": {
                        "enable": true,
                        "stroke": {
                            "color": "rgba(0, 0, 0, .8)"
                        }
                    }
                },
                "retina_detect": false,
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "size": 6,
                            "distance": 40
                        }
                    }
                }
            }}


            <Particles width="100vw" height="100vh" params={{
                "fps_limit": 28,
                "particles": {
                    "number": {
                        "value": 200,
                        "density": {
                            "enable": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 30,
                        "opacity": 0.4
                    },
                    "move": {
                        "speed": 1
                    },
                    "opacity": {
                        "anim": {
                            "enable": true,
                            "opacity_min": 0.05,
                            "speed": 2,
                            "sync": false
                        },
                        "value": 0.4
                    }
                },
                "polygon": {
                    "enable": true,
                    "scale": 1,
                    "type": "inline",
                    "move": {
                        "radius": 10
                    },
                    "url": "envelope.svg",
                    "inline": {
                        "arrangement": "equidistant"
                    },
                    "draw": {
                        "enable": true,
                        "stroke": {
                            "color": "rgba(0, 0, 0, .8)"
                        }
                    }
                },
                "retina_detect": false,
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "size": 6,
                            "distance": 40
                        }
                    }
                }
            }} />




            <Particles style={{"position":"fixed", left:"0px", right:"0px"}}
                       params={{
                           "particles": {
                               "number": {
                                   "value": 400,
                                   "density": {
                                       "enable": false
                                   }
                               },
                               "size": {
                                   "value": 2,
                                   "random": true,
                                   "anim": {
                                       "speed": 4,
                                       "size_min": 0.3
                                   }
                               },
                               "line_linked": {
                                   "enable": false
                               },
                               "move": {
                                   "random": true,
                                   "speed": 0.2,
                                   "direction": "top",
                                   "out_mode": "out"
                               },
                               "color": {
                                   "value": ["#000000"]
                               }
                           },

                           "interactivity": {
                               "events": {
                                   "onhover": {
                                       "enable": true,
                                       "mode": "bubble"
                                   },
                                   "onclick": {
                                       "enable": true,
                                       "mode": "repulse"
                                   }
                               },
                               "modes": {
                                   "bubble": {
                                       "distance": 250,
                                       "duration": 2,
                                       "size": 0,
                                       "opacity": 0
                                   },
                                   "repulse": {
                                       "distance": 400,
                                       "duration": 4
                                   }
                               }
                           }
                       }} />

            COLORS
            "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]*/
    render() {
    return (
        <div className="App" style={{width:"100vw",height:"100vh"}}>
            <Particles style={{"position":"fixed", left:"0px", right:"0px"}}
                params={{
                    "particles": {
                        "number": {
                            "value": 4,
                            "density": {
                                "enable": true,
                                "value_area": 200
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 0.4,
                            "color": "#0000FF"
                        },
                        "move": {
                            "direction": "random",
                            "speed": 1.0
                        },
                        "size": {
                            "value": 1.5
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.7
                            }
                        },
                        "color": {
                            "value": ["#0000FF"]
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    },
                    "retina_detect": true
                }} />


            <canvas id="canvas" style={{left:"", top:"-20px", width:"200px", height:"", translate:"transformX(-50%)"}}></canvas>


            <Route path="/" exact component={FrontPage}></Route>
            <Route path="/kunnskap" exact component={Kunnskap}></Route>
            <Route path="/erfaring" exact component={Erfaring}></Route>
            <Route path="/personlighet" exact component={Personlighet}></Route>
            <Route path="/ekstra" exact component={Ekstra}></Route>

        </div>
    );
  }
}
/*
<!--
            <HashRoute path="/" exact component={FrontPage}></HashRoute>
            <HashRoute path="/thanks" exact component={Kunnskap}></HashRoute>-->
*/

export default App;