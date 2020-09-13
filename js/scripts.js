document.addEventListener("DOMContentLoaded", function(){
	var elm = document.querySelector('#menu-items');
    elm.addEventListener('click', (elm)=>{
		if (elm.style.display === 'none')
		{
			console.log('soy none');
		}
	})
});