
import React, {Component} from 'react';

class HoverTextEffect extends Component {
    constructor(props){
        super(props);
        this.state = {
            t1: ['er en',],
            t2: ['fullstack-utvikler',
            'innovasjon'],


        };
    }

    componentDidMount() {
    }
    componentWillUnmount(){
    }

    increaseT(t, maxSize){
        if(t >= maxSize){
            t = 0;
        }
        else{
            t ++;
        }
        return t;
    }


    handleElement(element){

        if(!element){
            return;
        }
        if(!(element.tagName.toLowerCase() === "div")){
            return;
        }

        let children = element.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            child.style.display = "block";
            child.addEventListener("mouseout", (e)=>{this.goOneLevelDown(e)});
            child.addEventListener("click", (e)=>{this.goOneLevelDown(e)});
            element.parentNode.insertBefore(child,
                element);
        }
        if(!element.parentNode){
            return;
        }

        element.parentNode.removeChild(element);
    }



    goOneLevelDown(e){
        let element = e.currentTarget;
        if(!element.firstChild){
            return;
        }

        /*Removes the parent but keeps the children*/
            setTimeout(()=>{
                this.handleElement(element);
            }, 100);
    }


    render() {
        return (
            <div>
                <div onMouseOut={this.goOneLevelDown.bind(this)} onClick={this.goOneLevelDown.bind(this)}>
                    Jeg
                <div style={{display:"none"}}>test
                    <div style={{display:"none"}}><span>test2</span>
                    </div></div></div>

                <div onMouseOut={this.goOneLevelDown.bind(this)} onClick={this.goOneLevelDown.bind(this)}>
                    Jeg
                    <div style={{display:"none"}}>test
                        <div style={{display:"none"}}><span>test2</span>
                        </div></div></div>


                <div onMouseOut={this.goOneLevelDown.bind(this)} onClick={this.goOneLevelDown.bind(this)}>
                    Jeg
                    <div style={{display:"none"}}>test
                        <div style={{display:"none"}}><span>test2</span>
                        </div></div></div>

                <div onMouseOut={this.goOneLevelDown.bind(this)} onClick={this.goOneLevelDown.bind(this)}>
                    Jeg
                    <div style={{display:"none"}}>test
                        <div style={{display:"none"}}><span>test2</span>
                        </div></div></div>


            </div>

        )
    }
}

export default HoverTextEffect;