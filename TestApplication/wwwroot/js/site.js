// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    let location = (window.location.pathname + window.location.search).substr(1);
    if (location === '') $('.d-menu').hide();
    $('#myDropdown').click(function (e) {
        $(this).children('.d-menu').toggle();
        e.stopPropagation();

    })
});