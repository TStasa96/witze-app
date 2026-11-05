(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();async function e(){return await(await fetch(`https://witzapi.de/api/joke`)).json()}var t=document.querySelector(`.joke-box__btn--load`),n=document.querySelector(`.joke-box__text`),r=document.querySelector(`.joke-box__btn--archive`),i=document.querySelector(`.saved-jokes__list`);function a(){o().forEach(e=>{let t=`<div class="saved-joke">
            <div class="saved-joke__text">${e.text}</div>
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
          </div>`;i.insertAdjacentHTML(`afterbegin`,t)})}function o(){let e=[],t=localStorage.getItem(`archivedJokes`);return t&&(e=JSON.parse(t)),e}t.addEventListener(`click`,async()=>{let t=await e();console.log(t),n.textContent=t[0].text,localStorage.setItem(`jokeJson`,JSON.stringify(t[0]))}),r.addEventListener(`click`,c);function s(){let e=localStorage.getItem(`jokeJson`);return JSON.parse(e)}function c(){let e=document.querySelectorAll(`.saved-joke__text`),t=s(),n=!1;if(e.forEach(e=>{e.textContent===t.text&&(n=!0)}),n){alert(`Dieser Witz ist bereits gespeichert`);return}let r=o();if(r.push(t),localStorage.setItem(`archivedJokes`,JSON.stringify(r)),t&&t.text){let e=`<div class="saved-joke">
            <div class="saved-joke__text">${t.text}</div>
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
          </div>`;i.insertAdjacentHTML(`afterbegin`,e)}}a();function l(e){let t=o().filter(t=>t.text!==e);localStorage.setItem(`archivedJokes`,JSON.stringify(t))}i.addEventListener(`click`,e=>{let t=e.target.closest(`.saved-joke__remove`);if(t){let e=t.closest(`.saved-joke`),n=e.querySelector(`.saved-joke__text`).textContent;l(n),e.remove()}});