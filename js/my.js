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
            }
        });
    });

    // $("body").scrollTop(function() {
    //     scrollTop = $(window).scrollTop();
    //     $(".sticky-head".scrollTop).removeClass('none');
    //     $(".sticky-head".scrollTop).addClass('block');
    //     // $(".sticky-head2").css("margin-top", "130px");
    // });

    // $(window).scrollTop("click", function() {
    //     $(".sticky-head").addClass("block");
    //     $(".sticky-head2").css("margin-top", "117px");
    // });
    // $(window).scrollDown("click", function() {
    //     $(".sticky-head").addClass("block");
    //     $(".sticky-head2").css("margin-top", "117px");
    // });

});