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
                            scrollTop: p.top - 15
                        }, 600);
                    } else {
                        $('#gnavi').removeAttr('style');
                        $('.menu-icon').removeClass('active');
                        $('html,body').animate({
                            scrollTop: p.top - 80
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
                    $root.animate({scrollTop: top01 - 15}, 600);
                } else {
                    $root.animate({scrollTop: top01 - 80}, 600);
                }
            }
        //End anchor link
        },
        toTop: function () {
            $("#totop").hide();
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('#totop').fadeIn();
                } else {
                    $('#totop').fadeOut();
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
var totop = document.querySelector('#totop');
var footer = document.querySelector('#footer');

function checkOffset() {
  function getRectTop(el){
    var rect = el.getBoundingClientRect();
    return rect.top;
  }
  
  if((getRectTop(totop) + document.body.scrollTop) + totop.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) + 15){
    totop.style.position = 'absolute';
    totop.style.top = '-25px';
    totop.style.bottom = 'auto';
  }    
  if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop)){
    totop.style.position = 'fixed'; // restore when you scroll up
    totop.style.top = 'auto';
    totop.style.bottom = '60px';
  }
    
}

document.addEventListener("scroll", function(){
  checkOffset();
});

