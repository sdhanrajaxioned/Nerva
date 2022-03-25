$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('activ')
        $('nav').toggleClass('active');
        $('body').toggleClass('hidden')
    })

    $('.list').click(function () {
        var $buttonData = $(this).data('filter');
        $images = $('.tab-images .tab-image');
        $images.each(function () {
            var $imgData = $(this).data('img-filter')
            console.log(this);
            var $img = this;
            console.log($img)
            if ($buttonData === 'all') {
                $($img).show('500');
            } else if ($buttonData === $imgData) {
                $($img).show('500');
            } else {
                $($img).hide('500');
            }
        })

        $(this).addClass('active').siblings().removeClass('active');
    })
})

