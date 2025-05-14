import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';

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

try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Удаляем активный класс у всех табов и контента
            tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            // Добавляем активный класс к нажатому табу и показываем соответствующий контент
            tab.classList.add("catalog__tab_active");
            contents[index].style.display = "flex";
        });
    });

    // Показываем первый контент при загрузке
    contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) { }

try {
    const validator = new JustValidate(".git__form");

    validator
        .addField("#name", [
            {
                rule: "required",
                errorMessage: "need feel",
            },
            {
                rule: "minLength",
                value: 2,
                errorMessage: "min 2 char.",
            },
        ])
        .addField("#email", [
            {
                rule: "required",
            },
            {
                rule: "email",
            },
        ])
        .addField("#question", [
            {
                rule: "required",
            },
            {
                rule: "minLength",
                value: 5,
            },
        ],
            {
                errorsContainer: document
                    .querySelector("#question")
                    .parentElement.querySelector(".error-message"),
            }
        )
        .addField("#checkbox", [
            {
                rule: "required",
            },
        ],
            {
                errorsContainer: document
                    .querySelector("#checkbox")
                    .parentElement.parentElement.querySelector(".main-error-message"),
            });

} catch (e) { }

try {
    const footervalidator = new JustValidate(".footer__forms");
    footervalidator
        .addField(".footer__input", [
            {
                rule: "required",
            },
            {
                rule: "email",
            },
        ],
            {
                errorsContainer: document
                    .querySelector(".footer__input")
                    .parentElement.querySelector(".email-error-message"),
            })
        .addField(".footer__checkbox-input", [
            {
                rule: "required",
            },
        ],
            {
                errorsContainer: document
                    .querySelector(".footer__checkbox-input")
                    .parentElement.parentElement.querySelector(".checkbox-error-message"),
            });
} catch (e) { }