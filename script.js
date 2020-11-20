jQuery(document).ready(function($) {
    $(window).scroll(function(){  
        if ($(window).scrollTop() > 50) {
            $(".body").css("background-image", "url('./2.png')");
        }  else {
            $(".body").css("background-image", "url('./1.png')");
        }
    });
});