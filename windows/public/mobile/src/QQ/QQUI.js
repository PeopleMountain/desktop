var QQIcon = function(){
	var icon = getIcon("./mobile/resources/image/desk_icon/QQ.png");
	Event.addListener(icon,"touchstart",click)
	function click(){
		console.log("click");
		QQSkin();
	}
	return icon;
}
var QQUI = function(){
	var qq = BaseUI();
	qq.name = "我的音乐";
	qq.init();
	return qq;
}