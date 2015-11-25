$('#myTabs').bind('show', function(e) {
    paneID = $(e.target).attr('href');
    src = $(paneID).attr('data-src');
    if ($(paneID + " iframe").attr("src") == "") {
        $(paneID + " iframe").attr("src", src);
    }

});

$('#myTabs2').bind('show', function(e) {
    paneID = $(e.target).attr('href');
    src = $(paneID).attr('data-src');
    // if the iframe hasn't already been loaded once
    if ($(paneID + " iframe").attr("src") == "") {
        $(paneID + " iframe").attr("src", src);
    }
});

(function() {
    $(window).scroll(function() {
        // check if window scroll for more than 430px. May vary
        // as per the height of your main banner.
        if ($(this).scrollTop() > 630) {
            $('#mbill_logo').attr('src', '_/images/mbill_logo.png'); // change logo to dark version
            $('.navbar').addClass('opaque'); // adding the opaque class
        } else {
            $('#mbill_logo').attr('src', '_/images/mbill_logo_white.png'); // change logo to light version
            $('.navbar').removeClass('opaque'); // removing the opaque class
        }
    });
})();

$(document).ready(function() {
    $("div.bhoechie-tab-menu>div.list-group>a").hover(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
        $("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
    });
    $('.dt-counter').counterUp({
        delay: 5,
        time: 3000
    });
	$('#form_submit').click(function(e) {
        e.preventDefault();
        $('#dt-contact-form').submit();
    });
});