/*Made by Filip Tangen*/
import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

class TextSpasm extends Component {
    /*Create a textspasm with all the text in this class, so that this.state only has to be set ONCE per frame*/


    constructor(props) {
        super(props);


        let text = ["git push --force","IndexOutOfBounds","Undefined","'2' + - '1'","Monitor not found","404", "500","01001000 01101001","<h1>Hello, world</h1>", "See Sharp", "everything > eclipse", "Have you tried turning your computer on and off?",
        "delete system32", "!false", "Thread_sleep(1) //take a break",
        "{[{'',${p}}],[{t:a}]}",
        "// do not remove this comment.",
        "console.log > debugging",
        "()=>*$2",
        "/* please work */",
        "Singelton: THERE CAN ONLY BE ONE ",
        "OOPS: child died",
            "0 - 1 = nuclear gandhi",
        "I use arch btw",
        "error: Success",
        "Keyboard not found. Press F1 to Resume",
        "A team of highly trained monkeys has been dispatch to deal with this application",
        "Printing is not supported on this printer.",
        "Your browser does not support HTML",
        ":3",
        "(1.0 + 1.0 === 2.0) -> FALSE",
        "OK.  PRESS OK TO CONTINUE",
        "Broken strings",
        "INCONVENIENCE",
        "reddit.com/r/softwaregore",
        "144p",
        "2,147,483,647",
        "Password is used by another user",
        "best practice is to use foo",
        "Stackoverflow <3",
        "hackerman",
        "4 8 15 16 23 42",
        "dead: true"];

        this.state={text:text};
        this.state = {
            list: this.genList(),
            width: window.innerWidth, height: window.innerHeight,
            text:text,
            amount : this.props.amount,
            text_id: Math.floor(Math.random() * text.length),
            scrollY:0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    genElement(){

        let rand1 = 0.0 + Math.random() * (1 - 0.0);
        let rand2 = 0.0 + Math.random() * (1 - 0.0);
        let text_id = this.state.text_id;
        text_id = text_id + 1;
        if(text_id === this.state.text.length){
            text_id = 0;
        }
        this.state.text_id = text_id;
        rand1 = (Math.floor(rand1 * 200) / 200) - 0.5;
        rand2 = (Math.floor(rand2 * 200) / 200) - 0.5;

        let rand3 = 0 + Math.random() * (window.innerWidth - 0);
        let rand4 = 0 + Math.random() * (window.innerHeight - 0);
        return {x:rand3,y:rand4,dirX:rand1,dirY:rand2,text:this.state.text[text_id],opacity:1, width:0, height:0, dead:false};
    }

    genList(){
        let list = [];
        for (let i = 0; i < this.state.amount; i++) {
            let e = this.genElement(this.state.text);
            list.push(e);

        }
        return list;
    }


    componentDidMount() {


        // Create a <style> element. You can use an existing one as well.
        const style = document.createElement("style");
        document.head.appendChild(style);
        // Insert a CSS Rule to the sheet at position 0.
        style.sheet.insertRule(".my-button {color: red}", 0);


        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        window.addEventListener("click", this.handleClick.bind(this));


        this.interval = setInterval(this.frame, 20);
    }

    componentWillUnmount() {
        clearInterval(this.interval);


        window.removeEventListener('resize', this.updateWindowDimensions);
        window.removeEventListener("click", this.handleClick.bind(this));
    }



    updateWindowDimensions() {
        if(this.state.list === undefined){
            this.setState({list:this.genList()});
        }
        let newWidth = window.innerWidth;
        let newHeight = window.innerHeight;

        let list = this.state.list;
        for (let i = 0; i < this.state.amount; i++) {
            if(list[i] === undefined){
                continue;
            }

            let newX = list[i].x * (newWidth / this.state.width);
            let newY = list[i].y * (newHeight / this.state.height);

            list[i].x= newX;
            list[i].y = newY;
        }

        this.state.list = list;
        this.state.height = newHeight;
        this.state.width = newWidth;
        this.updateStyles();
/*
        this.setState(
            {
                list,
                width: newWidth,
                height: newHeight
            }
        );*/
    }


    frame = () => {
        if(this.state.list === undefined){
            this.setState({list:this.genList()});
        }
        let list = this.state.list;
        const W = this.state.width;
        const H = this.state.height;
        for (let i = 0; i < this.state.amount; i++) {
            //let speed = this.props.speed;
            if(list[i] === undefined){
                continue;
            }
            let newX = list[i].x;
            let newY = list[i].y;
            if (isNaN(newX)) {
                newX = 0.1;
            }
            if (isNaN(newY)) {
                newY = 0.1;
            }


            let newdirX = list[i].dirX;
            let newdirY = list[i].dirY;




            if (newX < 0 || newX > W-list[i].width*1.1) {
                if (newX < 0) {
                    newX = 0;
                    newdirX = Math.abs(newdirX);
                } else {
                    newX = W-list[i].width*1.1;
                    newdirX = -Math.abs(newdirX);
                }
            }
            if (newY < 0 || newY > H - list[i].height * 0.9) {
                if (newY < 0) {
                    newY = 0;
                    newdirY = Math.abs(newdirY);
                } else {
                    newY =  H - list[i].height * 0.9;
                    newdirY = -Math.abs(newdirY);
                }
            }


            newX = newX + (newdirX * this.props.speed);
            newY = newY + (newdirY * this.props.speed);


            list[i].x = newX;
            list[i].y = newY;
            list[i].dirX = newdirX;
            list[i].dirY = newdirY;
            list[i].opacity = list[i].opacity - 0.005;

            if(list[i].opacity <= 0 && list[i].opacity > -50){
                list[i].dead = true;
            }
        }
        this.state.list = list;
        this.updateStyles();
/*
        this.setState({
            list
        });*/

    };

    updateStyles(){
        let element = document.getElementById("textspasm").children;
        for (let i = 0; i < this.state.amount; i ++){
            if(element[i] === undefined){
                continue;
            }
            if(this.state.list[i].dead === true){
                if(element[i].style.display === "none"){
                    continue;
                }
                element[i].style = null;
                element[i].style.display = "none";
                continue;
            }




            element[i].style.position = 'fixed';
            element[i].style.willChange = "transform";
            element[i].style.transform = "translate(" + this.state.list[i].x + "px" + "," + this.state.list[i].y + "px)";
            //element[i].style.color = "#FF7F50";
            element[i].style.color = "#FFF";
            element[i].style.display = "block";
            element[i].style.cursor = "default";
            element[i].style.userSelect = "none";
            element[i].style.zIndex="-500";
            element[i].style.opacity = this.state.list[i].opacity;

            this.state.list[i].width = element[i].offsetWidth;
            this.state.list[i].height = element[i].offsetHeight;
            if(this.state.list[i].opacity < -999){
                this.state.list[i].x -= this.state.list[i].width / 2;
                this.state.list[i].opacity = 1;
            }

            /*element[i].style.left = this.state.list[i].x + "px";
            element[i].style.top = this.state.list[i].y + "px";*/
            /*
            let style = element[i];
            style.position = "absolute";
            style.left = this.state.list[i].x + "px";
            style.top = this.state.list[i].y + "px";
            element[i].style = style;*/
        }
    }



    handleClick(e){
        for(let i = 0; i < 3; i ++){


        let x = e.clientX;
        let y = e.clientY;
        let list = this.state.list;
        let t = this.genElement();
        t.x = x+ (t.dirX * 50);
        t.y = y + (t.dirY * 100);
        t.opacity = -999;
        list.push(t);
        let amount = this.state.amount + 1;
        this.setState({list:list,amount:amount});
        }
    }


render() {

        return (
            <div style={{position:"fixed", height:"100vh", width:"100vw"}}  id="textspasm">
                {this.state.list.map((item,i) => <div style={{display:"none"}} key={i}>
                    <p key={i}>{this.state.list[i].text}</p>
                </div>




            )}
            </div>

        )
    }
}

export default TextSpasm;