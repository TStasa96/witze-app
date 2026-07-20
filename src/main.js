import "./style.scss";
import { getJoke } from "./fetch.js";

const loadJokeBtn = document.querySelector(".joke-box__btn--load");
const loadJokeText = document.querySelector(".joke-box__text");

loadJokeBtn.addEventListener("click", async () => {
  const data = await getJoke();
  loadJokeText.textContent = `${data.setup} - ${data.punchline}`; //weil das ein Obj ist navigieren wir mit punkten mit data.setup zur der zeile um die auszulesen
  localStorage.setItem("joke", JSON.stringify(data)); //das joke ist der key und data ist die value
});
