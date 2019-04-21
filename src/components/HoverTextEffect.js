
import React, {Component} from 'react';

class HoverTextEffect extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        setTimeout(()=>{this.shake()},2000);
    }

    shake(){
            let elements = document.getElementsByClassName("shakeable");
            let rand = Math.floor(Math.random() * elements.length);
            let e = elements.item(rand);
            if(e === null){
                return;
            }
            let oldClassName = e.className;
            e.className += " shake";
            setTimeout(()=>{
                e.className = oldClassName;
            }, 300);
    }

    componentWillUnmount(){
    }



    handleElement(element){

        if(!element){
            return;
        }
        if(element.id === "last"){
            return;
        }

        if(element.parentNode === null){
            return;
        }

        let children = element.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            element.parentNode.insertBefore(child.cloneNode(true),
                element);
        }

        children = element.parentNode.children;
        console.log(children);
        for (let i = 0; i < children.length; i++) {
            console.log(i);
            let child = children[i];
            if(child === undefined){
                continue;
            }
            if(!(child.tagName === "SPAN")){
                continue;
            }
            child.style.display = "inline-block";
            child.addEventListener("mouseleave", (e)=>{
                e.currentTarget.addEventListener("mouseenter", (e)=>{this.goOneLevelDown(e)});
            });

            child.addEventListener("click", (e)=>{this.goOneLevelDown(e)});

            child.className="hover-effect-text m-1";
            if(child.id !== "last"){
                child.className += " shakeable";
            }
        }

        setTimeout(()=>{this.shake()},1000);

        element.parentNode.removeChild(element);
    }



    goOneLevelDown(e){
        let element = e.currentTarget;
        if(!element.firstChild){
            return;
        }

        /*Removes the parent but keeps the children*/
        this.handleElement(element);

    }


    render() {
        return (
            <h2 className="dropdown-shadow">

                <span id="last" className="hover-effect-text m-1" onMouseEnter={this.goOneLevelDown.bind(this)} onClick={this.goOneLevelDown.bind(this)}>
                    Jeg
                </span>



                <span className="hover-effect-text m-1 d-inline-block shakeable"  onMouseEnter={this.goOneLevelDown.bind(this)} onClick={this.goOneLevelDown.bind(this)}>
                    er en fullstack-utvikler


                    <span style={{display:"none"}}>tror på
                        <span style={{display:"none"}}>elsker
                            <span style={{display:"none"}}>digger
                                <span style={{display:"none"}}>	&lt;3
                                    <span style={{display:"none"}}>er glad i
                                        <span style={{display:"none"}}>finner glede i
                                            <span style={{display:"none"}}>setter pris på
                                                <span style={{display:"none"}}>ønsker
                                                    <span id="last" style={{display:"none"}}>interessert i
                        </span>
                        </span>
                        </span>
                        </span>
                        </span>
                        </span>
                        </span>
                        </span></span>

                    <span style={{display:"none"}}>innovasjon
                        <span style={{display:"none"}}>trening
                            <span style={{display:"none"}}>miljøet
                                <span style={{display:"none"}}>å være rundt folk
                                    <span style={{display:"none"}}>å møte nye personer
                                        <span style={{display:"none"}}>å designe
                                            <span style={{display:"none"}}>å være en hjelpende hånd
                                                <span style={{display:"none"}}>å lære
                                                    <span style={{display:"none"}}>å være kreativ
                                                        <span style={{display:"none"}}>å lage ting
                                                            <span style={{display:"none"}}>å være positiv
                                                                <span id="last" style={{display:"none"}}>alt
                        </span>
                        </span>
                        </span>
                        </span>
                        </span>
                        </span>
                        </span>
                        </span>
                        </span>
                        </span>
                        </span></span>

                </span>






            </h2>

        )
    }
}

export default HoverTextEffect;