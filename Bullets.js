class Bullets {
    width;
    height;
    x;
    y

    constructor(player) {
        this.width = 8;
        this.height = 2;
        this.x = player.x;
        this.y = player.y + player.height / 2;
    }

    update() {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    destroy() {
        this.x = -1
        this.y = -1
        this.width = 0;
        this.height = 0;
    }

}