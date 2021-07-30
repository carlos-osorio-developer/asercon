(function(){


// Objeto con propiedades de tabs

var propTabs = {

	primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
	primer_contenido: document.getElementById('contenido_menu').firstElementChild,
	enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'),
	li_encabezado: document.querySelectorAll('#encabezado_menu li'),
	div_contenido: document.querySelectorAll('#contenido_menu >div'),
	contenido_activo: null

}


// Objeto con métodos de tabs

var metTabs = {

	inicio : function(){
		propTabs.primer_encabezado.className = 'active';
		propTabs.primer_contenido.className = 'active';

		for (var i = 0; i < propTabs.enlaces_encabezado.length; i++) {
			propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
		}
	},

	evento : function(e){
		e.preventDefault();
		for (var i = 0; i < propTabs.li_encabezado.length; i++) {
			propTabs.li_encabezado[i].className='';
		}
		for (var i = 0; i < propTabs.div_contenido.length; i++) {
			propTabs.div_contenido[i].className='';
		}

		this.parentElement.className = 'active';
		propTabs.contenido_activo = this.getAttribute('href');
		document.querySelector(propTabs.contenido_activo).className = 'active';
		document.querySelector(propTabs.contenido_activo).style.opacity = 0;
		setTimeout(function(){
			document.querySelector(propTabs.contenido_activo).style.opacity = 1;
		}, 100);
	}
}

metTabs.inicio();


}())