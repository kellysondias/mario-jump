const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const score = document.querySelector(".score");

console.log(score);

const jump = () => {
  const add = () => mario.classList.add("mario-jump");
  const remove = () => mario.classList.remove("mario-jump");
  const timeOut = 500;

  add();
  setTimeout(() => remove(), timeOut);
};

const interval = 10;

let points = 0;

const updateScore = () => (score.innerText = `Score: ${points}`);

updateScore();

const gameLoop = () => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = Number(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );

  const pipeCrash = 120;
  const marioCrash = 80;

  const scored = pipePosition <= pipeCrash && marioPosition > marioCrash;
  const gameOver =
    pipePosition <= pipeCrash && pipePosition > 0 && marioPosition < marioCrash;

  if (gameOver) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  } else if (scored) {
    points++;
  }

  updateScore();
};

const loop = setInterval(gameLoop, interval);

document.addEventListener("keydown", jump);
