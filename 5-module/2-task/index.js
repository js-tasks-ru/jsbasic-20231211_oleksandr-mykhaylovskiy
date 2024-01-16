function toggleText() {
  const btnHideToggle = document.querySelector(".toggle-text-button");
  const text = document.querySelector("#text");

  btnHideToggle.addEventListener('click', () => text.hidden = !text.hidden);
}
