var imageResources = {
	"close":"./resources/image/icon/close.png",
	"small":"./resources/image/icon/small.png"
}
var ImgDetails = function(src){
	this.dom = createDargDiv(802,552);
	this.top = document.createElement("div");
	this.main = document.createElement("div");
	this.image = new Image();
	this.close = new Image();
	this.small = new Image();
	this.big = new Image();
	if(!src){
		this.src = "./resources/image/mycomputer/test1.jpg";
	} else {
		this.src  = src;
	}
	this.init();
}
ImgDetails.prototype = {
	init:function(){
		this.initSkin();
		this.eventReg();
	},
	initSkin:function(){
		this.dom.style.border = "1px solid #B8B8B8"
		this.dom.style.backgroundColor = "rgba(255,255,255,0)"
		this.top.style.position = "absolute";
		this.top.style.height = "30px";
		this.top.style.top = "1px";
		this.top.style.left = "1px";
		this.top.style.right = "1px";
		this.top.style.backgroundColor = "rgba(0,0,0,0.8)";

		this.main.style.position = "absolute";
		this.main.style.top = "31px";
		this.main.style.left = "1px";
		this.main.style.right = "1px";
		this.main.style.bottom = "1px";
		this.main.style.backgroundColor = "#222222";
		this.close.style.height = this.close.style.width = this.small.style.height = this.small.style.width = "20px";
		this.close.src = imageResources.close;
		this.small.src = imageResources.small;
		this.close.style.position = this.small.style.position = "absolute";
		this.small.style.right = "35px";
		this.close.style.right = "3px";
		this.small.style.top = this.close.style.top = "5px";
		this.top.appendChild(this.close);
		this.top.appendChild(this.small);
		this.top.appendChild(this.big);

		this.image.src = this.src;
		this.image.style.maxWidth = "800px";
		this.image.style.height = "auto";
		this.image.style.position = "absolute";
		this.image.style.top = "50%";
		this.image.style.left = "50%";
		this.image.style.transform = "translate(-50%,-50%)"

		this.main.appendChild(this.image);
		this.dom.appendChild(this.top);
		this.dom.appendChild(this.main);
		new desktop().appendChild(this.dom)
	},
	eventReg:function(){
		_self = this;
		function close(e){
			e.stopPropagation();
			process_pool.del("IMAGE")
		}
		function small(e){
			e.stopPropagation();
			_self.dom.style.display = "none";
		}
		this.main.addEventListener("mousedown",function(e){
			e.stopPropagation();
		})		
		this.close.addEventListener("click",close);
		this.small.addEventListener("click",small);
	},
	dispose:function(){
		new desktop().removeChild(this.dom);
		for(var val in this){
			EVENT.dispose(val);
			this[val] = null;
		}
	}
}