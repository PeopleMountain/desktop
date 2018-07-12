
var BaseUI = function(){
		function sub(obj){
		function F(){

		}
		F.prototype = obj;
		return new F();
	}
	function Super(skinPath){
		this.skinPath = skinPath;
		this.file_name = skinPath.replace(/(.*\/)*([^.]+).*/ig,"$2")
		this.initSkin();
	}
	Super.prototype = {
		init:function(){
			this.self = new skinLib[this.file_name]();
			this.loadOver();
			this.eventReg();
		},
		initSkin:function(){
			dynamicLoadJs(this.skinPath,()=>{this.init()});
		},
		loadOver:function(){

		},
		eventReg:function(){
		},
		dispose:function(){

		}
	}
	function baseUI(skinPath){
		Super.call(this,skinPath);
	}
	let proto = sub(Super.prototype);
	proto.constructor = baseUI;
	baseUI.prototype = proto;
	return baseUI;
}

