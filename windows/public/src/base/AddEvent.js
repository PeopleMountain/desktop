var EVENT = (function(){
	function event(){
		this.arr = [];
		this.init();
	}
	event.prototype = {
		init:function(){

		},
		add:function(dom,event,fun){
			dom.addEventListener(event,fun);
			this.arr.push({"dom":dom,"event":event,"fun":fun});
		},
		remove:function(dom,event,fun){
			for(var val of arr){
				if(val.dom == dom && val.event == event && val.fun == fun){
					dom.removeEventListener(event,fun);
					this.arr.remove(val);
				}
			}
		},
		dispose:function(dom){
			for(var val of this.arr){
				if(val.dom == dom){
					this.remove(val.dom,val.event,val.fun)
				}
			}
		}
	}

	return new event();
})();