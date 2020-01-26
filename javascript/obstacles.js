class Obstacle {

    consturctor(ctx, gameWidth, gameHeight) {

        this.ctx = ctx
        this.width = 30;
        this.height = 30;
        this.playerVel = 5;


        this.position = {



            x: Math.random() * (gameWidth - 60) + 60,
            y: Math.random() * (gameHeight - 60) + 60,
        }
    }

    // draw(ctx) {

    //     ctx.fillStyle = "#000000";
    //     ctx.beginPath();
    //     ctx.arc(this.position.x, this.position.y, 15, 0, Math.PI * 2, true);
    //     ctx.closePath();
    //     ctx.fill();


    //     var angle = 45;
    //     var radians = angle * Math.PI / 180;
    //     this.position.x = Math.cos(radians) * speed;
    //     this.position.y = Math.sin(radians) * speed;

    //     if (this.position.x > this.gameWidth) {
    //         this.position.x = this.gameWidth - 60;
    //     }
    //     if (this.position.y > this.gameHeight) {
    //         this.position.y = this.gameHeight + 60;
    //     }


    // }


}