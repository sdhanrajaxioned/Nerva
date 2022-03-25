$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('activ')
        $('nav').toggleClass('active');
        $('body').toggleClass('hidden')
    })

    $('.list').click(function () {
        var value = $(this).attr('data-filter');

        if (value === 'all') {
            $('.tab-image').show('1000');
        } else {
            $('.tab-image').hide('1000');
            $('.tab-image[data-img-filter=' + value + ']').show('1000');
        }

        $(this).addClass('active').siblings().removeClass('active');
    })
})

