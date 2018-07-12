var loading = (function(){
	function loading(){
		this.text = "loading";
		this.widht = 0;
		this.height = 0;
		this.stage = null;
		this.constructor();
	}
	loading.prototype = {
		constructor:function(){
			document.getElementById("canvas").style.display = "none";
			document.getElementById("canvas").style.backgroundColor = "#000000";
			this.changeCanvas();
			this.regEvent();
			this.time = null;
		},
		run:function(){
			console.log("正在加载")
			document.getElementById("canvas").style.display = "";
			var c = document.getElementById("canvas");
			this.time = setInterval(()=>{
				this.stage.clearRect(0,0,c.width,c.height);  
				if(this.text.split(".").length-1 <= 6){
					this.text += ".";
				}
				if(this.text.split(".").length-1 > 6){
					this.text = "loading";
				}
				this.stage.strokeText(this.text,this.width/2-120,this.height/2-25);
			},500)
		},
		stop:function(){
			clearInterval(this.time);
			document.getElementById("canvas").style.display = "none";
		},
		changeCanvas:function(){
			var h = document.getElementById("desktop").clientHeight;
			var w = document.getElementById("desktop").clientWidth;
			document.getElementById("canvas").height = h;
			document.getElementById("canvas").width = w;
			this.height = h;
			this.width = w;
			var canvas = document.getElementById("canvas");
			var cxt = canvas.getContext('2d');
			cxt.font = "oblique small-caps bold 50px Arial";
			cxt.strokeStyle  = "#FFFFFF";
			cxt.strokeText("loading",this.width/2-120,this.height/2-25);
			this.stage = cxt;
		},
		regEvent:function(){
			window.onresize = ()=>{
				this.changeCanvas();
			}
		}
	}
	return new loading();
})()
