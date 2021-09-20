
// function burgerMenu() {
//     let menu = document.querySelector(".bm__wpap");
//     let button = menu.querySelector(".bm__button");
//     let links = menu.querySelectorAll(".bm-set__link");
//     let overlay = menu.querySelector(".bm__overlay");


//     button.addEventListener("click", (e) => {
//         e.preventDefault();
//         toggleMenu();
//     });
//     [].forEach.call(links, function (el) {
//         el.addEventListener("click", () => toggleMenu());
//     });
//     overlay.addEventListener("click", () => toggleMenu());


//     function toggleMenu() {
//         menu.classList.toggle("bm_active");
//         if (menu.classList.contains("bm_active")) {
//             document.body.style.overflow = "hidden";
//         } else {
//             document.body.style.overflow = "visible";
//         }
//     }
// }
// burgerMenu();

function burgerMenu() {
    let menu = document.querySelector(".burger-menu");
    let button = menu.querySelector(".burger-menu__button");
    let links = menu.querySelectorAll(".burger-menu__link");
    let overlay = menu.querySelector(".burger-menu__overlay");


    button.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMenu();
    });
    [].forEach.call(links, function (el) {
        el.addEventListener("click", () => toggleMenu());
    });
    overlay.addEventListener("click", () => toggleMenu());


    function toggleMenu() {
        menu.classList.toggle("burger-menu_active");
        if (menu.classList.contains("burger-menu_active")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }
}
burgerMenu();

console.log('test');