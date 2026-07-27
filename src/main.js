import "./style.scss";
import { getJoke } from "./fetch.js";

const loadJokeBtn = document.querySelector(".joke-box__btn--load");
const loadJokeText = document.querySelector(".joke-box__text");
const saveArchivJokeBtn = document.querySelector(".joke-box__btn--archive");
const jokeAreaList = document.querySelector(".saved-jokes__list");

function getArchivedJokes() {
  let jokeArray = [];
  let getJoke = localStorage.getItem("jokeJson");
  if (getJoke) {
    /*in Js gilt is eine Variable gefüllt und wird mit einem If abgefragt dann ist sie true, wenn nix drin ist dann ist die if abfrage leer also null und somit wird der if block nicht ausgeführt*/
    jokeArray = JSON.parse(getJoke);
  }
  return jokeArray;
}

loadJokeBtn.addEventListener("click", async () => {
  const data = await getJoke();
  console.log(data);
  loadJokeText.textContent = data[0].text; //weil das ein Obj ist navigieren wir mit punkten mit data.setup zur der zeile um die auszulesen
  localStorage.setItem("jokeJson", JSON.stringify(data[0])); //der joke ist der key und data ist die value wir wandeln die um in ein JSON format für Localstorage
});

saveArchivJokeBtn.addEventListener("click", saveArchivJokeFunc);

function localJoke() {
  const storeageJoke = localStorage.getItem("jokeJson");
  const archivJoke = JSON.parse(storeageJoke);
  return archivJoke;
}

function saveArchivJokeFunc() {
  const jokeDouble = document.querySelectorAll(".saved-joke__text");
  const joke = localJoke();
  let isDouble = false; /*hier sagen wir haben noch kein witz gefunden also ist das alles unwahr */

  jokeDouble.forEach((element) => {
    if (element.textContent === joke.text) isDouble = true; //textContent schaut zwischen den Tags der vom queryselector ausgeäwhlt worden ist im HTML
  });
  /*wir vergleichen jetzt in der schleife mit aus HTML--> const jokeDouble = document.querySelectorAll(".saved-joke__text"); und mit
    joke.text aus dem LocalStorage, wenn die If bedinung wahr wird dann wird isDouble auf true gestzt und somit wird unten die if bedienung isDouble auf wahr
    gesetzt und somit wird der alert ausgelöst und das return im codeblock automatisch gestartet was die Funktion zum stopp bringt */

  if (isDouble) {
    alert("Dieser Witz ist bereits gespeichert");
    return; /*das Return hält die ganze funktion an wenn isDouble auf true gestzt wird somit ist das If wahr und die Funktion gibt ein alert aus */
  }

  const jokeArray = getArchivedJokes();
  jokeArray.push(joke);
  localStorage.setItem("archivedJokes", JSON.stringify(jokeArray));

  if (joke && joke.text) {
    // checken ob das objekt schon da ist und der Text im objekt falls beides zutrifft dann läuft es weiter
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
    jokeAreaList.insertAdjacentHTML("afterbegin", jokeAreaEle);
  }
}

/*jetzt habe ich die localJoke funtkion einiger massen geschrieben und
-jetzt will ich die daten in das HTML liste anzeigen sobald ich auf den button klicke "Witze speichern" -fertig-
- diese sollen in gespeicherte witze angezeigt werden -fertig-
- und es auch soll geprüft werden ob da ein witz schon drin ist und somit nicht doppelt gespeichert werden kann-fertig-


- der witz soll beim neuladen der Seite nich verschwinden-
- und der witze speichern button soll erst kommen, wenn ein witz geladen worden ist-
- der witz soll gelöscht werden über den button neben den gespeicherten witz*/
