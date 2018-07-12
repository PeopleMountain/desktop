var contextmenus = function(){
	if(typeof contextmenus.instance == "object"){
		return contextmenus.instance;
	}
	function menu(){
		this.menu = {
				DESK_REFRESH:"刷新",
				DESK_CHANGE_BG:"更换桌面背景",
				NEW_SET:"新建",
				DESK_SEL_ATTR:"属性"
			}
		this.ul = document.createElement("ul")
		this.init();
	}
	menu.prototype = {
		init:function(){
			this.createMenu();
			this.eventReg();
		},
		createMenu:function(){
			this.ul.style.display = "none";
			this.ul.style.backgroundColor = "#ffffff";
			this.ul.style.width = "150px";
			this.ul.style.border = "1px solid blue";
			this.ul.style.position = "absolute";
			this.ul.style.zIndex = "2";
			this.Each(this.menu,(val,arr)=>{
				var li = document.createElement("li");
				li.innerHTML = arr[val];
				li.style.textAlign = "center";
				li.style.fontSize = "14px";
				li.onmouseover = function(){
					this.style.backgroundColor = "rgba(0,0,0,0.3)"
				}
				li.onmouseout = function(){
					this.style.backgroundColor = ""
				}
		
				li.onclick = function(){
					Event.fireEvent(val)
				}
				this.ul.appendChild(li);
			})
				
		},
		Each:function(arr,callback){
			for(var val in arr){
				callback(val,arr)
			}
		},
		eventReg:function(){
			Event.addEvent("DESK_CHANGE_BG",function(){
				console.log("更换桌面背景");
				Event.fireEvent("DESK_CHANGE")
			});
			Event.addEvent("DESK_SEL_ATTR",function(){
				console.log("桌面属性")
			});
		}
	}
		contextmenus.instance = new menu().ul;
		return contextmenus.instance;
}