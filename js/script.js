$(function () {

  // ページ内スクロールはCSSの scroll-behavior と scroll-margin-top に任せる
  // （固定ヘッダー分の位置合わせがページ遷移時と揃うため）

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});
