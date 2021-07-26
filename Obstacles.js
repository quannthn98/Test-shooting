class Obstacles {
    width;
    height;
    x;
    y

    constructor() {
        this.width = 30;
        this.height = 30;
        this.x = canvas.width;
        this.y = Math.floor(Math.random() * canvas.height + 0)
    }

    update() {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    destroy() {
        this.width = 0;
        this.height = 0;
        this.x = -1;
        this.y = -1;
    }

}