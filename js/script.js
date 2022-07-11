const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 700);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  /* pegando a posição do mario 
  formatando para numero tirando o px
  O + CONVERTE STRING PARA NUMERO*/
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  console.log(marioPosition);
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 95) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
  }
}, 10);

document.addEventListener("keydown", jump);
