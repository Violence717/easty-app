const menuCall = () => {
    const hamburger = $('.hamburger');

    hamburger.click(() => {

        if ($('.hamburger__middle-item').hasClass('hamburger__middle-item_animated')) {
            $('.hamburger__top-item').removeClass('hamburger__top-item_animated');
            $('.hamburger__middle-item').removeClass('hamburger__middle-item_animated');
            $('.hamburger__bottom-item').removeClass('hamburger__bottom-item_animated');

            $('.circle').removeClass('pop-up-menu');

            $('.search-form').removeClass('search-form_visible');
            $('.search-form').addClass('search-form_hidden');
        } else {
            $('.hamburger__top-item').addClass('hamburger__top-item_animated');
            $('.hamburger__middle-item').addClass('hamburger__middle-item_animated');
            $('.hamburger__bottom-item').addClass('hamburger__bottom-item_animated');

            $('.circle').addClass('pop-up-menu');

            $('.search-form').removeClass('search-form_hidden');
            $('.search-form').addClass('search-form_visible');
        }

    })
}

menuCall();