$(document).ready(function() {


    mobileNavbar();

    animateHeight();
    
    datepicker();

});

function mobileNavbar() {
    $('#js-hamburger').click(function() {
        $(this).toggleClass('open');
        $('.js-navbar').toggleClass('open');
    });
}

function customSelect() {
    $('.selectpicker').selectpicker();

}

function animateHeight() {

    var nav = $('.js-popup'),
        animateTime = 500,
        navLink = $('.js-popup-link');
    navLink.click(function() {
        if (nav.height() === 0) {
            autoHeightAnimate(nav, animateTime);
            $(nav).css('opacity', '1');
        } else {
            nav.stop().animate({ height: '0', opacity: '0' }, animateTime);
        }
    });


    /* Function to animate height: auto */
    function autoHeightAnimate(element, time) {
        var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height(); // Get Auto Height
        element.height(curHeight); // Reset to Default Height
        element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
    }
}

function datepicker () {
	$('#datetimepicker1').datetimepicker({
        format: 'MM.DD.YYYY',
        locale: 'ru',
        icons: {
            time: 'glyphicon glyphicon-time',
            date: 'glyphicon glyphicon-calendar',
            up: 'fa fa-angle-up',
            down: 'fa fa-angle-down',
            previous: 'fa fa-angle-left',
            next: 'fa fa-angle-right',
            today: 'glyphicon glyphicon-screenshot',
            clear: 'glyphicon glyphicon-trash',
            close: 'glyphicon glyphicon-remove'
        }
    });
    $('#datetimepicker3').datetimepicker({
        format: 'LT',
        locale: 'ru',
        icons: {
            time: 'glyphicon glyphicon-time',
            date: 'glyphicon glyphicon-calendar',
            up: 'fa fa-angle-up',
            down: 'fa fa-angle-down',
            previous: 'fa fa-angle-left',
            next: 'fa fa-angle-right',
            today: 'glyphicon glyphicon-screenshot',
            clear: 'glyphicon glyphicon-trash',
            close: 'glyphicon glyphicon-remove'
        }
    });
}



