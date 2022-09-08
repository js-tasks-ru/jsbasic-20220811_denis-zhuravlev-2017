function toggleText() {
  let btn = document.querySelector(`.toggle-text-button`);
  let text = document.querySelector(`#text`);
  function toggleClick () {
    text.toggleAttribute(`hidden`);
  }
  btn.addEventListener(`click`, toggleClick)
}
