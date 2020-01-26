class Deliver {

    constructor(ctx, gameWidth, gameHeight) {
        this.ctx = ctx
        this.width = 30;
        this.height = 30;
        this.playerVel = 0.5;


        this.position = {



            x: Math.random() * (gameWidth - 0) + 0,
            y: Math.random() * (gameHeight - 0) + 0,
        }
    }

    draw(ctx) {

        ctx.fillStyle = '#321';
        ctx.fillRect(this.position.x, this.position.y, this.height, this.width);


    }

    moveRight() {

        this.position.x += this.playerVel;

    }

    moveLeft() {

    }

    moveUp() {

    }

    moveDown() {

    }
}