var MyComputerIteamTouch = null;
var MyComputerIteamImage = function(info){
	this.src = info.src;
	this.dom = document.createElement("div");
	this.img = new Image();
	this.name = document.createElement("span");
	this.init(info);
}
MyComputerIteamImage.prototype = {
	init:function(info){
		this.name.innerHTML = info.name;

		this.dom.style.position = "absolute";
		this.dom.style.width = "100px";
		this.dom.style.height = "80px"

		this.name.style.position = "absolute";
		this.name.style.fontSize = "12px";
		this.name.style.lineHeight = "20px";
		this.name.style.bottom = "0px";
		this.name.style.left = "50%";
		this.name.style.display = "inline-block";
		this.name.style.transform = "translate(-50%,0)";

		this.img.src = info.src;
		this.img.style.width = "100px";
		this.img.style.height = "60px";

		this.dom.appendChild(this.name);
		this.dom.appendChild(this.img);

		this.eventReg();
	},
	eventReg:function(){
		var _this = this;
		function over(){
			if(MyComputerIteamTouch == this) return false;
			this.style.background = "#E5F3FF";
		}
		function out(){
			if(MyComputerIteamTouch == this) return false;
			this.style.background = "#ffffff";
		}
		function click(){
			if(MyComputerIteamTouch!=this && MyComputerIteamTouch){
				MyComputerIteamTouch.style.background = "#ffffff";
			}
			MyComputerIteamTouch = this;
			MyComputerIteamTouch.style.background = "#D9D9D9"
		}
		function dblclick(){
			PROCESS_LIB("IMAGE",_this.src);
		}
		this.dom.addEventListener("mouseover",over);
		this.dom.addEventListener("mouseout",out);
		this.dom.addEventListener("click",click)
		this.dom.addEventListener("dblclick",dblclick)
	}
}