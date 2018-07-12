var deskIcon = (function(){
	function setEl(str,width,height){
		var dom = document.createElement(str);
		if(width && height){
			dom.style.width = width + "px";
			dom.style.height = height + "px";
		}
		return dom;
	}
	var beforeIcon = null;
	function icon(info){
		this.info = info;
		this.dom = setEl("div",70,70);
		this.image = setEl("div",60,50);
		this.name = setEl("p");
		this.state = false;
		this.init();
	}
	icon.prototype = {
		init:function(){
			this.dom.style.position = "absolute";
			this.dom.style.borderRadius = "5px";

			this.image.style.backgroundImage = "url(./resources/image/desk_icon/" + this.info.icon + ")";
			this.image.style.backgroundSize = "contain";
			this.image.style.backgroundRepeat = "no-repeat";
			this.image.style.backgroundPosition = "center";
			this.image.style.margin = "auto";

			this.name.style.fontSize = "14px";
			this.name.style.textAlign = "center";
			this.name.innerHTML = this.info.name;

			this.dom.appendChild(this.image);
			this.dom.appendChild(this.name);
			this.eventReg();
		},
		eventReg:function(){

			this.dom.addEventListener("mouseover",()=>{
				if(!this.state){
					this.dom.style.backgroundColor = "rgba(255,255,255,0.3)";
				}
			})
			this.dom.addEventListener("mouseout",()=>{
				if(!this.state){
					this.dom.style.backgroundColor = "";
				}
			})
			this.dom.addEventListener("dblclick",()=>{
				PROCESS_LIB(this.info.key);
			})
			this.dom.addEventListener("click",(e)=>{
				e.cancelBubble = true;
                e.stopPropagation();
				this.dom.style.backgroundColor = "rgba(255,255,255,0.5)";
				if(beforeIcon){
					if(beforeIcon.info.name != this.info.name){
						beforeIcon.dom.style.backgroundColor = '';
						beforeIcon.state = false;
					}
				}
				this.state = true;
				beforeIcon = this;
			},true)
			new desktop().addEventListener("click",()=>{
				if(beforeIcon){
					beforeIcon.dom.style.backgroundColor = '';
					beforeIcon.state = false;
				}
			})
		}

	}

	return function(info){
		return new icon(info).dom;
	};
})();
// (function(){
// 	var top = 0;
// 	var left = 0;
// 	for(var process in RES){
// 		var dom = deskIcon(RES[process]);
// 		dom.style.left = ((left * 90) || 10) + "px"; 
// 		dom.style.top = ((top * 80) || 10) + "px"; 
// 		if(top % 7 == 0 && top != 0){
// 			left++;
// 			top = -1;	
// 		}  
// 		desktop.appendChild(dom);
// 		top++;
// 	}
// })()
