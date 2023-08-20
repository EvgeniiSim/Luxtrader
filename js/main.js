const userIcon = document.querySelector('.head-actions__user-img');
const region = document.querySelector('.head-actions__region-label');
const actionSubMenus = document.querySelectorAll('.actions-submenu');
document.addEventListener('click', function(e) {
    if(e.target == userIcon || e.target == region) {
        let itemMenu = e.target.closest('[data-menu]');
        actionSubMenus.forEach(item => {
            item.classList.remove('_active')
        })
        itemMenu.nextElementSibling.classList.toggle('_active');
    } else {
        actionSubMenus.forEach(item => {
            item.classList.remove('_active')
        })
    }
})
///////////////
/// MENU STARTS
///////////////
const menu = document.querySelector('.head__menu');
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const bodyBehind = document.querySelector('.body-behind');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    menuBody.classList.toggle('active');
    document.body.classList.toggle('_lock')
    bodyBehind.classList.toggle('active')
});
///////////////
/// MENU ENDS
///////////////