var Process = function(pre){
	var key = pre.key;
	var name = pre.name;
	var icon = pre.icon;
	var app = pre.process;
	function process(){
		this.init();
	}
	process.prototype = {
		init:function(){
		},
		eventReg:function(){

		},
		dispose:function(){

		}
	}
	return new process(pre);
}
var PROCESS_POOL = function(){
	var pool = [];
	function ProcessPool(){

	}
	ProcessPool.prototype = {
		push:function(obj){
			// obj.dom.style.left = pool.length * 50 + "px";
			pool.push(obj);
			// new taskbar().loadProcess(obj);
		},
		contrast:function(key){
			for(var val of pool){
				if(val.key == key){
					return;
				}
			}				
			process(APPRES[key]);
		},
		del:function(key){
			this.each(pool,(val,i)=>{
				if(val.key == key){
					val.process.dispose();
					val.dispose();
					pool.splice(i,1)
				}
				if(i-1 != pool.length){
					this.update();
				}
			})
		},
		update:function(){
			this.each(pool,(val,i)=>{
				pool[i].dom.style.left = i * 50 +"px";
			})
		},
		each:function(arr,callback){
			for(var i = 0;i<arr.length;i++){
				callback(arr[i],i);
			}
		}

	}

} 
var NEW_PROCESS = function(pre){
	console.warn("[OPEN]" + pre);
	PROCESS_POOL.contrast(pre);
}