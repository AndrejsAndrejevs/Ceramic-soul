import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/style.scss";

const burger = document.querySelector('.burger'),
    menu = document.querySelector('.header__menu'),
    closeElem = document.querySelector('.header__menu_close');

burger.addEventListener('click', () => {
    menu.classList.add('active');
    document.body.style.overflow = "hidden";
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    document.body.style.overflow = "";
});

try {
    new Swiper('.works__slider', {
        // Default parameters
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".icon-right-open",
            prevEl: ".icon-left-open",
        },
        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            // when window width is >= 1920px
            1920: {
                slidesPerView: 3,
                spaceBetween: 35,
            },
        },
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
    });
} catch (e) { }
