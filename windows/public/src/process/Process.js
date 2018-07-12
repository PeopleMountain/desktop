var process = function(info,arg){
	function process(info,arg){
		this.key = info.key;
		this.name = info.name;
		this.icon = info.icon;
		this.process = arg ? new info.process(arg) : new info.process();
		this.dom = document.createElement("div");
		this.init();
	}
	process.prototype = {
		init:function(){
			this.loadProcess();
			this.loadline();
			this.eventReg();
			process_pool.push(this);
		},
		loadProcess:function(){
			this.dom.style.width = "50px";
			this.dom.style.height = "40px";
			this.dom.style.position = "absolute"
			this.dom.style.zIndex = "2"

			var image = new Image();
			image.style.width = "25px";
			image.style.display = "block";
			image.style.margin = "auto";
			image.style.marginTop = "6px";
			image.src = "./resources/image/desk_icon/" + this.icon;
			this.dom.appendChild(image);
		},
		loadline:function(){
			var line = document.createElement("div");
			line.style.height = "2px";
			line.style.backgroundColor = "#A4D1FF";
			line.style.position = "absolute";
			line.style.bottom = "0px";
			line.style.left = "4px";
			line.style.right = "4px";
			this.dom.appendChild(line);
		},
		eventReg:function(){
			var _this = this;
			this.dom.addEventListener("contextmenu",(e)=>{
				e.returnValue=false;
				process_pool.del(this.key);
			});
			this.dom.addEventListener("click",(e)=>{
				e.returnValue=false;
				if(_this.key == "MY_COMPUTER"){
					this.process.self.dom.style.display = this.process.self.dom.style.display ? "" : "none"
				}else{
					this.process.dom.style.display = this.process.dom.style.display ? "" : "none";
				}
			});
		},
		dispose:function(){
			console.warn("close process: " + this.key);
			var father = new taskbar().processArr;
			var child = this.dom;
			father.removeChild(child)
			for(var val in this){
				this[val] = null;
			}
		}
	}

	return new process(info,arg);
}
var process_pool = (function(){
	function pool(){
		this.arr = [];
	}
	pool.prototype = {
		push:function(obj){
			obj.dom.style.left = this.arr.length * 50 + "px";
			this.arr.push(obj);
			new taskbar().loadProcess(obj);
		},
		contrast:function(key){
			for(var val of this.arr){
				if(val.key == key){
					return;
				}
			}				
			process(RES[key],arguments[1]||null);
		},
		del:function(key){
			this.each(this.arr,(val,i)=>{
				if(val.key == key){
					val.process.dispose();
					val.dispose();
					this.arr.splice(i,1)
				}
				if(i-1 != this.arr.length){
					this.update();
				}
			})
		},
		update:function(){
			this.each(this.arr,(val,i)=>{
				this.arr[i].dom.style.left = i * 50 +"px";
			})
		},
		each:function(arr,callback){
			for(var i = 0;i<arr.length;i++){
				callback(arr[i],i);
			}
		}

	}
	return new pool();
})();
function PROCESS_LIB(str){
	console.warn("open process: " + str);
	if(str == "IMAGE" && arguments[1]) {
		process_pool.contrast(str,arguments[1]);
	} else{
		process_pool.contrast(str)
	}
}
