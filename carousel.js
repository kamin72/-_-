window.onload = function carousel() {
  let slides = document.getElementsByClassName("carousel-item");
  //將要播放的slide加上"active"的標記
  function addActive(slide) {
    slide.classList.add("active");
  }

  function removeActive(slide) {
    slide.classList.remove("active");
  }

  addActive(slides[0]);
  //設定輪播間隔
  setInterval(function () {
    for (let i = 0; i < slides.length; i++) {
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        setTimeout(removeActive, 3000, slides[i]);
        break;
      }
      if (slides[i].classList.contains("active")) {
        setTimeout(removeActive, 3000, slides[i]);
        addActive(slides[i + 1]);
        break;
      }
    }
  }, 3000);
};
