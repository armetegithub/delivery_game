class Destiny extends Deliver {

    constructor(gameWidth, gameHeight) {

        super(gameWidth, gameHeight);

        this.width = 30;
        this.height = 30;

        this.position = {

            x: gameWidth * Math.random() - 30,
            y: gameHeight * Math.random() - 30,
        }

    }
    draw(ctx) {

        ctx.fillStyle = '#327';
        ctx.fillRect(this.position.x, this.position.y, this.height, this.width);


    }
}