var ProcessBar = function(w,h){
	var father = document.createElement("dom");
	var son = document.createElement("dom");
	father.style.position = "absolute";
	father.style.width = w + "px";
	father.style.height = h + "px";
	father.style.backgroundColor = "#52433A";
	son.style.position = "absolute";
	son.style.left = "0px";
	son.style.right = "0px";
	son.style.top = "0px";
	son.style.bottom = "0px";
	son.style.backgroundColor = "#11A4F0";
	father.appendChild(son);
	function mousedown(e){
		var length = e.touches[0].pageX - father.offsetLeft
		son.style.right = w - length + "px";
		Event.addListener(father,"touchmove",ProcessBarMousemove)
		Event.addListener(document,"touchend",ProcessBarMouseup)
	}
	function ProcessBarMouseup(){
		Event.removeListener(father,"touchmove",ProcessBarMousemove)
		Event.removeListener(document,"touchend",ProcessBarMouseup)
	}
	function ProcessBarMousemove(e){
		var length = e.touches[0].pageX - father.offsetLeft
		if(length>w || length<0){
			return;
		} else {
			son.style.right = w - length + "px";
		}
	}
	function processBar(width){
		this.width =  width,
		this.dom = father;
		this.bar = son;
		this.eventReg();
	}
	processBar.prototype = {
		changeProccessBar:function(x){
			if(w<x || x < 0){
				return;
			}
			son.style.right = w - x + "px";
		},
		eventReg:function(){
			Event.addListener(father,"touchstart",mousedown)
		}
	}
	return new processBar(w);
}