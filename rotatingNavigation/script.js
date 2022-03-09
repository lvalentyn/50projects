const open = document.querySelector('#open'),
	close = document.querySelector('#close'),
	wrapper = document.querySelector('.wrapper')

open.addEventListener('click', () => wrapper.classList.add('show-nav'))
close.addEventListener('click', () => wrapper.classList.remove('show-nav'))
