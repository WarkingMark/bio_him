let burger_button = document.querySelector('.burger-icon');
let burger_menu = document.querySelector('.burger-menu');

burger_button.addEventListener('click', () => {
    burger_button.classList.toggle('icon--active');
    burger_menu.classList.toggle('burger--active');
    document.body.classList.toggle('body--fixed')
})

let accardeons = document.querySelectorAll('.accardeon');

accardeons.forEach((e) => {
    let open_accardeon = e.querySelector('.accardeon-text');
    let list = e.querySelector('.footer-list');
    open_accardeon.addEventListener('click', () => {
        e.classList.toggle('accardeon--active');
    })
})