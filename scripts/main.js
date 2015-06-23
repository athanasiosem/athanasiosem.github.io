/**
 * Index.js
 * @author Athanasios Emmanouilidis
 */

(function ($) {

    var app = $.sammy('body', function () {

        this.get('#/', function (context) {

            // Hide all other pages and show only this page

            $('#home').show();
            $('#about').hide();
            $('#contact').hide();

            // Remove active class from all other navigation items and add it to this item

            $('#about-nav-li,#contact-nav-li').removeClass("active");
            $('#home-nav-li').addClass("active");

        });

        this.get('#/home', function (context) {

            // Hide all other pages and show only this page

            $('#home').slideDown();
            $('#about').slideUp();
            $('#contact').slideUp();

            // Remove active class from all other navigation items and add it to this item

            $('#about-nav-li,#contact-nav-li').removeClass("active");
            $('#home-nav-li').addClass("active");

        });

        this.get('#/about', function (context) {

            // Hide all other pages and show only this page

            $('#home').slideUp();
            $('#about').slideDown();
            $('#contact').slideUp();

            // Remove active class from all other navigation items and add it to this item

            $('#home-nav-li,#contact-nav-li').removeClass("active");
            $('#about-nav-li').addClass("active");

        });

        

        this.get('#/contact', function (context) {

            // Hide all other pages and show only this page

            $('#home').slideUp();
            $('#about').slideUp();
            $('#contact').slideDown();


            // Remove active class from all other navigation items and add it to this item

            $('#home-nav-li,#about-nav-li').removeClass("active");
            $('#contact-nav-li').addClass("active");

        });


    });

    $(function () {
        app.run('#/');
       
     
    });

})(jQuery);