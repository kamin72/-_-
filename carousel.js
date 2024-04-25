//....banner輪播
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
        setTimeout(removeActive, 1000, slides[i]);
        break;
      }
      if (slides[i].classList.contains("active")) {
        setTimeout(removeActive, 3000, slides[i]);
        addActive(slides[i + 1]);
        break;
      }
    }
  }, 4000);
};
function textSwitch_capming() {
  var para = document.getElementById("paragraph");
  para.innerText =
    "科學體驗是通往科學殿堂的門鑰匙，是激發孩子探索求知慾的火種。透過親身體驗、動手操作，孩子們可以深入觀察、思考、分析，從而獲得寶貴的科學知識和技能。";
}
document.getElementById("camping").onclick = textSwitch_capming;
//....課程體驗
function textSwitch_exper() {
  var para = document.getElementById("paragraph");
  para.innerText =
    "專為兒童設計的一系列科學實驗課程，旨在激發孩子的科學興趣和探索精神。課程以趣味性、探索性和互動性為特色，讓孩子們在動手操作的過程中，親身體驗科學的奧秘。";
}
document.getElementById("exper").onclick = textSwitch_exper;

function textSwitch_competition() {
  var para = document.getElementById("paragraph");
  para.innerText =
    "科學專題競賽是青少年展現科學素養、激發創新潛能的重要平台。在競賽中，學生們將自主選擇研究課題，進行深入探究，並將研究成果以論文、演示、展板等形式呈現。";
}
document.getElementById("competition").onclick = textSwitch_competition;
//....最新消息
let prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  cards = document.querySelector(".active"),
  card_content = document.getElementById("card_content");

function nextCards() {
  let cardWidth = cards.offsetWidth;
  card_content.scrollLeft = card_content.scrollLeft + cardWidth + 10;
}
function preCards() {
  let cardWidth = cards.offsetWidth;
  card_content.scrollLeft = card_content.scrollLeft - cardWidth - 10;
}
prev.onclick = preCards;
next.onclick = nextCards;
