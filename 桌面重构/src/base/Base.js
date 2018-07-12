var Event = {
	_listeners:{},
	addEvent:function(type,fn){
		if(typeof this._listeners[type] === "undefined"){
			this._listeners[type] = [];
		}
		if(typeof fn === "function"){
			this._listeners[type].push(fn);
		}
		return this;
	},
	fireEvent:function(type){
		var arrayEvent = this._listeners[type];
		if(arrayEvent instanceof Array){
			for(var i = 0,length = arrayEvent.length;i<length;i++){
				if(typeof arrayEvent[i] === "function"){
					arrayEvent[i]({type:type});
				}
			}
		}
		return this;
	},
	removeEvent:function(type,fn){
		var arryEvent = this._listeners[type];
		if(typeof type === "string" && arryEvent instanceof Array){
			if(typeof fn === "function"){
				for(var i = 0,length = arrayEvent.length;i<length;i++){
					if(arrayEvent[i] === fn){
						this._listeners[type].splice(i,1);
						break;
					}
				}
			} else {
				delete this._listeners[type];
			}
		}
		return this;
	}
}

document.onselectstart = function(){return false;};

/**创建一个可移动的div窗口*/
var createDargDiv = function(width,height){
	var dom = document.createElement("div");
	dom.style.height = height + "px";
	dom.style.width = width + "px";
	dom.style.backgroundColor = "blue";
	dom.style.position = "absolute";
	dom.style.top = "30px";
	dom.style.left = "50%";
	dom.style.transform = "translate(-50%, 0)";
	dom.style.boxShadow = "5px 5px 5px rgba(0,0,0,0.8)";
	dom.style.zIndex = "3";
	function darg(e){
		e.stopPropagation();
		var mouseX = e.pageX- dom.offsetLeft + dom.offsetWidth/2;
		var mouseY = e.pageY - dom.offsetTop + dom.offsetHeight/2;
		document.addEventListener("mousemove",darg1);
		_dom = dom;
		function darg1(e){
			_dom.style.left = e.pageX + _dom.offsetWidth/2 - mouseX  + "px";
			_dom.style.top = e.pageY + _dom.offsetHeight/2 - mouseY + "px";
		}
		document.addEventListener("mouseup",removeEvent);
		function removeEvent(){
			document.removeEventListener("mousemove",darg1);
		}
	}
	dom.addEventListener("mousedown",darg);
	return dom;
}