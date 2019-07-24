    $(document).ready(function() {
        var windowHeight = $(window).height();
        var hotelMargin = windowHeight * 0.18;
        var hotelQanotHeight = windowHeight * 0.4;
        var chiqishQanot = hotelQanotHeight * 0.22;


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



        $(document).ready(function() {
            $("html").bind("mousewheel", function(e) {
                var toppp = $(".sticky-head").offset().top;
                var toppp2 = $(".sticky-head2").offset().top;

                console.log(toppp);
                console.log(toppp2);

                if (toppp2 >= 117) {
                    $(".sticky-head").fadeOut("2000");
                    $(".sticky-head2").css("margin-top", "0px");
                } else {
                    $(".sticky-head").fadeIn("2000");
                    $(".sticky-head2").css("margin-top", "97px");
                }
            });
        });





        // index4 js





        $(document).ready(function() {
            var turRegionBlockWidth = $(".contain-newpage").width();
            var turRegionBlockPhoto = turRegionBlockWidth / 3;

            $(".contain-newpage-itm2-img1").hover(
                function() {
                    $(".contain-newpage-itm2-img1").addClass("img1");
                    $(".contain-newpage-itm2-img2").removeClass("img2");
                    $(".contain-newpage-itm2-img3").removeClass("img3");
                },
                function() {
                    $(".contain-newpage-itm2-img1").removeClass("img1");
                }
            );
            $(".contain-newpage-itm2-img2").hover(
                function() {
                    $(".contain-newpage-itm2-img2").addClass("img2");
                    $(".contain-newpage-itm2-img1").removeClass("img1");
                    $(".contain-newpage-itm2-img3").removeClass("img3");
                },
                function() {
                    $(".contain-newpage-itm2-img2").removeClass("img2");
                }
            );
            $(".contain-newpage-itm2-img3").hover(
                function() {
                    $(".contain-newpage-itm2-img3").addClass("img3");
                    $(".contain-newpage-itm2-img2").removeClass("img2");
                    $(".contain-newpage-itm2-img1").removeClass("img1");
                },
                function() {
                    $(".contain-newpage-itm2-img3").removeClass("img3");
                }
            );

            $(".contain-newpage-itm2-img4").hover(
                function() {
                    $(".contain-newpage-itm2-img5").removeClass("img5");
                    $(".contain-newpage-itm2-img6").removeClass("img6");
                    $(".contain-newpage-itm2-img4").addClass("img4");
                },
                function() {
                    $(".contain-newpage-itm2-img4").removeClass("img4");
                }
            );
            $(".contain-newpage-itm2-img5").hover(
                function() {
                    $(".contain-newpage-itm2-img4").removeClass("img4");
                    $(".contain-newpage-itm2-img6").removeClass("img6");
                    $(".contain-newpage-itm2-img5").addClass("img5");
                },
                function() {
                    $(".contain-newpage-itm2-img5").removeClass("img5");
                }
            );
            $(".contain-newpage-itm2-img6").hover(
                function() {
                    $(".contain-newpage-itm2-img5").removeClass("img5");
                    $(".contain-newpage-itm2-img4").removeClass("img4");
                    $(".contain-newpage-itm2-img6").addClass("img6");
                },
                function() {
                    $(".contain-newpage-itm2-img6").removeClass("img6");
                }
            );

            $(".contain-newpage-itm2-img7").hover(
                function() {
                    $(".contain-newpage-itm2-img8").removeClass("img8");
                    $(".contain-newpage-itm2-img9").removeClass("img9");
                    $(".contain-newpage-itm2-img7").addClass("img7");
                },
                function() {
                    $(".contain-newpage-itm2-img7").removeClass("img7");
                }
            );
            $(".contain-newpage-itm2-img8").hover(
                function() {
                    $(".contain-newpage-itm2-img7").removeClass("img7");
                    $(".contain-newpage-itm2-img9").removeClass("img9");
                    $(".contain-newpage-itm2-img8").addClass("img8");
                },
                function() {
                    $(".contain-newpage-itm2-img8").removeClass("img8");
                }
            );
            $(".contain-newpage-itm2-img9").hover(
                function() {
                    $(".contain-newpage-itm2-img8").removeClass("img8");
                    $(".contain-newpage-itm2-img7").removeClass("img7");
                    $(".contain-newpage-itm2-img9").addClass("img9");
                },
                function() {
                    $(".contain-newpage-itm2-img9").removeClass("img9");
                }
            );

            $(".contain-newpage-itm2-img10").hover(
                function() {
                    $(".contain-newpage-itm2-img11").removeClass("img11");
                    $(".contain-newpage-itm2-img12").removeClass("img12");
                    $(".contain-newpage-itm2-img10").addClass("img10");
                },
                function() {
                    $(".contain-newpage-itm2-img10").removeClass("img10");
                }
            );
            $(".contain-newpage-itm2-img11").hover(
                function() {
                    $(".contain-newpage-itm2-img10").removeClass("img10");
                    $(".contain-newpage-itm2-img12").removeClass("img12");
                    $(".contain-newpage-itm2-img11").addClass("img11");
                },
                function() {
                    $(".contain-newpage-itm2-img11").removeClass("img11");
                }
            );
            $(".contain-newpage-itm2-img12").hover(
                function() {
                    $(".contain-newpage-itm2-img11").removeClass("img11");
                    $(".contain-newpage-itm2-img10").removeClass("img10");
                    $(".contain-newpage-itm2-img12").addClass("img12");
                },
                function() {
                    $(".contain-newpage-itm2-img12").removeClass("img12");
                }
            );

        });
        $(".contain-newpage").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img1",
                    translateX: [790, 0],
                    easing: "easeInOutQuad",
                    duration: 1200
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm").css("margin-right", "700px");
                $(".contain-newpage-itm2").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img1",
                    translateX: [0, 900],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm").css("margin-right", "0px");
            }
        );
        $(".contain-newpage").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img2",
                    translateX: [690, 0],
                    easing: "easeInOutQuad",
                    duration: 1400
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm").css("margin-right", "700px");
                $(".contain-newpage-itm2").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img2",
                    translateX: [0, 790],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm").css("margin-right", "0px");
            }
        );
        $(".contain-newpage").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img3",
                    translateX: [590, 0],
                    easing: "easeInOutQuad",
                    duration: 1500
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm").css("margin-right", "700px");
                $(".contain-newpage-itm2").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img3",
                    translateX: [0, 790],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm").css("margin-right", "0px");
                $("body").css("overflow-x", "hidden");
            }
        );

        $(".contain-newpage2").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img4",
                    translateX: [790, 0],
                    easing: "easeInOutQuad",
                    duration: 1200
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm-sec").css("margin-right", "700px");
                $(".contain-newpage-itm3").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img4",
                    translateX: [0, 900],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm-sec").css("margin-right", "0px");
            }
        );
        $(".contain-newpage2").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img5",
                    translateX: [690, 0],
                    easing: "easeInOutQuad",
                    duration: 1400
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm-sec").css("margin-right", "700px");
                $(".contain-newpage-itm3").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img5",
                    translateX: [0, 790],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm-sec").css("margin-right", "0px");
            }
        );
        $(".contain-newpage2").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img6",
                    translateX: [590, 0],
                    easing: "easeInOutQuad",
                    duration: 1500
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm-sec").css("margin-right", "700px");
                $(".contain-newpage-itm3").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img6",
                    translateX: [0, 790],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm-sec").css("margin-right", "0px");
                $("body").css("overflow-x", "hidden");
            }
        );
        $(".contain-newpage3").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img7",
                    translateX: [790, 0],
                    easing: "easeInOutQuad",
                    duration: 1200
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm-sec2").css("margin-right", "700px");
                $(".contain-newpage-itm4").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img7",
                    translateX: [0, 900],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm-sec2").css("margin-right", "0px");
            }
        );
        $(".contain-newpage3").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img8",
                    translateX: [690, 0],
                    easing: "easeInOutQuad",
                    duration: 1400
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm-sec2").css("margin-right", "700px");
                $(".contain-newpage-itm4").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img8",
                    translateX: [0, 790],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm-sec2").css("margin-right", "0px");
            }
        );
        $(".contain-newpage3").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img9",
                    translateX: [590, 0],
                    easing: "easeInOutQuad",
                    duration: 1500
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm-sec2").css("margin-right", "700px");
                $(".contain-newpage-itm4").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img9",
                    translateX: [0, 790],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm-sec").css("margin-right", "0px");
                $("body").css("overflow-x", "hidden");
            }
        );

        $(".contain-newpage4").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img10",
                    translateX: [790, 0],
                    easing: "easeInOutQuad",
                    duration: 1200
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm-sec3").css("margin-right", "700px");
                $(".contain-newpage-itm4").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img10",
                    translateX: [0, 900],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm-sec3").css("margin-right", "0px");
            }
        );
        $(".contain-newpage4").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img11",
                    translateX: [690, 0],
                    easing: "easeInOutQuad",
                    duration: 1400
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm-sec3").css("margin-right", "700px");
                $(".contain-newpage-itm4").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img11",
                    translateX: [0, 790],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm-sec3").css("margin-right", "0px");
            }
        );
        $(".contain-newpage4").hover(
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img12",
                    translateX: [590, 0],
                    easing: "easeInOutQuad",
                    duration: 1500
                });
                $(".contain-newpage-itm2").addClass("d-flex");
                $(".contain-newpage-itm-sec3").css("margin-right", "700px");
                $(".contain-newpage-itm4").removeClass("d-xl-none");
            },
            function() {
                anime({
                    targets: ".contain-newpage-itm2-img12",
                    translateX: [0, 790],
                    easing: "easeInOutQuad",
                    duration: 2000
                });
                $(".contain-newpage-itm-sec3").css("margin-right", "0px");
                $("body").css("overflow-x", "hidden");
            }
        );

        $(document).ready(function() {
            function contactRight() {
                anime({
                    targets: ["#zero"],
                    translateX: 100 + "%"
                });
            }

            function contactLeft() {
                anime({
                    targets: ["#zero"],
                    translateX: -100 + "%"
                });
            }

            function masterView() {
                contactRight();
                contactLeft();
            }
            $(".contain-newpage-itm2-img1").on("click", contactRight);


            $(".contain-newpage-itm2-img1").on("click", function() {
                $("#zero").toggleClass(".hero");

                $(".contain-newpage-itm2-img1").on("click", contactLeft);
            });

            $(".contain-newpage-itm2-img1").on("click", function() {
                $("#zero").addClass("hero");
            });
            // FINAL PAGE
            function contactToRight() {
                anime({
                    targets: [".contain-newpage-itm2-img3"],
                    translateX: 80 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function contactToLeft() {
                anime({
                    targets: [".contain-newpage-itm2-img3"],
                    translateX: 0 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function aboutToRight() {
                anime({
                    targets: [".contain-newpage-itm2-img2"],
                    translateX: 80 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function aboutToLeft() {
                anime({
                    targets: [".contain-newpage-itm2-img2"],
                    translateX: 0 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function viewTeam() {
                aboutToRight();
                contactToRight();
            }

            function viewAbout() {
                aboutToLeft();
                contactToRight();
            }

            function viewContact() {
                aboutToLeft();
                contactToLeft();
            }

            $(".contain-newpage-itm2-img1").click(viewTeam);
            $(".contain-newpage-itm2-img2").click(viewAbout);
            $(".contain-newpage-itm2-img3").click(viewContact);
        });

        $(document).ready(function() {
            function contactRight() {
                anime({
                    targets: ["#zero"],
                    translateX: 100 + "%"
                });
            }

            function contactLeft() {
                anime({
                    targets: ["#zero"],
                    translateX: -100 + "%"
                });
            }

            function masterView() {
                contactRight();
                contactLeft();
            }

            $(".contain-newpage-itm2-img4").on("click", contactRight);

            $(".contain-newpage-itm2-img4").on("click", function() {
                $("#zero").toggleClass(".hero");

                $(".contain-newpage-itm2-img4").on("click", contactLeft);
            });

            $(".contain-newpage-itm2-img4").on("click", function() {
                $("#zero").addClass("hero");
            });
            // FINAL PAGE
            function contactToRight() {
                anime({
                    targets: [".contain-newpage-itm2-img6"],
                    translateX: 80 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function contactToLeft() {
                anime({
                    targets: [".contain-newpage-itm2-img6"],
                    translateX: 0 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function aboutToRight() {
                anime({
                    targets: [".contain-newpage-itm2-img5"],
                    translateX: 80 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function aboutToLeft() {
                anime({
                    targets: [".contain-newpage-itm2-img5"],
                    translateX: 0 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function viewTeam() {
                aboutToRight();
                contactToRight();
            }

            function viewAbout() {
                aboutToLeft();
                contactToRight();
            }

            function viewContact() {
                aboutToLeft();
                contactToLeft();
            }

            $(".contain-newpage-itm2-img4").click(viewTeam);
            $(".contain-newpage-itm2-img5").click(viewAbout);
            $(".contain-newpage-itm2-img6").click(viewContact);
        });

        $(document).ready(function() {
            function contactRight() {
                anime({
                    targets: ["#zero"],
                    translateX: 100 + "%"
                });
            }

            function contactLeft() {
                anime({
                    targets: ["#zero"],
                    translateX: -100 + "%"
                });
            }

            function masterView() {
                contactRight();
                contactLeft();
            }

            $(".contain-newpage-itm2-img7").on("click", contactRight);

            $(".contain-newpage-itm2-img7").on("click", function() {
                $("#zero").toggleClass(".hero");

                $(".contain-newpage-itm2-img7").on("click", contactLeft);
            });

            $(".contain-newpage-itm2-img7").on("click", function() {
                $("#zero").addClass("hero");
            });
            // FINAL PAGE
            function contactToRight() {
                anime({
                    targets: [".contain-newpage-itm2-img9"],
                    translateX: 80 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function contactToLeft() {
                anime({
                    targets: [".contain-newpage-itm2-img9"],
                    translateX: 0 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function aboutToRight() {
                anime({
                    targets: [".contain-newpage-itm2-img8"],
                    translateX: 80 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function aboutToLeft() {
                anime({
                    targets: [".contain-newpage-itm2-img8"],
                    translateX: 0 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function viewTeam() {
                aboutToRight();
                contactToRight();
            }

            function viewAbout() {
                aboutToLeft();
                contactToRight();
            }

            function viewContact() {
                aboutToLeft();
                contactToLeft();
            }

            $(".contain-newpage-itm2-img7").click(viewTeam);
            $(".contain-newpage-itm2-img8").click(viewAbout);
            $(".contain-newpage-itm2-img9").click(viewContact);
        });

        $(document).ready(function() {
            function contactRight() {
                anime({
                    targets: ["#zero"],
                    translateX: 100 + "%"
                });
            }

            function contactLeft() {
                anime({
                    targets: ["#zero"],
                    translateX: -100 + "%"
                });
            }

            function masterView() {
                contactRight();
                contactLeft();
            }

            $(".contain-newpage-itm2-img10").on("click", contactRight);

            $(".contain-newpage-itm2-img10").on("click", function() {
                $("#zero").toggleClass(".hero");

                $(".contain-newpage-itm2-img10").on("click", contactLeft);
            });

            $(".contain-newpage-itm2-img10").on("click", function() {
                $("#zero").addClass("hero");
            });
            // FINAL PAGE
            function contactToRight() {
                anime({
                    targets: [".contain-newpage-itm2-img12"],
                    translateX: 80 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function contactToLeft() {
                anime({
                    targets: [".contain-newpage-itm2-img12"],
                    translateX: 0 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function aboutToRight() {
                anime({
                    targets: [".contain-newpage-itm2-img11"],
                    translateX: 80 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function aboutToLeft() {
                anime({
                    targets: [".contain-newpage-itm2-img11"],
                    translateX: 0 + "%",
                    easing: "easeInOutQuad"
                });
            }

            function viewTeam() {
                aboutToRight();
                contactToRight();
            }

            function viewAbout() {
                aboutToLeft();
                contactToRight();
            }

            function viewContact() {
                aboutToLeft();
                contactToLeft();
            }

            $(".contain-newpage-itm2-img10").click(viewTeam);
            $(".contain-newpage-itm2-img11").click(viewAbout);
            $(".contain-newpage-itm2-img12").click(viewContact);
        });

        (function($) {
            $.fn.scrollReveal = function() {
                //get viewport size
                var windowHeight = $(window).height(),
                    windowWidth = $(window).width(),
                    initialScroll = $(window).scrollTop(),
                    items = $(".js-reveal"),
                    scroll;

                //hide anything not in the viewport
                items.each(function() {
                    if ($(this).offset().top >= windowHeight) {
                        $(this).addClass("js-reveal--hidden");
                    }
                });

                //on scroll
                $(window).scroll(function(event) {
                    //get the current scroll position
                    scroll = $(window).scrollTop();
                    //show anything that is now in view (scroll + windowHeight)
                    items.each(function() {
                        if ($(this).offset().top <= scroll + windowHeight) {
                            $(this).removeClass("js-reveal--hidden");
                        }
                    });
                });

                return this;
            };
        })(jQuery);
        // left



        // hover kresss

        $(".kres").hover(function() {
            anime({
                targets: ".first-kres",
                translateX: [-790, 0],
                rotateZ: 45,

                easing: 'easeInOutQuad',
                duration: 200
            });
            $(".first-kres").addClass("d-block");
        }, function() {
            $(".first-kres").removeClass("d-block");
        });


        $(".kres").hover(function() {
            anime({
                targets: ".second-kres",
                translateX: [-790, 0],
                easing: 'easeInOutQuad',
                rotateZ: 135,
                duration: 200
            });
            $(".second-kres").addClass("d-block");
        }, function() {
            $(".second-kres").removeClass("d-block");
        });



        $(".kres2").hover(function() {
            anime({
                targets: ".first-kres2",
                translateX: [790, 0],
                rotateZ: 45,

                easing: 'easeInOutQuad',
                duration: 200
            });
            $(".first-kres2").addClass("d-block");
        }, function() {
            $(".first-kres2").removeClass("d-block");
        });


        $(".kres2").hover(function() {
            anime({
                targets: ".second-kres2",
                translateX: [790, 0],
                easing: 'easeInOutQuad',
                rotateZ: 135,
                duration: 200
            });
            $(".second-kres2").addClass("d-block");
        }, function() {
            $(".second-kres2").removeClass("d-block");
        });


        $(".kres3").hover(function() {
            anime({
                targets: ".first-kres3",
                translateX: [-790, 0],
                rotateZ: 45,

                easing: 'easeInOutQuad',
                duration: 200
            });
            $(".first-kres3").addClass("d-block");
        }, function() {
            $(".first-kres3").removeClass("d-block");
        });


        $(".kres3").hover(function() {
            anime({
                targets: ".second-kres3",
                translateX: [-790, 0],
                easing: 'easeInOutQuad',
                rotateZ: 135,
                duration: 200
            });
            $(".second-kres3").addClass("d-block");
        }, function() {
            $(".second-kres3").removeClass("d-block");
        });


        $(".kres4").hover(function() {
            anime({
                targets: ".first-kres4",
                translateX: [790, 0],
                rotateZ: 45,

                easing: 'easeInOutQuad',
                duration: 200
            });
            $(".first-kres4").addClass("d-block");
        }, function() {
            $(".first-kres4").removeClass("d-block");
        });


        $(".kres4").hover(function() {
            anime({
                targets: ".second-kres4",
                translateX: [790, 0],
                easing: 'easeInOutQuad',
                rotateZ: 135,
                duration: 150
            });
            $(".second-kres4").addClass("d-block");
        }, function() {
            $(".second-kres4").removeClass("d-block");
        });

        $(".center").slick({
            infinite: true,
            centerMode: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true,
            autoplaySpeed: 1000
        });


        $(".vertical-center").slick({
            vertical: true,
            infinite: true,
            autoplay: true,
            // slidesToScroll: 1,
            // centerMode: true,
            autoplaySpeed: 2000
        });

    });

    window.sr = ScrollReveal();

    sr.reveal(".fadeUp-animate", {
        origin: "top",
        distance: "100%",
        duration: 1000,
        easing: "ease",
        mobile: true,
        reset: false
    });

    window.sr = ScrollReveal();
    sr.reveal(".fadeLeft-animate", {
        origin: "left",
        distance: "100%",
        duration: 1000,
        easing: "ease",
        mobile: true,
        reset: false
    });
    window.sr = ScrollReveal();
    sr.reveal(".fadeDown-animate", {
        origin: "bottom",
        distance: "100%",
        duration: 1000,
        easing: "ease",
        mobile: true,
        reset: false
    });
    window.sr = ScrollReveal();
    sr.reveal(".fadeRight-animate", {
        origin: "right",
        distance: "100%",
        duration: 1000,
        easing: "ease",
        mobile: true,
        reset: false
    });


    function myMap() {
        var latLng = new google.maps.LatLng(41.2984, 69.2731);
        var mapProp = {
            zoom: 18,
            draggable: false,
            center: latLng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // Following Command Will Create the New Map Object
        var map = new google.maps.Map(document.getElementById("map"), mapProp);
        google.maps.event.addDomListener(window, "load", myMap);
    }