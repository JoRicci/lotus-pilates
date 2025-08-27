let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let btnClose = document.querySelector('.btn-close');

// abrir menu
btnMenu.addEventListener('click', () => {
   menu.classList.add('abrir-menu');
   overlay.classList.add('ativo'); // ativa overlay
});

// fechar pelo botão X
btnClose.addEventListener('click', () => {
   menu.classList.remove('abrir-menu');
   overlay.classList.remove('ativo');
});

// fechar clicando fora (overlay)
overlay.addEventListener('click', () => {
   menu.classList.remove('abrir-menu');
   overlay.classList.remove('ativo');
});

window.addEventListener("scroll", function () {
   const header = document.querySelector("header");
   header.classList.toggle("scrolled", window.scrollY > 50);
});