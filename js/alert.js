"use strict";
// const closeButton = document.querySelectorAll("[data-close-button]");
// close-button
// closeButton.forEach(button => {
    // button.addEventListener('click', function () {
    //     this.parentElement.classList.add('hide-anim');
    //     setTimeout(() => {
    //         this.parentElement.classList.add('hide');
    //     }, 200);
    // });
// });

function closePop(el){
    // el.parentElement.classList.add('hide-anim');
    // setTimeout(() => {

        // alertss
        const elem = document.getElementById('alertss');
        elem.parentNode.removeChild(elem);
        // el.parentElement.classList.add('hide');
    // }, 200);
}