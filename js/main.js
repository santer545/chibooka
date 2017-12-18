$(document).ready(function() {

    // navbar mobile
    mobileNavbar();

    // autoheight animation
    animateHeight();


    // date on searchbar
    datepicker();

    // masks 
    inputMasks();

    map();

});

function mobileNavbar() {
    $('#js-hamburger').click(function() {
        $(this).toggleClass('open');
        $('.js-navbar').toggleClass('open');
    });
}

function customSelect() {
    $('.selectpicker').selectpicker({
        noneResultsText: 'Город не найден'
    });

}

function animateHeight() {

    var nav = $('.js-popup'),
        animateTime = 500,
        navLink = $('.js-popup-link');
    navLink.click(function() {
        if (nav.height() === 0) {
            autoHeightAnimate(nav, animateTime);
            $(nav).css({'opacity':'1', 'border-top': '1px solid #fafaf7'});

        } else {
            nav.stop().animate({ height: '0', opacity: '0' }, animateTime);
        }
    });

    var nav1 = $('.js-modal-bottom'),
        animateTime1 = 500,
        navLink1 = $('.js-restorator-application');
    navLink1.click(function() {
        if (nav1.height() === 0) {
            autoHeightAnimate(nav1, animateTime);
        } else {
            nav1.stop().animate({ height: '0' }, animateTime1);
        }
    });

    var nav2 = $('.js-pass-change'),
        animateTime2 = 500,
        navLink2 = $('.js-pass-btn');
    navLink2.click(function() {
        if (nav2.height() === 0) {
            autoHeightAnimate(nav2, animateTime2);
        } else {
            nav2.stop().animate({ height: '0' }, animateTime2);
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

function datepicker() {
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



function inputMasks() {

    //phone 
    $('input[type=tel]').mask("+99(999)999-9999");
}


function map() {
    var latlng = new google.maps.LatLng("49.9980554", "36.240871");


    var popupContent = '<div class="catalog-item map-item"><div class="catalog-img"><img src="images/favorite-1.jpg" alt=""></div><div class="catalog-description"><div class="catalog-heading">44 Favorite Place</div><p><strong>Ресторан.</strong> Средний чек: 112 гривен</p><p><strong>Адрес:</strong> ул. Пушкинская, 44 – <a href="#">от вас 455 метров</a></p><div class="catalog-rating"><ul><li><i class="fa fa-star" aria-hidden="true"></i></li><li><i class="fa fa-star" aria-hidden="true"></i></li><li><i class="fa fa-star" aria-hidden="true"></i></li><li><i class="fa fa-star-o" aria-hidden="true"></i></li><li><i class="fa fa-star-o" aria-hidden="true"></i></li></ul><div class="rating-count"><a href=""><span>30</span> отзывов</a></div></div><div class="catalog-bottom"><div class="catalog-bottom__left"><strong class="catalog-number">21</strong> Столов свободно</div><div class="catalog-bottom__btn"><button class="btn btn-success btn-sm">зачибучить</button></div></div></div></div>';

    var myOptions = {
        zoom: 17,
        center: latlng,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), myOptions);

    map.scrollwheel = false;

    map.setOptions({ mapTypeControl: true });

    var image = 'images/marker.png';
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: image
    });









    var infowindow = new google.maps.InfoWindow({
        content: popupContent
    });
    infowindow.open(map, marker);
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    google.maps.event.addListener(infowindow, 'domready', function() {
        // Reference to the DIV which receives the contents of the infowindow using jQuery
        var iwOuter = $('.gm-style-iw');
        console.log($(iwOuter).next());
        $(iwOuter).next().remove();

        /* The DIV we want to change is above the .gm-style-iw DIV.
         * So, we use jQuery and create a iwBackground variable,
         * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
         */
        var iwBackground = iwOuter.prev();

        iwOuter.parent().parent().css({ left: '300px', top: '300px' });

        // Remove the background shadow DIV
        iwBackground.children(':nth-child(2)').css({ 'display': 'none' });

        // Remove the white background DIV
        iwBackground.children(':nth-child(4)').css({ 'display': 'none' });

        // Moves the shadow of the arrow 76px to the left margin 
        iwBackground.children(':nth-child(1)').attr('style', function(i, s) { return s + 'left: 0px !important;' });

        // Moves the arrow 76px to the left margin 
        iwBackground.children(':nth-child(3)').find('div').children().remove();

        // Changes the desired color for the tail outline.
        // The outline of the tail is composed of two descendants of div which contains the tail.
        // The .find('div').children() method refers to all the div which are direct descendants of the previous div. 
        iwBackground.children(':nth-child(3)').find('div').children().remove();


    });
}