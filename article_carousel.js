let article_list = document.querySelector(".article_list"),
  wrap = document.querySelector(".wrap"),
  articles = document.querySelector(".article"),
  next = document.querySelector(".arrow_right"),
  pre = document.querySelector(".arrow_left"),
  articleWidth = articles.offsetWidth;

articleWidth = wrap.offsetWidth;

window.onresize = function () {
  articleWidth = wrap.offsetWidth;
};

function nextArticle() {
  article_list.scrollLeft = article_list.scrollLeft + articleWidth;
}
function preArticle() {
  article_list.scrollLeft = article_list.scrollLeft - articleWidth;
}
next.onclick = nextArticle;
pre.onclick = preArticle;
