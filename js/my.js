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

    // $('body').scroll(function() {
    //     $(".sticky-head").addClass('none');
    //     $(".sticky-head2").css("margin-top", "0");

    // });

    $(document).ready(function() {
        $('body').bind('mousewheel', function(e) {
            if (e.originalEvent.wheelDelta / 120 > 0) {
                console.log('scrolling up !');
                $(".sticky-head").addClass("block");
                $(".sticky-head2").css("margin-top", "117px");
            }


            //  else if {
            //     $(".sticky-head").removeClass("block");
            //     $(".sticky-head2").removeCss("margin-top", "117px");
            // }
            else {
                console.log('scrolling down !');
                $(".sticky-head").addClass('none');
                $(".sticky-head2").css("margin-top", "0");
                $(".sticky-head").addClass('none');
            }
        });
    });

});


// $(document).ready(function() {

//     $(".contain-newpage-itm2-img1").on("click", function() {
//         $(".contain-newpage-itm2-img2").removeClass("show");
//         $(".contain-newpage-itm2-img3").removeClass("show");
//         $(".contain-newpage-itm2-img1").addClass("show");
//     });
//     $(".contain-newpage-itm2-img2").on("click", function() {
//         $(".contain-newpage-itm2-img1").removeClass("show");
//         $(".contain-newpage-itm2-img3").removeClass("show");
//         $(".contain-newpage-itm2-img2").addClass("show");
//     });
//     $(".contain-newpage-itm2-img3").on("click", function() {
//         $(".contain-newpage-itm2-img2").removeClass("show");
//         $(".contain-newpage-itm2-img1").removeClass("show");
//         $(".contain-newpage-itm2-img3").addClass("show");
//     });

// });


$(document).ready(function() {

    var turRegionBlockWidth = $(".contain-newpage").width();
    var turRegionBlockPhoto = turRegionBlockWidth / 3;


    $(".contain-newpage-itm2-img1").hover(function() {
        $(".contain-newpage-itm2-img2").removeClass("img2");
        $(".contain-newpage-itm2-img3").removeClass("img3");
        $(".contain-newpage-itm2-img1").addClass("img1");
    }, function() {
        $(".contain-newpage-itm2-img1").removeClass("img1");
    });
    $(".contain-newpage-itm2-img2").hover(function() {
        $(".contain-newpage-itm2-img1").removeClass("img1");
        $(".contain-newpage-itm2-img3").removeClass("img3");
        $(".contain-newpage-itm2-img2").addClass("img2");
    }, function() {
        $(".contain-newpage-itm2-img2").removeClass("img2");
    });
    $(".contain-newpage-itm2-img3").hover(function() {
        $(".contain-newpage-itm2-img2").removeClass("img2");
        $(".contain-newpage-itm2-img1").removeClass("img1");
        $(".contain-newpage-itm2-img3").addClass("img3");
    }, function() {
        $(".contain-newpage-itm2-img3").removeClass("img3");
    });



});

// $(".contain-newpage").hover(function() {
//     anime({
//         targets: ".contain-newpage-itm2",
//         translateX: [790, 0],
//         easing: 'easeInOutSine',
//         duration: 2000
//     });
//     $(".contain-newpage-itm2").addClass("d-flex");
//     $(".contain-newpage-itm").css("margin-right", "700px");
//     $(".contain-newpage-itm2").removeClass("d-xl-none");
// }, function() {
//     anime({
//         targets: ".contain-newpage-itm2",
//         translateX: [0, 790],
//         easing: 'easeInOutSine',
//         duration: 2000
//     });
//     $(".contain-newpage-itm").css("margin-right", "0px");
// });



$(".contain-newpage").hover(function() {
    anime({
        targets: ".contain-newpage-itm2-img1",
        translateX: [790, 0],
        easing: 'easeInOutSine',
        duration: 2000
    });
    $(".contain-newpage-itm2").addClass("d-flex");
    $(".contain-newpage-itm").css("margin-right", "700px");
    $(".contain-newpage-itm2").removeClass("d-xl-none");
}, function() {
    anime({
        targets: ".contain-newpage-itm2",
        translateX: [0, 790],
        easing: 'easeInOutSine',
        duration: 2000
    });
    $(".contain-newpage-itm").css("margin-right", "0px");
});