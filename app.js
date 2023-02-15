const option = document.querySelector('.option');
const menu = document.querySelector('#menu');
const closemenu= document.querySelector('.closemenu');

menu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show() {
	option.style.display = 'flex';
	option.style.top = '0';
}

menu.addEventListener('click', show);

function close() {
	option.style.top = '-100%';
}

closemenu.addEventListener('click', close);

