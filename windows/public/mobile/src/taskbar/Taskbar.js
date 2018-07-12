var taskbar = function(){
	if(typeof taskbar.instance == "object"){
		return taskbar.instance;
	}
	function a(){
		this.dom = document.createElement("div");
		this.process = [];
		this.windowsIcon = document.createElement("div");
		this.processArr = document.createElement("div");
		this.init();
	}
	a.prototype = {
		init:function(){
			this.initDom();
			this.loadWindowsBtn();
			this.processStage();
			this.eventReg();
			var dom = new desktop();
			dom.appendChild(this.dom);
		},
		initDom:function(){
			this.dom.zIndex = "2"
			this.dom.style.position = "absolute";
			this.dom.style.left = "0px";
			this.dom.style.right = "0px";
			this.dom.style.bottom = "0px";
			this.dom.style.height = "40px";
			this.dom.style.backgroundColor = "rgba(0,0,0,0.9)";
		},
		loadWindowsBtn:function(){
			this.windowsIcon.style.float = "left";
			this.windowsIcon.style.width = "60px";
			this.windowsIcon.style.height = "40px";
			var image = new Image();
			image.style.width = "25px";
			image.style.display = "block";
			image.style.margin = "auto";
			image.style.marginTop = "6px";
			image.src = "./resources/image/desk_icon/windows.png";
			this.windowsIcon.appendChild(image);
			this.dom.appendChild(this.windowsIcon);
		},
		processStage:function(){
			this.processArr.style.position = "absolute";
			this.processArr.style.top = "0px";
			this.processArr.style.left = "60px";
			this.processArr.style.right = "0px";
			this.processArr.style.bottom = "0px";
			this.dom.appendChild(this.processArr);
		},
		loadProcess:function(obj){
			this.processArr.appendChild(obj.dom);
		},
		eventReg:function(){
			this.dom.addEventListener("contextmenu",(e)=>{
				e.returnValue=false;
				e.stopPropagation();
			});
		}
	}
	taskbar.instance =new a();
	return taskbar.instance;
}

