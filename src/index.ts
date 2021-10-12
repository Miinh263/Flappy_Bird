import "./css/index.css";

var canvas = <HTMLCanvasElement>document.getElementById("bird");
var ctx = canvas.getContext("2d");

var bird = new Image();
var back_ground = new Image();
var above = new Image();
var below = new Image();
var play = new Image();

bird.src = "../src/images/bird.png";
back_ground.src = "../src/images/nenchinh.png";
above.src = "../src/images/ongtren.png";
below.src = "../src/images/ongduoi.png";
play.src = "../src/images/buttonplay.png";
//
var score = 0;
var distance = 100;
var distance_to_below;
//đối tượng bird
let bird_ob = {
  x: 400,
  y: 200,
};

//
//xét giá trị a cho vật dừng hoặc di chuyển a==1 di chuyển, a== 0 dừng:
let a = 1;
let b = 0;

var pipes = new Array();
pipes[0] = canvas.width;

function barrier(): void {
  for (var i = 0; i < pipes.length; i++) {
    distance_to_below = above.height + distance;

    ctx.drawImage(above, pipes[i], 0);
    ctx.drawImage(below, pipes[i], distance_to_below);

    //cột di chuyển
    if (a == 1) {
      pipes[i] -= 5;
    }

    // thêm cột mới
    if (pipes[i] == 450) {
      //location.push(canvas.width);
      // location.push(Math.floor(Math.random() * above.height) - above.height);

      pipes.push(canvas.width);
    }

    //vượt qua ko va chạm
    if (
      pipes[i] == bird_ob.x &&
      bird_ob.y > above.height &&
      bird_ob.y < above.height + distance
    )
      score++;

    //va chạm cột trên
    if (pipes[i] == bird_ob.x && bird_ob.y <= above.height) {
      {
        a = 0; //dừng vật
        modal.style.display = "block";
        document.getElementById("score_game").innerHTML = "score : " + score;
      }
    }
    //va chạm cột dưới
    if (pipes[i] == bird_ob.x && bird_ob.y >= distance_to_below) {
      {
        a = 0;
        modal.style.display = "block";
        document.getElementById("score_game").innerHTML = "score : " + score;
      }
    }

    //xử lý chim chạm xuống đất
    if (bird_ob.y >= 480) {
      {
        a = 0;
        modal.style.display = "block";
        document.getElementById("score_game").innerHTML = "score : " + score;
      }
    }
  }
}

//

back_ground.onload = function () {
  ctx.drawImage(back_ground, 0, 0);
  ctx.drawImage(bird, bird_ob.x, bird_ob.y);
  ctx.drawImage(play, bird_ob.x - 90, bird_ob.y + 70);
};

function run(): void {
  //vẽ nền & chim

  ctx.drawImage(back_ground, 0, 0);
  ctx.drawImage(bird, bird_ob.x, bird_ob.y);

  // xử lý va chạm
  barrier();

  //chim rơi xuống
  if (a == 1) {
    bird_ob.y += 2;
  }
  requestAnimationFrame(run);
}

//xử lý nút play
document.onclick = function () {
  run();
};
//run();

document.addEventListener("keydown", function () {
  bird_ob.y -= 40;
});

var modal = document.getElementById("myModal");
// xử lý nút play_again
document.getElementById("play_again").onclick = function () {
  modal.style.display = "none";
};
