$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('activ').animate()
        $('nav').toggleClass('active');
        $('body').toggleClass('hidden')
    })


    $('.list').click(function () {
        var value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.image').show('1000');
        } else {
            $('.image').filter('.' + value).show('1000');
            $('.image').not('.' + value).hide('1000');
        }
    })

    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active').children().css("color", "#FFF");
    })
})

