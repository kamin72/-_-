let article_list = document.querySelector(".article_list"),
  container = document.querySelector(".ex_container"),
  articles = document.querySelector(".article"),
  next = document.querySelector(".arrow_right"),
  pre = document.querySelector(".arrow_left"),
  articleWidth = articles.offsetWidth;

function nextArticle() {
  article_list.scrollLeft = article_list.scrollLeft + articleWidth;
}
function preArticle() {
  article_list.scrollLeft = article_list.scrollLeft - articleWidth;
}
next.onclick = nextArticle;
pre.onclick = preArticle;
