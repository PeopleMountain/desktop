/**
*所有皮肤的基类
*/
var BaseSkin = function(){
	function sub(obj){
		function Fun(){

		}
		Fun.prototype = obj
		return new Fun();
	}
	var dom = document.createElement("div");
	dom.style.position = "absolute";
	dom.style.top = "0";
	dom.style.left = "0";
	dom.style.right = "0";
	dom.style.bottom = "0";
	dom.style.zIndex = "3";
	function Super(obj){
		this.dom = dom;
	}
	Super.prototype = {
		init:function(){
			DESKTOP.appendChild(this.dom);
			this.initDom();
			this.initButton();
		},
		initDom:function(){

		},
		initButton:function(){

		}
	}
	function baseSkin(){
		Super.call(this)
	}
	var proto = sub(Super.prototype);
	proto.constructor = baseSkin;
	baseSkin.prototype = proto;
	return new baseSkin();
}
