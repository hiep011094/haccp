$(function () {
    "use strict";
    var obj = {
        init: function () {
            this.anChor();
            this.toTop();
            this.Gnavi();
        },
        anChor: function(){
             //Anchor link
            $('a[href^="#"]').click(function () {

                if ($($(this).attr('href')).length) {
                    var p = $($(this).attr('href')).offset();
                    if ($(window).width() > 640) {
                        $('html,body').animate({
                            scrollTop: p.top - 80
                        }, 600);
                    } else {
                        $('#gnavi').removeAttr('style');
                        $('.menu-icon').removeClass('active');
                        $('html,body').animate({
                            scrollTop: p.top - 85
                        }, 600);

                    }
                }
                return false;
            });

        //Anchor scroll
        var hash1 = location.hash;
            var $root = $('html, body');
            if (hash1 !== "") {
                var top01 = $(hash1).offset().top;
                if ($(window).width() > 640) {
                    $root.animate({scrollTop: top01 - 130}, 600);
                } else {
                    $root.animate({scrollTop: top01 - 85}, 600);
                }
            }
        //End anchor link
        },
        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('#totop').fadeIn();
                    $('.banner-sp').fadeIn();
                    $('.c-btnbt').css('bottom','0');
                } else {
                    $('#totop').fadeOut();
                    $('.banner-sp').fadeOut();
                    $('.c-btnbt').css('bottom','-100%');
                }
            });
        },
       
        Gnavi: function () {
            $('.menu-icon').click(function () {
                if ($(this).hasClass('active')) {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').stop().slideToggle();
                } else {
                    $(this).toggleClass('active');
                    $('#gnavi').stop().slideToggle('fast');
                }
            });
            $('.close-menu').click(function () {
                $('.menu-icon').removeClass('active');
                $('#gnavi').stop().slideUp('fast');
            });

            $(window).bind("load resize", function () {
                var vW = $(window).width();
                if (vW > 640) {
                    $('.menu-icon').removeClass('active');
                } else if(vW < 641){
					$('.menu-icon').removeClass('active');
                    $('#gnavi').removeAttr('style');
   				}
            });
        },


    };

    obj.init();

});
