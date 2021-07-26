class Players {
    width;
    height;
    x;
    y
    speed

    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = 30;
        this.height = 30;
        this.speed = 5;
    }

    update() {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }


}

