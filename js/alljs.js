//  ПОП-АП ОКНА ДЛЯ КОМНАТ
"use strict";

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 300;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function(e) {
            if (popupLink.classList.contains('standart')) {
                const curentPopup = document.querySelector('.popup__standart');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('family')) {
                const curentPopup = document.querySelector('.popup__family');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('delux')) {
                const curentPopup = document.querySelector('.popup__delux');
                popupOpen(curentPopup);
            } else if (popupLink.classList.contains('lux')) {
                const curentPopup = document.querySelector('.popup__lux');
                popupOpen(curentPopup);
            }
            e.preventDefault();
        });
    }
}



const popupCloseIcon = body.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function(e) {
            body.classList.remove('lock');
            body.style.paddingRight = '0px';
            if (e.target.closest('.popup')) {
                const curentPopup = e.target.closest('.popup');
                curentPopup.classList.remove('open');
            }
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function(e) {
            if (!e.target.closest('.popup__content')) {
                curentPopup.classList.remove('open');
                body.classList.remove('lock');
                body.style.paddingRight = '0px';
            }
        });
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.site-wrap').offsetWidth + 'px';
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function() {
        unlock = true;
    }, timeout);
}