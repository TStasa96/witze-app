import "./style.scss";
import { getJoke } from "./fetch.js";

const loadJokeBtn = document.querySelector(".joke-box__btn--load");
const loadJokeText = document.querySelector(".joke-box__text");

loadJokeBtn.addEventListener("click", async () => {
  const data = await getJoke();
  console.log(data);
  loadJokeText.textContent = data[0].text; //weil das ein Obj ist navigieren wir mit punkten mit data.setup zur der zeile um die auszulesen
  localStorage.setItem("joke", JSON.stringify(data[0])); //das joke ist der key und data ist die value
});
