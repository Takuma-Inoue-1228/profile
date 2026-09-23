// ページ内スクロールはCSSの scroll-behavior と scroll-margin-top に任せる
// （固定ヘッダー分の位置合わせがページ遷移時と揃うため）

// ページトップ
document.getElementById("js-page-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
