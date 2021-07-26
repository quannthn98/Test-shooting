let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let player = []
let obstacles = [];
let bullets = [];

let myGameArea = {
    width: canvas.width,
    height: canvas.height,

    start: function () {
        this.intervalObstacles = setInterval(createNewObstacles, 1200);
        // this.intervalBullets = setInterval(fireBullets, 100);
        this.interval = setInterval(updateGame, 20);
        this.intervalOfDetectObstacles = setInterval(detectObstacles, 200)
    },

    clear: function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    },

    stop: function () {
        clearInterval(this.intervalObstacles);
        clearInterval(this.interval);
        // clearInterval(this.intervalBullets);
        alert('Game over');
    }
}

function startGame() {
    myGameArea.clear();
    player.push(new Players(30, 30, 50, 50));
    obstacles.push(new Obstacles());
    myGameArea.start();

}

function updateGame() {
    checkBulletHit()
    myGameArea.clear();
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].x -= 2;
        obstacles[i].update()
    }
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].x += 8
        bullets[i].update();
    }
    for (let i = 0; i < player.length; i++) {
        player[i].update();
    }

    checkCrash();
}

function createNewObstacles() {
    obstacles.push(new Obstacles())
    obstacles.push(new Obstacles())
}

function fireBullets(player) {
    bullets.push(new Bullets(player));
}

function checkCrash() {
    for (let i = 0; i < obstacles.length; i++) {
        if (((player.x + player.width) > obstacles[i].x && player.x < (obstacles[i].x + obstacles[i].width)) && ((player.y + player.height) > obstacles[i].y && player.y < (obstacles[i].y + obstacles[i].height))) {
            myGameArea.stop();
        }
    }

}

function checkBulletHit() {
    for (let j = 0; j < obstacles.length; j++) {
        for (let i = 0; i < bullets.length; i++) {
            if (bullets[i].x > obstacles[j].x && bullets[i].x < obstacles[j].x + obstacles[j].width && bullets[i].y > obstacles[j].y && bullets[i].y < obstacles[j].y + obstacles[j].height) {
                obstacles[j].destroy();
                bullets[i].destroy();
            }
        }
    }
}

function detectObstacles() {
    for (let i = 0; i < obstacles.length; i++) {
        for (let j = 0; j < player.length; j++) {
            if (player[j].y + player[j].height / 2 >= obstacles[i].y && player[j].y <= obstacles[i].y + obstacles[i].height) {
                fireBullets(player[j]);
                break;
            }
        }
    }
}

function placeNewPlayer(x, y) {
    player.push(new Players(x, y));
}

canvas.addEventListener('click', function (e) {
    console.log('click: ' + e.offsetX + '/' + e.offsetY)
    placeNewPlayer(e.offsetX, e.offsetY);
}, false);

startGame();
