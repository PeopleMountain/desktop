
var MyComputer = function(){
	var computerRes = [
		{"name":"test.jpg","src":"./resources/image/mycomputer/test1.jpg"},
		{"name":"test.jpg","src":"./resources/image/mycomputer/test1.jpg"},
		{"name":"test.jpg","src":"./resources/image/mycomputer/test1.jpg"},
		{"name":"test.jpg","src":"./resources/image/desktop_bg_01.png"},
		{"name":"test.jpg","src":"./resources/image/mycomputer/test1.jpg"},
		{"name":"test.jpg","src":"./resources/image/mycomputer/test2.jpg"}
	]
	var skinPath = "./skin/MyComputerSkin.js";
	var MyComputer = BaseUI();

	MyComputer.prototype.loadOver = function(){
		let self = this.self;
		console.log(self)
		for(var i = 0,j=-1;i<computerRes.length;i++){
			var dom = new MyComputerIteamImage(computerRes[i]).dom;
			if(i%4==0){
				j++;
				dom.style.left = 20 + "px";
			} else {
				dom.style.left = i%4*105 + 20 + "px";
			}
			if(j == 0){
				dom.style.top = 20 + "px";
			} else {
				dom.style.top = j*90 + 20 + "px";
			}
			this.self.bottomRight.appendChild(dom);
		}

	}
	MyComputer.prototype.eventReg = function(){
			let self = this.self;
			self.mid.addEventListener("mousedown",function(e){
				e.stopPropagation();
			});
			self.bottom.addEventListener("mousedown",function(e){
				e.stopPropagation();
			});
			self.close.addEventListener("click",close);
			self.small.addEventListener("click",small);
			function close(e){
				e.stopPropagation();
				process_pool.del("MY_COMPUTER")
			}
			function small(e){
				e.stopPropagation();
				self.dom.style.display = "none";
			}
		}
	MyComputer.prototype.dispose = function(){
		new desktop().removeChild(this.self.dom);
		for(var val in this){
			EVENT.dispose(val);
			this[val] = null;
		}
	}
	var _this = new MyComputer(skinPath);
	return _this;
}

