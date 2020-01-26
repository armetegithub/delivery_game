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

        // this.setDimensions();
        this.start()
        // this.drawStatics();

        // ; //Esto haría que apareciesen cuadrados cada x segundos


    },


    start() {

        this.reset();



        this.interval = setInterval(() => {

            this.clear();
            this.drawStatics();
            this.moveDeliver();




        }, 1000 / 60);
    },


    // drawAll() {


    //     this.draw();



    // },

    reset() {

        this.deliver = new Deliver(this.ctx, this.width, this.height);
        this.destiny = new Destiny(this.ctx, this.width, this.height);
        this.packet = new Packet(this.ctx, this.width, this.height);


    },

    drawStatics() {



        this.deliver.draw(this.ctx);
        this.destiny.draw(this.ctx);
        this.packet.draw(this.ctx);


        // this.deliver = new Deliver(this.ctx, this.width, this.height);
        // deliver.draw(this.ctx);

        // this.destiny = new Destiny(this.ctx, this.width, this.height);


        // this.packet = new Packet(this.ctx, this.width, this.height);


    },

    moveDeliver() {

        this.deliver.moveRight();


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