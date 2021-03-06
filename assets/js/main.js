//@prepros-prepend bootstrap.min.js
//@prepros-prepend owl.carousel.min.js
//@prepros-prepend jquery.meanmenu.js
//@prepros-prepend wow.min.js
//@prepros-prepend plugins.js
//@prepros-prepend jquery.fancybox.js

//@prepros-prepend jquery.counterup.min.js
//@prepros-prepend jquery.treeview.js
//@prepros-prepend bootstrap-toggle.js
//@prepros-prepend jSignature.min.js
//@prepros-prepend google-map.js
var sigData;
(function($) {
    "use strict";

    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    jQuery('nav.active-mobile-menu').meanmenu();

    /*----------------------------
     owl active product slider
    ------------------------------ */
    $(".active-owl-product").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
    });

    /* Featured Product*/
    $(".active-featured-owl").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
    });

    /* Homeone blog*/
    $(".active-blog-owl").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 2,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsCustom: [
            [0, 1],
            [450, 1],
            [480, 1],
            [600, 1],
            [700, 1],
            [768, 1],
            [992, 2],
            [1199, 2]
        ],
    });

    
    /*----------------------------
     wow js active
    ------------------------------ */
    new WOW().init();

    /*----------------------------
     price-slider active
    ------------------------------ */
    
    // $("#slider-range").slider({
    //     range: true,
    //     min: 40,
    //     max: 600,
    //     values: [60, 570],
    //     slide: function(event, ui) {
    //         $("#amount").val("�" + ui.values[0] + " - �" + ui.values[1]);
    //     }
    // });
    // $("#amount").val("�" + $("#slider-range").slider("values", 0) +
    //     " - �" + $("#slider-range").slider("values", 1));

    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /* For sticky menu*/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#sticky-header').addClass('sticky');
        } else {
            $('#sticky-header').removeClass('sticky');

        }

    })


    /*footer 320 skin start*/
    /*For about*/
    $("#f-about").on("click", function() {
        var widthcount = $(window).width();
        if (widthcount >= 320 && widthcount < 768) {
            $('.footer-text').slideToggle();
        }
    });

    /*For about*/
    $("#f-info").on("click", function() {
        var widthcount = $(window).width();
        if (widthcount >= 320 && widthcount < 768) {
            $('.jscroll-info').slideToggle();
        }
    });
    /*For about*/
    $("#f-myac").on("click", function() {
        var widthcount = $(window).width();
        if (widthcount >= 320 && widthcount < 768) {
            $('.jscroll-myac').slideToggle();
        }
    });
    /*For about*/
    $("#f-cussve").on("click", function() {
        var widthcount = $(window).width();
        if (widthcount >= 320 && widthcount < 768) {
            $('.jscroll-cussrve').slideToggle();
        }
    });

    /*For -+ on footer start*/


    /* about*/

    $(".ftitle-about h5").on("click", function() {
        $(this).toggleClass('text-close-about active-about');
    });

    /* Information*/

    $(".ftitle-info h5").on("click", function() {
        $(this).toggleClass('text-close active');
    });

    /* My Account*/

    $(".ftitle-myA h5").on("click", function() {
        $(this).toggleClass('text-close active');
    });

    /* Customer*/

    $(".ftitle-cus h5").on("click", function() {
        $(this).toggleClass('text-close active');
    });

    /*For -+ on footer end*/



    /*Scroll to top button start*/

    $(".to-top").on("click", function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.to-top').fadeIn(1000);
        } else {
            $('.to-top').fadeOut(1000);
        }
    })


    /*Scroll to top button end*/
    $("#hbtn").on("click", function() {
        $('.mobile-search').slideDown(500);

    });




    /*===================Home2=================*/

    $('.cur-title1').on('click', function() {
        $('.inner-btn').slideToggle(1000);
    });

    $('.cur-title2').on('click', function() {
        $('.inner-btn2').slideToggle(1000);
    });




    /* Blog2*/
    $(".active-blog2-owl").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
    });


    /*====================Home4==================*/


    $(".active-owl-product-hp4").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [980, 3],
        itemsTablet: [768, 2],
        itemsMobile: [480, 1],
    });

    /* Countdown*/


    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="ftime-counter">%D :</span><span class="time-counter">%H :</span><span class="time-counter">%M :</span><span class="time-counter">%S</span>'));
        });
    });

    /*Home4 blog*/
    $(".active-blogemail-owl").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsMobile: [480, 1],
    });

    /* Price slider jquery ui*/
    // if ($('#slider-range')) {
    //     var sliderrange = $('#slider-range');
    //     $(function() {
    //         sliderrange.slider({
    //             range: true,
    //             min: 0,
    //             max: 500,
    //             values: [75, 300],
    //             slide: function(event, ui) {
    //                 $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    //             }
    //         });
    //         $("#amount").val("$" + sliderrange.slider("values", 0) +
    //             " - $" + sliderrange.slider("values", 1));
    //     });
    // }

    /* In 768px hair page sidebar will be closed start*/

    $(".jstest").on("click", function() {
        var widthcount = $(window).width();
        if (widthcount >= 320 && widthcount < 992) {
            $('.sfcr-close').slideToggle();
        }
    });


    $(".plus").on("click", function() {
        $(this).toggleClass('minus plus');

    })

    /*Tab2 jquery click function*/

    $("#tab2-jq-click2").on("click", function() {
        $('.jquery-effect2').slideToggle();
    })


    $("#tab2-jq-click").on("click", function() {
        $('.jquery-effect').slideToggle();
    })

    /* In 768px hair page sidebar will be closed end*/

    /*----------------------------
        cart-plus-minus-button
       ------------------------------ */
    $(".cart-plus-minus")
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*Active class jquery code*/

    var skillulli = $('.skill-ulli li');

    skillulli.on("click", function() {
        skillulli.removeClass("active-skill");
        $(this).addClass("active-skill");
    });

    /* Fancybox*/
    $('.fancybox').fancybox();



    /*For js counter up*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*For treeview*/
    $("#cat-treeview ul").treeview({
        animated: "normal",
        persist: "location",
        collapsed: true,
        unique: true,
    });

    /* mixItUp
       ------------------------------ */
    $('#mix-fil').mixItUp();


})(jQuery);
$(document).ready(function () {
    var $signInput = $('#signature_input');
    var $sigdiv = $('#signature');
    //return a promise that resolves with a File instance
    function urltoFile(url, filename, mimeType){
        return (fetch(url)
            .then(function(res){return res.arrayBuffer();})
            .then(function(buf){return new File([buf], filename, {type:mimeType});})
        );
    }

    $sigdiv.jSignature({'UndoButton':false, autoFit: true});
    $sigdiv.bind('change', function(e){ 
        sigdata = $sigdiv.jSignature('getData');
    });
    $('#reset-sign').click(function(){$sigdiv.jSignature('reset');});

    $('.registration-form fieldset#step1').fadeIn('slow').addClass('active-field');

    $('.registration-form input[type="text"]').on('focus', function () {
        $(this).removeClass('input-error');
    });

    // next step
    $('.registration-form .btn-next').on('click', function () {
        var parent_fieldset = $(this).parents('fieldset');
        var next_step = true;

        parent_fieldset.find('input[type="text"]:not(.not-required),input[type="email"]:not(.not-required)').each(function () {
            if ($(this).val() == "") {
                $(this).addClass('input-error');
                next_step = false;
            } else {
                $(this).removeClass('input-error');
            }
        });

        if (next_step) {
            parent_fieldset.fadeOut(400, function () {
                var id = $(this).attr('id');
                $('.progress-steps li.steps-item#'+id).next().addClass('is-active');
                $(this).removeClass('active-field');
                $(this).next().fadeIn().addClass('active-field');
            });
        }

    });

    // previous step
    $('.registration-form .btn-previous').on('click', function () {
        $(this).parents('fieldset').fadeOut(400, function () {
            var id = $(this).attr('id');
            $('.progress-steps li.steps-item#'+id).removeClass('is-active');
            $(this).removeClass('active-field');
            $(this).prev().fadeIn().addClass('active-field');
        });
    });
    // Steps click
    $('.progress-steps li.steps-item').on('click', function () {
        var id = $(this).data('identifiant');
        $(this).addClass('is-active').prev().addClass('is-active');
        $(this).next().removeClass('is-active').next().removeClass('is-active');
        $('fieldset.active-field').fadeOut(400, function () {
            $(this).removeClass('active-field');
            $('fieldset#'+id).fadeIn().addClass('active-field');
        });
    });

    // submit
    $('.registration-form').on('submit', function (e) {
        urltoFile(sigdata, 'a.png', 'image/png')
        .then(function(file){
            $signInput.val(file);
        })
        $(this).find('input[type="text"]:not(.not-required),input[type="email"]:not(.not-required)').each(function () {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            } else {
                $(this).removeClass('input-error');
            }
        });

    });

   
});