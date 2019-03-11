import React, { Component } from 'react';
import Layout from "./Layout";
class Erfaring extends Component {
    render() {
        return(

            <div>
                <Layout timeout ={600} destroy={()=>this.setState({show:false})}/>
                <h2>Thank you!</h2>
                <p>Expect our awesome contents in your email as soon as you confirm subscription!</p>
            </div>
        )
    }
}
export default Erfaring;