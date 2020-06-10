    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing (index.html page only)
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked (index.html, donation.html, and gallery.html)
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll (index.html, donation.html, and gallery.html)
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar (index.html, donation.html, and gallery.html)
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top (index.html, donation.html, and gallery.html)
    navbarCollapse();
    
    // Collapse the navbar when page is scrolled (index.html, donation.html, and gallery.html)
    $(window).scroll(navbarCollapse);

    })(jQuery); //End of use strict (allows Nav bar to keep white backround in index.html, donation.html, and gallery.html pages) 
        
    //Carousel (Gallery.html page only)
    $(function() {
        $(".carousel").carousel( { interval: 5000 } );
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                $(".carousel").carousel("pause");
                $("#carouselButton").children("i").removeClass("fa-pause");
                $("#carouselButton").children("i").addClass("fa-play");
            } else {
                $(".carousel").carousel("cycle");
                $("#carouselButton").children("i").removeClass("fa-play");
                $("#carouselButton").children("i").addClass("fa-pause"); 
            }
        });
    });
