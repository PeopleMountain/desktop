var BroadcastIteam = function(w,h){
	var dom = document.createElement("div");
	dom.style.position = "absolute";
	dom.style.top = "5px";
	dom.style.left = "5px";
	dom.style.width = w - 10 + "px";
	dom.style.bottom = "150px";
	return dom;
}
/*
*Broadcast窗口容器大小
*输入轮播数量，存入轮播仓库
*/
var Broadcast = function(num){
	var Lib = [];
	var desktop = document.getElementById("desktop");
	var TOUCHX = 0;
	var distance = 0;
	var time = null;
	var state = [];
	function broadcast(i){
		this.currentCast = null;
		this.init(i);
	}
	broadcast.prototype = {
		init:function(size){
			for(var i = 0;i < size;i++){
				var dom = BroadcastIteam(desktop.clientWidth,desktop.clientHeight);
				this.eventReg(dom);
				var X = i * desktop.clientWidth + 5;
				dom.style.left = X + "px";
				state.push(X);
				Lib.push(dom);
				desktop.appendChild(dom);
			}
			this.currentCast = Lib[0];
		},
		getLib:function(){
			return Lib;
		},
		eventReg:function(dom){
			_this = this;
			function touchmove(e){
				e.preventDefault()
				var left = this.style.left;
				/*当前鼠标在window1上的x坐标*/
				var currentX = 0;
				currentX = (e.touches[0].pageX - getNum(left)).toFixed(0);
				distance = currentX-TOUCHX;
				for(var val of Lib){
					val.style.left = getNum(val.style.left) + distance + "px";
				}
			}
			function touchstart(e){
				clearInterval(time);
				e.preventDefault();
				TOUCHX = (e.touches[0].clientX).toFixed(0);
			}
			function touchend(){
				var _this = this;
				BROADCAST.changeWindow(this);
				TOUCHX = 0;
				distance = 0;
			}
			Event.addListener(dom,"touchmove",touchmove);
			Event.addListener(dom,"touchstart",touchstart);
			Event.addListener(dom,"touchend",touchend);
		},
		changeWindow:function(dom){
			var _this = dom
			var desktop_el = document.getElementById("desktop");
			var left = getNum(_this.style.left);
			if(typeof time == "object"){
				clearInterval(time);
			}
			if(Math.abs(left-5) > desktop_el.clientWidth/3 && (getNum(Lib[0].style.left) < 5 && getNum(Lib[Lib.length-1].style.left) > 5)){
				if(left-5<0){
					o3.changeRight();
				} else {
					o3.changeLeft();
				}
				BROADCAST.Next(left-5 < 0 ? "left" : "right");
			    time = setInterval(function(){
					var L = getNum(_this.style.left);
					if(L <= 0-desktop_el.clientWidth-5 || L >= desktop_el.clientWidth + 5){
						for(var val in Lib){
							Lib[val].style.left = state[val] + "px";
						}
						console.log("结束")
						clearInterval(time);
						return;
					}

					for(var val in Lib){
						Lib[val].style.left = getNum(Lib[val].style.left) + Math.ceil(L/20) + "px";
					}
					
				},10)
			} else {
				for(var val in Lib){
					Lib[val].style.left = state[val] + "px";
				}
			}
		},
		Next:function(str){
			var w = desktop.clientWidth * (str == "left" ? -1 : 1);
			for(var i in state){
				state[i] += w;
			}
		}
	}

	return new broadcast(num);
}
