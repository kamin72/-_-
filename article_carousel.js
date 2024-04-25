let article_list = document.querySelector(".article_list"),
  article = document.querySelector(".article"),
  next = document.querySelector(".arrow_right"),
  pre = document.querySelector(".arrow_left");

function nextArticle() {
  let articleWidth = article.offsetWidth;
  article_list.scrollLeft = article_list.scrollLeft + articleWidth + 40;
}
function preArticle() {
  let articleWidth = article.offsetWidth;
  article_list.scrollLeft = article_list.scrollLeft - articleWidth - 40;
}
next.onclick = nextArticle;
pre.onclick = preArticle;
