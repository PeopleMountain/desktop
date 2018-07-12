/**每个应用需要先加载资源*/
var QQSkin = function(){
	var skin = BaseSkin();
	var title = span("Welcome Come MyQQ");
	title.style.fontSize = "20px"
	title.style.textAlign = "center"
	title.style.position = "absolute";
	title.style.top = "50%";
	title.style.left = "50%";
	title.style.transform = "translate(-50%,-50%)"
	skin.dom.appendChild(title);
	skin.dom.style.backgroundColor = "yellow";
	setTimeout(function(){
		skin.dom.style.display = "none";
		var title2 = span("没开发完。。。别看了");
		title2.style.fontSize = "20px"
		title2.style.textAlign = "center"
		title2.style.position = "absolute";
		title2.style.top = "50%";
		title2.style.left = "50%";
		title2.style.transform = "translate(-50%,-50%)"
		DESKTOP.appendChild(title2);
		setTimeout(function(){
			DESKTOP.removeChild(skin.dom);
			DESKTOP.removeChild(title2);
		},3000)
	},3000)
	skin.init();
	return QQSkin.instance;
}