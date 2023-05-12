const fontSizeControl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeControl.addEventListener("input", onFontSizeChange);

function onFontSizeChange() {
  textEl.style.fontSize = `${fontSizeControl.value}px`;
}
