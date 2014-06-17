(function($) {

	//
	// Google Analytics Code
	//

	(function(i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] ||
		function() {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date();
		a = s.createElement(o), m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script', 'http://www.google-analytics.com/analytics.js', 'ga');

	ga('create', 'UA-12717486-3', 'athanasiosem.github.io');
	ga('send', 'pageview');

	//
	// Affix code
	//

	$('#affix').affix({
		offset : {
			top : 700
		}
	});


	//
	// Smooth scrolling code
	// (Click event for any anchor tag that's href starts with #)
	//

	$('a[href^="#"]').click(function(event) {

		// The id of the section we want to go to.
		var id = $(this).attr("href");

		// An offset to push the content down from the top.
		var offset = 60;

		// Our scroll target : the top position of the
		// section that has the id referenced by our href.
		var target = $(id).offset().top - offset;

		// The magic...smooth scrollin' goodness.
		$('html, body').animate({
			scrollTop : target
		}, 500);

		//prevent the page from jumping down to our section.
		event.preventDefault();
	});

})(jQuery);
