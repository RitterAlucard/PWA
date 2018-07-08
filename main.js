// Service Worker

if('serviceWorker' in navigator){
	console.log('Puedes usar los ServiceWorker en tu navegador');

	navigator.serviceWorker.register('./sw.js')
						   .then(res => console.log('ServiceWorker cargado correctamente', res))
                           .catch(err => console.log('ServiceWorker no se ha podido registrar', err));
	}else{
		console.log('No puedes usar los ServiceWorker en tu navegador');
}

//Scroll Suavizado
$(document).ready(function(){
	
	$("#menu a").click(function(e){
		e.preventDefault();

		$("html, body").animate({
			scrollTop: $($(this).attr('href')).offset().top
		});

		return false;
	});
});
	