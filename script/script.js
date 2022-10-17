let mobileNavBar = document.querySelector('.mobileNavBar');
let menuListBlock = document.querySelector('.menuListBlock');

mobileNavBar.addEventListener('click', function(){
    menuListBlock.classList.toggle('menuListHeight');
})