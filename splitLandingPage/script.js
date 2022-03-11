const container = document.querySelector('.container'),
	leftCol = document.querySelector('.left'),
	rightCol = document.querySelector('.right')

leftCol.addEventListener('mouseenter', () => container.classList.add('hover-left'))
leftCol.addEventListener('mouseleave', () => container.classList.remove('hover-left'))
rightCol.addEventListener('mouseenter', () => container.classList.add('hover-right'))
rightCol.addEventListener('mouseleave', () => container.classList.remove('hover-right'))