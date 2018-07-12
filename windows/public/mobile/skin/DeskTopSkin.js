var DeskTopSkin = (function(){
	var desk = BaseSkin();
	var dom = document.getElementById("desktop");
	dom.style.backgroundImage = "url(./mobile/resources/image/desktop_bg_01.png)"
	dom.style.backgroundSize = "cover";
	desk.dom = dom;
	return desk;
})()

var O3 = function(){
	var height = "5px";
	var tab = document.createElement("div");
	tab.style.position = "absolute";
	tab.style.width = "50px"
	tab.style.height = "20px";
	tab.style.bottom = "120px";
	tab.style.left= "50%";
	tab.style.transform = "translate(-50%,0)";
	function getO(){
		var div = document.createElement("div");
		div.style.position = "absolute";
		div.style.backgroundColor = "rgba(0,0,0,0.8)";
		div.style.height = div.style.width = height;
		div.style.borderRadius = height;
		return div;
	}
	var o1 = getO();
	var o2 = getO();
	var o3 = getO();
	o1.style.top = o2.style.top = o3.style.top = "50%";
	o1.style.left = "0px"
	o2.style.left = "50%";
	o2.style.transform = "translate(-50%,0)";

	o3.style.right = "0px";
	tab.appendChild(o1);
	tab.appendChild(o2);
	tab.appendChild(o3);
	DeskTopSkin.dom.appendChild(tab);
	function o(){
		this.state = o1;
		this.changeState(this.state)
	}
	o.prototype = {
		changeLeft:function(){
			if(this.state == o1) return;
			if(this.state == o2) this.changeState(o1);
			if(this.state == o3) this.changeState(o2);
		},
		changeRight:function(){
			if(this.state == o3) return;
			if(this.state == o2) this.changeState(o3);
			if(this.state == o1) this.changeState(o2);
		},
		changeState:function(obj){
			this.state.style.backgroundColor = "rgba(0,0,0,0.8)";
			obj.style.backgroundColor = " #FFFFFF";
			this.state = obj;
		}
	}
	return new o();
}
var o3 = O3();

