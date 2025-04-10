// ====================
//ローディング
// ====================
window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.querySelector(".loading__wrapper");
    if (loader) {
      loader.classList.add("fade-out");

      loader.addEventListener(
        "transitionend",
        function () {
          loader.style.display = "none";
        },
        { once: true }
      );
    }
  }, 2800);
});

document.getElementById("menu").addEventListener("click", function () {
  this.classList.toggle("z-shape");
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

// スクロール連動背景色
jQuery(function(){

	var light__container = jQuery('.light__container');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 1750) { //スクロールが1500pxを越えたら
			light__container.addClass('invert');
		} else { //スクロールが1500pxを越えなければ
			light__container.removeClass('invert');
		}
	});

});

jQuery(function(){

	var light__container2 = jQuery('.light__container2');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 5610) { //スクロールが5750pxを越えたら
			light__container2.addClass('invert');
		} else { //スクロールが5750pxを越えなければ
			light__container2.removeClass('invert');
		}
	});

});

jQuery(function(){

	var light__container3 = jQuery('.light__container3');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 9680) { //スクロールが9800pxを越えたら
			light__container3.addClass('invert');
		} else { //スクロールが9800pxを越えなければ
			light__container3.removeClass('invert');
		}
	});

});

jQuery(function(){

	var light__container4 = jQuery('.light__container4');
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 13800) { //スクロールが5750pxを越えたら
			light__container4.addClass('invert');
		} else { //スクロールが5750pxを越えなければ
			light__container4.removeClass('invert');
		}
	});

});
