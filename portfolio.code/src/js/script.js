// hamburger

$(function () {
  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("open");
    $(".header-nav").fadeToggle();
  });
});

// fade in

$(function () {
  // ウインドウをスクロールしたら
  $(window).scroll(function () {
    // .js-fadeのクラスを持つ要素（それぞれに対して）
    $(".js-fade,.js-fade-side").each(function () {
      // この要素のスクロール位置（上から）
      var pos = $(this).offset().top;
      // ウインドウのスクロール量（上から）
      var scroll = $(window).scrollTop();
      // ウインドウの縦幅
      var windowHeight = $(window).height();
      // ウインドウのスクロール量（上から）が
      // この要素のスクロール位置 - ウインドウの縦幅 + 100pxより大きい場合
      if (scroll > pos - windowHeight + 100) {
        // .scrollというクラス.js-fadeに付与する
        $(this).addClass("scroll");
      }
    });
  });
});
