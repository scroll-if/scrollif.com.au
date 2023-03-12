$(document).ready(function () {
	$("div.menu-icon").click(function () {
		$("div.menu-icon").toggleClass("open");
		$("nav.navbar-slider").toggleClass("open");
		$("div.black-out").toggleClass("open");
	});
	$("a").click(function () {
		$("nav.navbar-slider").removeClass("open");
		$("div.menu-icon").removeClass("open");
		$("div.black-out").removeClass("open");
	});
	$(window).resize(function () {
		if ($(window).width() > 1024) {
			$("nav.navbar-slider").removeClass("open");
			$("div.menu-icon").removeClass("open");
			$("div.black-out").removeClass("open");
		}
	});
});