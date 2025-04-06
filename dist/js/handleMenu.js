const handleMenu = function(){
	const body = document.body;
	const burger = document.querySelector('.burger');
	const closeBtn = document.querySelector('.header__navigation-close-btn');
	const menu = document.querySelector('.header__navigation');

	burger.addEventListener('click', () =>{
		menu.classList.add('header__navigation--active');
		body.classList.add('locked')
	});

	closeBtn.addEventListener('click', () =>{
		menu.classList.remove('header__navigation--active');
		body.classList.remove('locked');
	});
}
export {handleMenu};