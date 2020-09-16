document.addEventListener("DOMContentLoaded", function(){
	const elm = document.querySelector('#menu-items');
    elm.addEventListener('click', ()=>{
		const menuElm = document.querySelector('#navigation_bar')
		menuElm.classList.toggle("navigation_bar_rsp");
	})
});