$(document).ready(function() {
    var windowHeight = $(window).height();
    var hotelMargin = windowHeight * 0.18;
    var hotelQanotHeight = windowHeight * 0.4;
    var chiqishQanot = hotelQanotHeight * 0.22;

    console.log("windowheight:", windowHeight);
    // $(".test-hotel").marginTop(hotelmargin);
    $(".test-hotel").height(windowHeight - 2 * hotelMargin);
    $('.test-hotel').css('margin-top', hotelMargin);
    $('.test-hotel').css('margin-bottom', hotelMargin);
    $('.hotel-qanot').height(hotelQanotHeight);
    $('.hotel-qanot2').height(hotelQanotHeight);

    anime({
        targets: '.hotel-qanot',
        translateX: -1 * chiqishQanot,
        translateY: -1 * chiqishQanot,
        easing: 'easeInOutSine'
    });
    anime({
        targets: '.hotel-qanot2',
        translateX: chiqishQanot,
        translateY: chiqishQanot,
        easing: 'easeInOutSine'
    });
});

$(document).ready(function() {

    // $(function() {
    //     $(window).on('scroll', function() {
    //         alert('scroll is working');

    //         console.log("test");
    //     });

    // });

    $('body').scroll(function() {
        $(".sticky-head").addClass('none');
        $(".sticky-head2").css("margin-top", "0");

        // if ($('.sticky-head2').css('margin-top' === '130')) {
        //     $(".sticky-head").removeClass('none');
        //     $(".sticky-head").addClass('d-block');
        // } else {


        //     $(".sticky-head").addClass('d-block');
        // }
    });

    $("body").scrollTop(function() {
        $(".sticky-head").removeClass('none');
        $(".sticky-head").addClass('block');

        $('.sticky-head2').addClass("block");
    });
});


// $(document).ready(function() {
//     // Basic initialization is like this:
//     // $('.your-class').slick();

//     // I added some other properties to customize my slider
//     // Play around with the numbers and stuff to see
//     // how it works.
//     $('.slick-carousel').slick({
//         infinite: true,
//         slidesToShow: 3, // Shows a three slides at a time
//         slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
//         arrows: true, // Adds arrows to sides of slider
//         dots: true // Adds the dots on the bottom
//     });
// });

$(document).ready(function() {

    // SLIDER
    //$('.slider').slick({});

    $('.slider').slick({
        dots: true,
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-angle-right"></i></div>',
        prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-angle-left"></i></div>',
    });

});