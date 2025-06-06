// ====================
//ローディング
// ====================
document.body.classList.add("loading");

window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.querySelector(".loading__wrapper");
    if (loader) {
      loader.classList.add("fade-out");

      loader.addEventListener(
        "transitionend",
        function () {
          loader.style.display = "none";
          document.body.classList.remove("loading"); // ←ここでスクロール解除！
        },
        { once: true }
      );
    }
  }, 2800);
});

document.getElementById("menu").addEventListener("click", function () {
  this.classList.toggle("z-shape");
});


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.header__inner').css('opacity', 0.5);
    } else {
      $('.header__inner').css('opacity', 1);
    }
  });
});

$(function () {
  // ハンバーガーメニュー
  $(".hamburger").click(function () {
    $(".sp__nav").fadeToggle(500);
    $(".hamburger").toggleClass("open");
  });
  //スライダー
  $(".slider__area").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "15%",
    dots: true
  });
});

$(function () {
  // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
  $(".hamburger").click(function () {

    // 現在のbodyタグのoverflowスタイルを確認
    if ($("body").css("overflow") === "hidden") {

      // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
      $("body").css({ height: "", overflow: "" });

    } else {

      // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
      $("body").css({ height: "100%", overflow: "hidden" });

    }
  });
});


