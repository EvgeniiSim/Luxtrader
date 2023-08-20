const quotesSwiper = new Swiper('.quotes__swiper', {
    effect: 'fade',
    speed:1000,
    loop:true,
    navigation: {
        nextEl: '.quotes__decorDown-restart',
    },
    allowTouchMove: false,
    autoHeight: true
});
