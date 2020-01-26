/** @type HTMLCanvasElement */
/** @type CanvasRenderingContext2D */

const game = {

    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    FPS: 60,
    time: undefined,
    player: undefined,
    packet: undefined,
    obstacles: [],
    keys: {

        TOP: 38,
        RIGHT: 39,
        DOWN: 40,
        LEFT: 37,
    },

    init() {

        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.ctx = this.canvas.getContext("2d");
        this.width = window.innerWidth * 0.98;
        this.height = window.innerHeight * 0.98;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.setDimensions();
        this.drawAll();
        // this.start(); //Esto haría que apareciesen cuadrados cada x segundos


    },

    start() {

        this.interval = setInterval(() => {

            this.drawAll();


        }, 3000);
    },


    drawAll() {


        this.draw();



    },

    draw() {

        let deliver = new Deliver(this.width, this.height);
        deliver.draw(this.ctx);

        let destiny = new Destiny(this.width, this.height);
        destiny.draw(this.ctx);

        let packet = new Packet(this.width, this.height);
        packet.draw(this.ctx);

    },


    setDimensions() {

        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.setAttribute("width", `${this.width}px`);
        this.canvas.setAttribute("height", `${this.height}px`);



    },


    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },



}