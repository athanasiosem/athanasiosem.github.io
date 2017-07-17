/**
 * Index.js
 * @author Athanasios Emmanouilidis
 */

 console.info("Hint: This page contains an easter egg. Happy time finding it! :-)");

(function ($) {

    var app = $.sammy('body', function () {

        this.get('#/', function (context) {

            // Hide all other pages and show only this page

            $('#home').show();
            $('#about').hide();
            $('#contact').hide();
            $('#projects').hide();

            // Remove active class from all other navigation items and add it to this item

            $('#about-nav-li,#contact-nav-li').removeClass("active");
            $('#home-nav-li').addClass("active");

        });

        this.get('#/home', function (context) {

            // Hide all other pages and show only this page

            $('#home').slideDown();
            $('#about').slideUp();
            $('#contact').slideUp();
            $('#projects').slideUp();

            // Remove active class from all other navigation items and add it to this item

            $('#about-nav-li,#contact-nav-li,#projects-nav-li').removeClass("active");
            $('#home-nav-li').addClass("active");

        });

        this.get('#/about', function (context) {

            // Hide all other pages and show only this page

            $('#home').slideUp();
            $('#about').slideDown();
            $('#contact').slideUp();
            $('#projects').slideUp();


            // Remove active class from all other navigation items and add it to this item

            $('#home-nav-li,#contact-nav-li,#projects-nav-li').removeClass("active");
            $('#about-nav-li').addClass("active");

        });

        this.get('#/projects', function (context) {

            // Hide all other pages and show only this page

            $('#home').slideUp();
            $('#about').slideUp();
            $('#projects').slideDown();
            $('#contact').slideUp();


            // Remove active class from all other navigation items and add it to this item

            $('#home-nav-li,#about-nav-li,#contact-nav-li').removeClass("active");
            $('#projects-nav-li').addClass("active");

        });



        this.get('#/contact', function (context) {

            // Hide all other pages and show only this page

            $('#home').slideUp();
            $('#about').slideUp();
            $('#projects').slideUp();
            $('#contact').slideDown();


            // Remove active class from all other navigation items and add it to this item

            $('#home-nav-li,#about-nav-li,#projects-nav-li').removeClass("active");
            $('#contact-nav-li').addClass("active");

        });


    });

    $(function () {
        app.run('#/');


    });

})(jQuery);

var easter_egg = new Konami(function() { alert("Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'\n\nJohn 14:6")});
