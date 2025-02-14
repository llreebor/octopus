// Mobile Menu
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if (!burger.classList.contains('active')) {
			burger.classList.add('active')
			body.classList.add('locked')
		} else {
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
	// Вот тут мы ставим брейкпоинт навбара
	window.addEventListener('resize', () => {
		if (window.innerWidth > 767.99) {
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
}
burgerMenu()

// Accordion
function accordion() {
	const items = document.querySelectorAll('.accordion__item')
	const triggers = document.querySelectorAll('.accordion__trigger')
	const contents = document.querySelectorAll('.accordion__content')
	triggers.forEach((trigger, idx) => {
		if (items[0].classList.contains('active')) {
			contents[0].classList.add('active')
		}
		trigger.addEventListener('click', () => {
			const parent = trigger.parentNode
			if (!parent.classList.contains('active')) {
				// If you want only one to be open at a time, and others to close - UNCOMMENT the code below.
				items.forEach((item, i) => {
					if (i !== idx && item.classList.contains('active')) {
						item.classList.remove('active')
					}
				})
				// Open the current accordion item
				parent.classList.add('active')
			} else {
				// Close the current accordion item
				parent.classList.remove('active')
			}
		})
	})
}
accordion()
