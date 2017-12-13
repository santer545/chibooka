$(document).ready(function() {
    mobileNavbar();
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