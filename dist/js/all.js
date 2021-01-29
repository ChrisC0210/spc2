        $(document).ready(function() {
            //
            var zindex = 10;

            $("div.card").click(function(e) {
                e.preventDefault();

                var isShowing = false;

                if ($(this).hasClass("show")) {
                    isShowing = true
                }

                if ($("div.cards").hasClass("showing")) {
                    // a card is already in view
                    $("div.card.show")
                        .removeClass("show");

                    if (isShowing) {
                        // this card was showing - reset the grid
                        $("div.cards")
                            .removeClass("showing");
                    } else {
                        // this card isn't showing - get in with it
                        $(this)
                            .css({
                                zIndex: zindex
                            })
                            .addClass("show");

                    }

                    zindex++;

                } else {
                    // no cards in view
                    $("div.cards")
                        .addClass("showing");
                    $(this)
                        .css({
                            zIndex: zindex
                        })
                        .addClass("show");

                    zindex++;
                }

            });
            //
            //cards
            $("ul li:has(ul)").addClass("has-submenu");
            $("ul li ul").addClass("sub-menu");
            $("ul.dropdown li").hover(function() {
                $(this).addClass("hover")
            }, function() {
                $(this).removeClass("hover")
            });
            var $menu = $("#menu"),
                $menulink = $("#spinner-form"),
                $search = $("#search"),
                $search_box = $(".search_box"),
                $menuTrigger = $(".has-submenu>a");
            $menulink.click(function(e) {
                $menulink.toggleClass("active");
                $menu.toggleClass("active");
                if ($search.hasClass("active")) {
                    $(".menu.active").css("padding-top", "50px")
                }
            });
            $search.click(function(e) {
                e.preventDefault();
                $search_box.toggleClass("active")
            });
            $menuTrigger.click(function(e) {
                e.preventDefault();
                var t = $(this);
                t.toggleClass("active").next("ul").toggleClass("active")
            });
            $("ul li:has(ul)");
            $(function() {
                var e = $(document).scrollTop();
                var t = $(".nav_wrapper").outerHeight();
                $(window).scroll(function() {
                    var n = $(document).scrollTop();
                    if ($(document).scrollTop() >= 50) {
                        $(".nav_wrapper").css("position", "fixed")
                    } else {
                        $(".nav_wrapper").css("position", "fixed")
                    }
                    if (n > t) {
                        $(".nav_wrapper").addClass("scroll")
                    } else {
                        $(".nav_wrapper").removeClass("scroll")
                    }
                    if (n > e) {
                        $(".nav_wrapper").removeClass("no-scroll")
                    } else {
                        $(".nav_wrapper").addClass("no-scroll")
                    }
                    e = $(document).scrollTop()
                })
            });

            //swiper
            var swiper = new Swiper('.swiper-container', {
                speed: 600,
                parallax: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            //
        });