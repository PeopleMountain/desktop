function getIcon(src){
	var size = "70px";
	var icon = new Image();
	icon.src = src;
	icon.style.position = "absolute";
	icon.style.width = size;
	icon.style.height = size;
	icon.style.borderRadius = "5px";
	return icon;
}
function getNum(str){
		return parseInt(str.replace("px",""));
	}
function span(str){
	var dom = document.createElement("span");
	dom.innerHTML = str;
	return dom;
}
