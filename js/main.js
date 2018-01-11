$(document).ready(function() {

    // navbar mobile
    mobileNavbar();

    animateHeight();

    searchHeight();


    // date on searchbar
    datepicker();

    // masks 
    inputMasks();

    // google maps
    map();

    // dropdown
    navbarDropdown();

    // language choose
    languageDropDown();

    // main page sliders
    mainPageSliders();

    // masonry main page
    masonry();

    // overflow text
    dots();

    // item like
    like();

    catalogDetail();

    bron();

    getFileName();

    reviewRating();

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

    /*var nav = $('.js-popup'),
        animateTime = 500,
        navLink = $('.js-popup-link');
    navLink.click(function() {
        if (nav.height() === 0) {
            autoHeightAnimatePopup(nav, animateTime);
            $(nav).css({ 'opacity': '1', 'border-top': '1px solid #fafaf7' });

        } else {
            nav.stop().animate({ height: '0', opacity: '0' }, animateTime);
        }
    });*/

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

    var nav3 = $('.js-code'),
        animateTime3 = 500,
        navLink3 = $('.js_send_phone');
    navLink3.click(function() {
        if (nav3.height() === 0) {
            autoHeightAnimate(nav3, animateTime3);
            $(nav).css('opacity', '1');
        } else {
            nav3.stop().animate({ height: '0', opacity: '0' }, animateTime);
        }
    });



    var phoneWr = $('.js-phone-wrapper'),
        animateTimePhone = 500,
        phoneLink = $('.js-forgot');
    phoneLink.click(function() {
        if (phoneWr.height() === 0) {
            autoHeightAnimate(phoneWr, animateTimePhone);
        } else {
            phoneWr.stop().animate({ height: '0' }, animateTimePhone);
        }
    });




    /* Function to animate height: auto */
    function autoHeightAnimate(element, time) {
        var curHeight = element.height();
        var autoHeight = element.css('height', 'auto').height();
        element.height(curHeight);
        element.stop().animate({ height: autoHeight }, time);
    }

    function autoHeightAnimatePopup(element, time) {
        var curHeight = element.height();
        var autoHeight = element.css('height', 'auto').height();
        element.height(popup);
        element.stop().animate({ height: autoHeight }, time);
    }
}


var popup = $('.js-search-result').height();

/*window.addEventListener("orientationchange", function() {
    var popup_orient = $('.js-search-result').height();
    var navLink = $('.js-popup-link');

    console.log(popup_orient);

    navLink.click(function() {
        if ($('.js-popup').height() === 0) {
            $('.js-popup').addClass('active');
            $('.js-popup').height(popup_orient);
        } else {
            $('.js-popup').removeClass('active');
            $('.js-popup').height(0);
        }
    });
}, false);*/

function searchHeight() {
    var navLink = $('.js-popup-link');
    navLink.click(function() {
        $('.js-popup').toggleClass('active');
    });
}


function datepicker() {
    $('#datetimepicker1').datetimepicker({
        format: 'MM.DD.YYYY',
        locale: 'ru',
        sideBySide: true,
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
        sideBySide: true,
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
    var map1 = $('#map');
    if (map1.length) {
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
        /*infowindow.open(map, marker);*/
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });

        google.maps.event.addListener(infowindow, 'domready', function() {
            // Reference to the DIV which receives the contents of the infowindow using jQuery
            var iwOuter = $('.gm-style-iw');
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
}


function navbarDropdown() {
    $('.js-navbar > ul').find('> li').hover(function() {
        $(this).find('ul')
            .removeClass('noJS')
            .stop(true, true).slideToggle('fast');
    });
}

function languageDropDown() {
    $('.lang .dropdown').click(function() {
        var linkText = $(this).find('img').attr('src');
        $(this).siblings('.dropdown-menu').find('a').each(function(i, element) {
            var currentLang = $(this).find('img').attr('src');
            if (linkText == currentLang) {
                $(this).closest('li').hide();
            } else {
                $(this).closest('li').show();
            }
        });
    });

    $('.dropdown-menu li a').click(function() {
        var text = $(this).find('img').attr('src');
        $(this).closest('.lang').find('.dropdown').find('img').attr('src', text);
    });

    $('.lang').find('.dropdown-menu').find('li:eq(0)').hide();
}

function mainPageSliders() {
    var swiper = new Swiper('#main-slider-1', {
        nextButton: '#button-next-1',
        prevButton: '#button-prev-1',
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            800: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });

    $('#button-next-1').click(function() {
        swiper.slideNext();
    });
    $('#button-prev-1').click(function() {
        swiper.slidePrev();
    });


    var swiper1 = new Swiper('#main-slider-2', {
        nextButton: '#button-next-2',
        prevButton: '#button-prev-2',
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            800: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 10,
            }
        }
    });

    $('#button-next-2').click(function() {
        swiper1.slideNext();
    });
    $('#button-prev-2').click(function() {
        swiper1.slidePrev();
    });
}

function masonry() {
    var $grid = $('.grid').masonry({
        // options

        // do not use .grid-sizer in layout
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: 30
    });

    function onLayout() {}
    $grid.on('layoutComplete', onLayout);
}

function dots() {
    $('.grid-text').dotdotdot();
    $('.blog-text').dotdotdot();
    $('.resto-share-text').dotdotdot();
}

function like() {
    $('.catalog-like').click(function() {
        $(this).toggleClass('active');
    });
}

function catalogDetail() {
    var catalog = $('.js-catalog-hover'),
        animateTimeCatalog = 500,
        catalogHeight = $(catalog).outerHeight(true),
        catalogHeightResult = -catalogHeight;


    $('.js-catalog-hover').css('height', '0');
    $('.catalog-rating').css('padding-top', (catalogHeight + 30));

    $('.js-catalog-item').mouseenter(function() {
        $(this).addClass('hover');
        var catalogCurrent = $(this).find('.js-catalog-hover');
        if (catalogCurrent.height() === 0) {
            autoHeightAnimate(catalogCurrent, animateTimeCatalog);
            $(catalogCurrent).addClass('active');
            $(this).find('.catalog-absolute').css({ 'transform': 'translate(0, ' + catalogHeightResult + 'px)' });
        }
    });
    $('.js-catalog-item').mouseleave(function() {
        $(this).removeClass('hover');
        $(this).find('.js-catalog-hover').removeClass('active');
        var catalogCurrent = $(this).find('.js-catalog-hover');
        catalogCurrent.stop().animate({ height: '0', opacity: '0' }, animateTimeCatalog);
        $(this).find('.catalog-absolute').css({ 'transform': 'translate(0,0)' });

    });

    function autoHeightAnimate(element, time) {
        var curHeight = element.height() + 30, // Get Default Height
            autoHeight = element.css('height', 'auto').height(); // Get Auto Height
        element.height(curHeight); // Reset to Default Height
        element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
    }
}

function bron() {
    $('#bron').find('a[data-toggle]').click(function() {
        $(this).closest('#bron').modal('hide');
    });
}

function getFileName() {
    $('.fileContainer [type=file]').on('change', function() {
        for (var i = 0; i < this.files.length; i++) {
            var text = this.files[i].name;
            $('.js-file-name').removeClass('hidden');
            $('.js-file-name').append('<p class="alert alert-success">' + text + '<span class="js-fileName-remove"><i class="fa fa-times-circle" aria-hidden="true"></i></span></p>');
        }
    });

    $(document).on('click', '.js-fileName-remove', function() {
        $(this).closest('p').remove();
    });
}

function reviewRating() {
     $('.kv-ltr-theme-fa-star').rating({
        hoverOnClear: true,
        theme: 'krajee-fa',
        showCaption: false
    });
}