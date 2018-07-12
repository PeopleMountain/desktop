var DeskTop = function(){
	var desktop_el = document.getElementById("desktop");
	var desktop = BaseUI();
	desktop.skin = DeskTopSkin;
	desktop.init();
	return desktop.skin.dom;
}
