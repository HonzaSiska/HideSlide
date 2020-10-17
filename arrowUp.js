/*Scroll to top when arrow up clicked BEGIN*/
/*$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#myBtn').fadeIn();
    } else {
        $('#myBtn').fadeOut();
    }
});
$(document).ready(function() {
    $("#myBtn").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});*/

 /*Scroll to top when arrow up clicked END*/

 if ($('#myBtn').length) {
    var scrollTrigger = 10, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#myBtn').addClass('show');
            } else {
                $('#myBtn').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#myBtn').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 100);
    });
	var btn = $('#button');


}
