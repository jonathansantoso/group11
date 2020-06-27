const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

const menuToggle = document.querySelector('.menu-icon input');
const nav = document.querySelector('.header-right a');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
});