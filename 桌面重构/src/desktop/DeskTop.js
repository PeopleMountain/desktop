
var desktop = function(){
	if(typeof desktop.instance == "object"){
		return desktop.instance;
	} 
	function desk(){
		this.dom = document.getElementById("desktop");
		this.contextmenu = new contextmenus();
		this.bg = ["desktop_bg_01","desktop_bg_02"];
		this.nextBg = 1;
		this.init();
	}
	desk.prototype = {
		init:function(){
			this.onloadBg();
			this.eventReg();
			this.onload();
		},
		onloadBg:function(){
			_this = this;
			var image = new Image();
			image.src = "./resources/image/desktop_bg_01.png";
			loading.run();
			image.onload = function(){
				setTimeout(()=>{
					console.warn("加载完毕");
					loading.stop();
					_this.dom.style.backgroundImage = "url(./resources/image/desktop_bg_01.png)";
					_this.dom.style.backgroundSize = "cover";
				},1000)
				
			}
		},
		onload:function(){
			this.dom.appendChild(this.contextmenu);
		},
		eventReg:function(){
		
			this.dom.addEventListener("contextmenu",(e)=>{
				e.returnValue=false;
				this.contextmenu.style.display = "";
				this.contextmenu.style.top = e.pageY + "px";
				this.contextmenu.style.left = e.pageX + "px";
			})
			this.dom.addEventListener("click",()=>{
				this.contextmenu.style.display = "none"
			},true)
			Event.addEvent("DESK_CHANGE",()=>{
				this.dom.style.backgroundImage = "url(./resources/image/" + this.bg[this.nextBg] + ".png";
				this.nextBg = this.nextBg == 1 ? 0 : 1;
			});
		},

	}
	desktop.instance = new desk().dom
	return desktop.instance;
}
