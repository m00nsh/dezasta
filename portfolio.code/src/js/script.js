// loading
$(function () {
  function end_loader() {
    $(".load").fadeOut(800);
  }
  $(window).on("load", function () {
    setTimeout(function () {
      end_loader();
    }, 2000);
  });
});

// hamburger

$(function () {
  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("open");
    $(".header-nav").fadeToggle();
  });
});

//

// スクロールするとhumの色変更
$(function () {
  $(window).on("scroll", function () {
    const sliderHeight = $(".page-kv").height();
    if (sliderHeight - 30 < $(this).scrollTop()) {
      $(".hamburger.other").addClass("hamColorScroll");
    } else {
      $(".hamburger.other").removeClass("hamColorScroll");
    }
  });
});

// mv g-sap
window.addEventListener("DOMContentLoaded", () => {
  gsap
    .timeline({ repeat: -1, repeatDelay: 0.5 })
    .from(".rect-1", { y: -32, opacity: 0, duration: 0.5 })
    .from(".rect-2", { y: 32, opacity: 0, duration: 0.5 })
    .from(".rect-3", { y: -32, opacity: 0, duration: 0.5 })
    .from(".rect-4", { y: 32, opacity: 0, duration: 0.5 })
    .from(".rect-5", { y: -32, opacity: 0, duration: 0.5 })
    .to(".rect-1", { y: -32, opacity: 0, duration: 0.5 }, "+=0.5")
    .to(".rect-2", { y: 32, opacity: 0, duration: 0.5 }, "-=0.4") // 0.4秒開始を早める
    .to(".rect-3", { y: -32, opacity: 0, duration: 0.5 }, "-=0.4")
    .to(".rect-4", { y: 32, opacity: 0, duration: 0.5 }, "-=0.4")
    .to(".rect-5", { y: -32, opacity: 0, duration: 0.5 }, "-=0.4");
});

// mv slide
// document.addEventListener("DOMContentLoaded", () => {
//   const figure = document.querySelector(".mv-img figure");
//   let currentRotation = 0; // 現在の回転角度
//   const rotationStep = 72; // 画像1枚分の回転角度（360度 / 画像の枚数）
//   const rotationInterval = 2000; // 自動回転の間隔（ミリ秒）

//   // 回転処理を実行する関数
//   function rotateSlider() {
//     currentRotation += rotationStep;
//     figure.style.transform = `rotateY(${currentRotation}deg)`;
//   }
//   // 自動回転を開始する
//   let autoRotate = setInterval(rotateSlider, rotationInterval);

//   // 自動回転をリセットする関数
//   function resetAutoRotate() {
//     clearInterval(autoRotate);
//     autoRotate = setInterval(rotateSlider, rotationInterval);
//   }
// });

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
// $(function () {
//   $(".js-filter").on("invert", function (event, isInView) {
//     if (isInView) {
//       $(this).addClass("invert");
//     } else {
//       $(this).removeClass("invert");
//     }
//   });
// });
