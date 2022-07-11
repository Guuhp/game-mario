const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const butt = document.querySelector(".butt");

const imagem = document.getElementsByTagName("img")[2];
const start = () => {
  //adiciona a class dark-mode nas tag
  imagem.classList.toggle(pipeanime);
  /* h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass); */
};

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

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "/images/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);

const pipeanime = "pipe-anime";
