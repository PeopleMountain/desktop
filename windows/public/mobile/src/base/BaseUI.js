/**所有UI的基类*/
var BaseUI = function(){
	/*工厂模式返回新对象*/
	function sub(obj){
		function F(){

		}
		F.prototype = obj;
		return new F();
	}
	function Super(){
		this.skin = null;
	}
	Super.prototype = {
		init:function(){
			this.loadOver();
			this.eventReg();
		},
		loadOver:function(){

		},
		eventReg:function(){

		},
		dispose:function(){
			for(var i in this.skin){
				if(typeof this.skin[i] == "object"){
					Event.removeListener(this.skin[i]);
				}
			}
		}
	}
	function baseUI(){
		Super.call(this);
	}
	var proto = sub(Super.prototype);
	proto.constructor = baseUI;
	baseUI.prototype = proto
	return new baseUI();
}