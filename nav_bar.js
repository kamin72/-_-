let nav = document.getElementById("nav"),
  fa_bars = document.getElementById("fa-bars"),
  fa_xmark = document.getElementById("fa-xmark");

function barDisplay() {
  if (window.innerWidth <= 767) {
    nav.style.visibility = "visible";
    fa_xmark.style.display = "block";
    fa_bars.style.visibility = "hidden";
  }
}
fa_bars.onclick = barDisplay;

function barHidden() {
  if (window.innerWidth <= 767) {
    nav.style.visibility = "hidden";
    fa_xmark.style.display = "none";
    fa_bars.style.visibility = "visible";
  }
}
fa_xmark.onclick = barHidden;
