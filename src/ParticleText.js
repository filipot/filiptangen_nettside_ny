/*Particle text by https://codepen.io/Gthibaud/*/

var utils = {
    norm: function (value, min, max) {
        return (value - min) / (max - min);
    },

    lerp: function (norm, min, max) {
        return (max - min) * norm + min;
    },

    map: function (value, sourceMin, sourceMax, destMin, destMax) {
        return utils.lerp(utils.norm(value, sourceMin, sourceMax), destMin, destMax);
    },

    clamp: function (value, min, max) {
        return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
    },

    distance: function (p0, p1) {
        var dx = p1.x2 - p0.x2,
            dy = p1.y2 - p0.y2;
        return Math.sqrt(dx * dx + dy * dy);
    },

    distanceXY: function (x0, y0, x1, y1) {
        var dx = x1 - x0,
            dy = y1 - y0;
        return Math.sqrt(dx * dx + dy * dy);
    },

    circleCollision: function (c0, c1) {
        return utils.distance(c0, c1) <= c0.radius + c1.radius;
    },

    circlePointCollision: function (x, y, circle) {
        return utils.distanceXY(x, y, circle.x2, circle.y2) < circle.radius;
    },

    pointInRect: function (x, y, rect) {
        return utils.inRange(x, rect.x2, rect.x2 + rect.radius) &&
            utils.inRange(y, rect.y2, rect.y2 + rect.radius);
    },

    inRange: function (value, min, max) {
        return value >= Math.min(min, max) && value <= Math.max(min, max);
    },

    rangeIntersect: function (min0, max0, min1, max1) {
        return Math.max(min0, max0) >= Math.min(min1, max1) &&
            Math.min(min0, max0) <= Math.max(min1, max1);
    },

    rectIntersect: function (r0, r1) {
        return utils.rangeIntersect(r0.x2, r0.x2 + r0.width, r1.x2, r1.x2 + r1.width) &&
            utils.rangeIntersect(r0.y2, r0.y2 + r0.height, r1.y2, r1.y2 + r1.height);
    },

    degreesToRads: function (degrees) {
        return degrees / 180 * Math.PI;
    },

    radsToDegrees: function (radians) {
        return radians * 180 / Math.PI;
    },

    randomRange: function (min, max) {
        return min + Math.random() * (max - min);
    },

    randomInt: function (min, max) {
        return min + Math.random() * (max - min + 1);
    },

    getmiddle: function (p0, p1) {
        var x = p0.x2,
            x2 = p1.x2;
        let middlex = (x + x2) / 2;
        var y = p0.y2,
            y2 = p1.y2;
        let middley = (y + y2) / 2;
        let pos = [middlex, middley];

        return pos;
    },

    getAngle: function (p0, p1) {
        var deltaX = p1.x2 - p0.x2;
        var deltaY = p1.y2 - p0.y2;
        var rad = Math.atan2(deltaY, deltaX);
        return rad;
    },
    inpercentW: function (size, W) {
        return (size * W) / 100;
    },

    inpercentH: function (size, H) {
        return (size * H) / 100;
    },

}

// basic setup  :)
export function renderText() {
    let canvas = document.getElementById("canvas");
    if(canvas === null){
        return;
    }
    var ctx = canvas.getContext('2d');
    var W = canvas.width = 970/*window.innerWidth*/ ;
    var H = canvas.height = 1007/*window.innerHeight*/ / 6;

    let gridX = 20;
    let gridY = 20;
    function shape(x, y, texte) {
        this.x = x;
        this.y = y;
        this.size = 120;

        this.text = texte;
        this.placement = [];
        this.vectors = [];

    }

    shape.prototype.getValue = function () {

        // Draw the shape :^)
/*
        ctx.textAlign = "center";
        ctx.font = "bold " + this.size + "px arial";
        ctx.fillText(this.text, this.x, this.y);


        var idata = ctx.getImageData(0, 0, W, H);

        var buffer32 = new Uint32Array(idata.data.buffer);*/

        var data = [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0],
                [0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];

        for (var y = 0; y < data.length; y += 1/*gridY*/) {
            for (var x = 0; x < data[y].length; x += 1/*gridX*/) {

                if(data[y][x] === 1){
                    this.placement.push(new particle(x * gridX, y * gridY));
                }
/*
                if (buffer32[y2 * W + x2]) {
                    string += "1";
                    this.placement.push(new particle(x2, y2));
                }
                else{
                    string += "0"
                }*/

            }
            //string +="\n";

        }/*
        console.log(string);*/
        ctx.clearRect(0, 0, W, H);

    }
    let colors = [
'#e6a340'
        /*
        '#FF7F50','#FF6347'*/
        /*'#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', */

        /*'#FFC107','#FF9800',
        '#FF5722'*/
    ];

    function particle(x, y, type) {
        this.radius = 1.1;
        this.futurRadius = utils.randomInt(radius, radius + 3);


        this.rebond = utils.randomInt(1, 5);
        this.x = x;
        this.y = y;



        this.dying = false;

        this.base = [x, y];

        this.vx = 0;
        this.vy = 0;
        this.type = type;
        this.friction = .99;
        this.gravity = gravity;
        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.getSpeed = function () {
            return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        };

        this.setSpeed = function (speed) {
            var heading = this.getHeading();
            this.vx = Math.cos(heading) * speed;
            this.vy = Math.sin(heading) * speed;
        };

        this.getHeading = function () {
            return Math.atan2(this.vy, this.vx);
        };

        this.setHeading = function (heading) {
            var speed = this.getSpeed();
            this.vx = Math.cos(heading) * speed;
            this.vy = Math.sin(heading) * speed;
        };

        this.angleTo = function (p2) {
            return Math.atan2(p2.y2 - this.y2, p2.x2 - this.x2);

        };

        this.update = function (heading) {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += gravity;

            this.vx *= this.friction;
            this.vy *= this.friction;

            if (this.radius < this.futurRadius && this.dying === false) {
                this.radius += duration;
            } else {
                this.dying = true;
            }

            if (this.dying === true) {
                this.radius -= duration;


            }


            ctx.beginPath();

            ctx.fillStyle = this.color;

            ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
            ctx.fill();
            ctx.closePath();

            if (this.y2 < 0 || this.radius < minradius) {
                this.x = this.base[0];
                this.dying = false;
                this.y = this.base[1];
                this.radius = minradius + 0.1;
                this.setSpeed(speed);
                this.futurRadius = utils.randomInt(radius, radius + 3);
                this.setHeading(utils.randomInt(utils.degreesToRads(0), utils.degreesToRads(360)));
            }

        };

        this.setSpeed(utils.randomInt(.1, .5));
        this.setHeading(utils.randomInt(utils.degreesToRads(0), utils.degreesToRads(360)));

    }

    /*
    element2 = document.getElementById("2");

    element3 = document.getElementById("3");

    element4 = document.getElementById("4");

    element5 = document.getElementById("5");

    element6 = document.getElementById("6");
    */
    let fieldvalue = "Filip Tangen";
    /*let gravity = -0.03;
    */
    let gravity=0;
    let duration = 0.5;
    let speed = 0;
    //let minradius = 6.0;
  /*  let radius = 8;
*/
  let minradius=6.0;
  let radius=4.0;

    var message = new shape(W / 2, H / 2 + 50, fieldvalue);

    message.getValue();

    update();

    function change() {
        ctx.clearRect(0, 0, W, H);

            //FgridX = parseFloat(element4.value);
            //gridY = parseFloat(element4.value);
        message.placement = [];
        message.text = fieldvalue.value;
        message.getValue();
    }

    /*
    function changeV() {
        gravity = parseFloat(element2.value);
        duration = parseFloat(element3.value);
        speed = parseFloat(element5.value);
        radius = parseFloat(element6.value);
    }*/

    var fps = 8;

    function update() {
        setTimeout(function () {
            ctx.clearRect(0, 0, W, H);


            for (var i = 0; i < message.placement.length; i++) {
                message.placement[i].update();
            }

            requestAnimationFrame(update);
        }, 1000 / fps);
    }
}