let nav = document.getElementById("nav"),
  fa_bars = document.getElementById("fa-bars"),
  fa_xmark = document.getElementById("fa-xmark");

function barHidden() {
  if (window.innerWidth <= 767 && nav.classList.contains("hidden")) {
    fa_xmark.style.display = "block";
    fa_bars.style.visibility = "hidden";
    nav.classList.remove("hidden");
  }
}
fa_bars.onclick = barHidden;

function barDisplay() {
  if (window.innerWidth <= 767) {
    fa_xmark.style.display = "none";
    fa_bars.style.visibility = "visible";
    nav.classList.add("hidden");
  }
}
fa_xmark.onclick = barDisplay;
