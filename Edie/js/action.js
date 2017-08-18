$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.

	if ($(window).scrollTop() > 100 ){

 		$('#nav').addClass('show');

  } else {

    $('#nav').removeClass('show');

 	};
});
