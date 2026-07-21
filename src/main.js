import "./style.scss";
import { getJoke } from "./fetch.js";

const loadJokeBtn = document.querySelector(".joke-box__btn--load");
const loadJokeText = document.querySelector(".joke-box__text");
const saveArchivJoke = document.querySelector(".joke-box__btn--archive");
const jokeArea = document.querySelector(".saved-jokes__list");

loadJokeBtn.addEventListener("click", async () => {
  const data = await getJoke();
  console.log(data);
  loadJokeText.textContent = data[0].text; //weil das ein Obj ist navigieren wir mit punkten mit data.setup zur der zeile um die auszulesen
  localStorage.setItem("joke", JSON.stringify(data[0])); //das joke ist der key und data ist die value
});

saveArchivJoke.addEventListener("click", saveArchivJokeFunc);

function localJoke() {
  const storeageJoke = localStorage.getItem("joke");
  const archivJoke = JSON.parse(storeageJoke);
  return archivJoke;
}

function saveArchivJokeFunc() {
  const joke = localJoke();
  if (joke && joke.text) {
    // checken ob das objekt schon da ist, dann erstellen das HTML element
    const jokeAreaEle = `<div class="saved-joke">
            <div class="saved-joke__text">${joke.text}</div>
            <button class="saved-joke__remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="saved-joke__remove-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
                />
              </svg>
            </button>
          </div>`;
    jokeArea.insertAdjacentHTML("afterbegin", jokeAreaEle);
  }
}

/*jetzt habe ich die localJoke funtkion einiger massen geschrieben und
-jetzt will ich die daten in das HTML anzeigen sobald ich auf den button klicke "Witze speichern" fertig-
- diese sollen in gespeicherte witze angezeigt werden fertig-
-es auch soll geprüft werden ob da ein witz schon drin ist und somit nicht doppelt gespeichert werden kann-
-der witz soll beim neuladen der Seite nich verschwinden-
- und der witze speichern button soll erst kommen, wenn ein witz geladen worden ist*/
