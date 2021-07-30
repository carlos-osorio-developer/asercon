
// Objeto con propiedades de menu Movil

var propMenu = {

	burguer_menu : document.getElementById('burguer_menu'),
	slideMenu : document.getElementById('slide_menu'),
	menu_activo : false,
	elem_menu : document.querySelectorAll('#slide_menu .menu-principal a')

}





// Objeto con método de menu Movil


var metMenu = {

	inicio : function(){

		propMenu.burguer_menu.addEventListener('click', metMenu.toggleMenu);

		for (var i=0; i < propMenu.elem_menu.length; i++) {
			propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
		}

	},
	
	toggleMenu : function(){
		
		if( propMenu.menu_activo == false) {

			propMenu.menu_activo = true;
			propMenu.slideMenu.className= propMenu.slideMenu.className + ' active';
		}
		else{

			propMenu.menu_activo = false;
			propMenu.slideMenu.className= propMenu.slideMenu.className.replace('active','');
		}
	},

	ocultarMenu : function(){
		propMenu.menu_activo = false;
		propMenu.slideMenu.className= propMenu.slideMenu.className.replace('active','');
	}
}

metMenu.inicio();