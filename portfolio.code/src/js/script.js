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

$(window).on("load", function () {
  $(".js-box").fadeIn(1500);
});

// アコーディオン
$(function () {
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $(".answer-content .answer-accordion .accordion_header").click(function () {
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next(".accordion_inner").slideToggle();
    $(this).toggleClass("open");
    //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
    $(".answer-content .answer-accordion .accordion_header")
      .not($(this))
      .next(".answer-accordion .accordion_inner")
      .slideUp();
    $(".answer-content .answer-accordion .accordion_header")
      .not($(this))
      .removeClass("open");
  });
});

// スクロールしたら色が出る
$(function () {
  $(".js-filter").on("invert", function (event, isInView) {
    if (isInView) {
      $(this).addClass("invert");
    } else {
      $(this).removeClass("invert");
    }
  });
});
