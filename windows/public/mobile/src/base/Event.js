/*事件监听*/
var EventLib = [];
var Event = (function(){
	function event(){

	}
	event.prototype = {
		forEach:function(arr,callback){
			for(var i=0;i<arr.length;i++){
				if(!callback(arr[i],i)){
					return;
				};
			}
		},
		addListener:function(dom,type,fun){
			var _this = this;
			dom.addEventListener(type,fun);
			if(EventLib.length == 0){
				EventLib.push({"dom":dom,"datil":[{"type":type,"fun":fun}]});
				return;
			}
			function a(val,i){
				if(val.dom == dom){
					val.datil.push({"type":type,"fun":fun});
					return false;
				}
				if(i == (EventLib.length-1)){
					EventLib.push({"dom":dom,"datil":[{"type":type,"fun":fun}]});
				}
				return true
			}
			this.forEach(EventLib,a)
		},
		removeListener:function(dom,type,fun){
			var _this = this;
			function b(val,i){
				if(val.dom == dom){
					function removeEventLib(arr,j){
							if(arr.type == type && arr.fun == fun){
								dom.removeEventListener(arr.type,arr.fun);
								val.datil.splice(arr,1);
							}
							if(typeof type == "undefined"){
								dom.removeEventListener(arr.type,arr.fun);
								val.datil.splice(arr,1);
							}
							if(val.datil.length==0){
								EventLib.splice(val);
								console.log(EventLib)
							}
					}
					_this.forEach(val.datil,removeEventLib)
				}
			}
			this.forEach(EventLib,b)
		},

	}
	return new event();
})()