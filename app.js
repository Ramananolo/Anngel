const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you more (my Anngel😂) ndre da aninao TAY 💔!";
  return(
    <div><div class="tenor-gif-embed" data-postid="21951867" data-share-method="host" data-aspect-ratio="0.778125" data-width="100%"><a href="https://tenor.com/view/diamondsonshine-onmyhotline-doja-cat-doja-gif-21951867">Diamondsonshine Onmyhotline GIF</a>from <a href="https://tenor.com/search/diamondsonshine-gifs">Diamondsonshine GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script></div>  
  )
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});