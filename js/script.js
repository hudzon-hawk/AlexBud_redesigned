var swiper = new Swiper('.about__slider', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    slideToClickedSlide: true,
    autoplay: {
        delay: 2500,
    },

});




var swiper = new Swiper('.project-all-slider', {
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    slidesPerView: 3,
    spaceBetween: 30,
    slideToClickedSlide: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        1300: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },
    centeredSlides: true,
    autoplay: {
        delay: 10000,
    },
    on: {
        slideChangeTransitionEnd: function () {
            var activeIndex = this.activeIndex;
            var activeSlide = this.slides[activeIndex];
            var childSwiperContainer = activeSlide.querySelector('.project-image-slider');
            if (childSwiperContainer) {
                var childSwiper = new Swiper(childSwiperContainer, {
                    loop: true,
                    autoplay: {
                        delay: 2000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true,
                    },
                    speed: 800,
                    effect: 'fade',
                    slideToClickedSlide: false,
                    centeredSlides: true,
                    nested: true,
                    fadeEffect: {
                        crossFade: true
                    },
                });
            }
        },
    },
});
