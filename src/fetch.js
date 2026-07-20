const API_ENDPOINT = "https://witzeapi.de/api/joke";

export async function getJoke() {
  const response = await fetch("https://witzeapi.de/api/joke");
  const data = await response.json;
  return data;
}

/*loadJokeBtn.addEventListener("click", async () => {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  console.log(data);

  loadJokeText.textContent = `${data.setup} - ${data.punchline}`; //weil das ein Obj ist navigieren wir mit punkten mit data.setup zur der zeile um die auszulesen
  localStorage.setItem("joke", JSON.stringify(data)); //das joke ist das key und data ist die value
});

const loadedJoke = localStorage.getItem("joke");
*/
