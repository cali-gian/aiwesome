$(function () {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


  //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    
    
    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });    


    ///===== Progress Bar

    if ($('.progress_line').length) {
        $('.progress_line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }


    //===== Counter Up

    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });


    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //===== Slick Project

    $('.project_active').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });


    //===== Slick Project

    $('.testimonial_active').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
    });


    //=====  WOW active
    
    var wow = new WOW({
        boxClass: 'wow', //
        mobile: false, // 
    })
    wow.init();







});


// Target the modal and the image elements
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImg");
var closeBtn = document.getElementsByClassName("close")[0];

// Apply click event to all images with 'popup-image' class
var images = document.querySelectorAll('.popup-image');

images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Load the clicked image
    };
});

// Close the modal on "X" button click
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Fix for link click to trigger the same modal
document.querySelectorAll('a[data-popup]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const imageUrl = this.getAttribute('data-popup'); // Get the image URL

        // Set modal image source
        modalImg.src = imageUrl;

        // Show the modal
        modal.style.display = "block";
    });
});



