class Deliver {

    constructor(gameWidth, gameHeight) {

        this.width = 30;
        this.height = 30;

        this.position = {

            x: gameWidth * Math.random(),
            y: gameHeight * Math.random()
        }
    }

    draw(ctx) {

        ctx.fillStyle = '#321';
        ctx.fillRect(this.position.x, this.position.y, this.height, this.width);


    }

    moveRight() {

    }

    moveLeft() {

    }

    moveUp() {

    }

    moveDown() {

    }
}