var MyComputerSkin = function(){
	var res = {
		close:"./resources/image/icon/close_black.png",
		small:"./resources/image/icon/small_black.png",
		up:"./resources/image/icon/up.png",
		down:"./resources/image/icon/down.png",
		back:"./resources/image/icon/back.png",
		searchIcon:"./resources/image/icon/search_icon.png",
	}
	var menu = {
		"0":"快速访问",
		"1":"此电脑",
		"2":"网络",
		"3":"家庭组"
	}
	function myComputer(){
		this.dom = createDargDiv(600,500);
		this.top = document.createElement("div");
		this.mid = document.createElement("div");
		this.close = new Image();
		this.small = new Image();
		this.up = new Image();
		this.down = new Image();
		this.back = new Image();
		this.menu = document.createElement("ul");
		this.address = document.createElement("div");
		this.search = document.createElement("input");
		this.bottom = document.createElement("div");
		this.bottomLeft = document.createElement("div");
		this.bottomRight = document.createElement("div");
		this.constructor();
	}
	myComputer.prototype = {
		constructor:function(){
			this.initDom();
			this.initTop();
			this.initMid();
			this.initBottom();
			this.initMain();
			this.initMenu();
		},
		initDom:function(){
			new desktop().appendChild(this.dom)

			console.log("皮肤加载成功")
		},
		initTop:function(){
			this.top.style.position = "absolute";
			this.top.style.top = "0";
			this.top.style.left = "0";
			this.top.style.right = "0";
			this.top.style.height = "30px";
			this.top.style.borderBottom = "1px solid #B8B8B8";
			this.top.style.backgroundColor = "#ffffff"


			var span = document.createElement("span");
			span.style.fontSize = "14px"
			span.style.lineHeight = "30px"
			span.style.marginLeft = "3px";
			span.innerHTML = "我的电脑"

			this.close.src = res.close;
			this.small.src = res.small;

			this.close.style.width = this.small.style.width = "20px";
			this.close.style.height = this.small.style.height = "20px";

			this.close.style.position = this.small.style.position = "absolute";
			this.close.style.top = this.small.style.top = "3px";

			this.close.style.right = "3px";
			this.small.style.right = "23px";

			this.top.appendChild(this.close)
			this.top.appendChild(this.small)
			this.top.appendChild(span)
			this.dom.appendChild(this.top);
		},
		initMid:function(){
			this.mid.style.position = "absolute";
			this.mid.style.top = "31px";
			this.mid.style.left = "0";
			this.mid.style.right = "0";
			this.mid.style.height = "23px";
			this.mid.style.borderBottom = "1px solid #B8B8B8"
			this.mid.style.backgroundColor = "#ffffff"

			this.up.src = res.up;
			this.down.src = res.down;
			this.back.src = res.back;
			this.up.style.position = this.down.style.position = this.back.style.position = "absolute";
			this.up.style.width = this.down.style.width = this.back.style.width = "20px";
			this.up.style.height = this.down.style.height = this.back.style.height = "20px";
			this.up.style.top = this.down.style.top = this.back.style.top = "2px";
			this.up.style.left = "40px";
			this.down.style.left = "3px";
			this.back.style.left = "70px";

			this.address.style.position = "absolute";
			this.address.style.width = "300px"
			this.address.style.height = "16px";
			this.address.style.left = "120px";
			this.address.style.top = "3px";
			this.address.style.border = "1px solid #B8B8B8";



			var div = document.createElement("div");
			div.style.position = "absolute";
			div.style.padding = "0px";
			div.style.right = "3px"
			div.style.width = "150px"
			div.style.height = "100%";
			div.style.right = "5px";
			div.style.borderBottom = "0px";
			this.search.style.border = "0px";
			this.search.style.height = "15px";
			this.search.style.width = "100%";
			this.search.style.border = "1px solid #B8B8B8";
			var searchIcon = new Image();
			searchIcon.src = res.searchIcon;
			searchIcon.style.width = searchIcon.style.height = "16px";
			searchIcon.style.position = "absolute";
			searchIcon.style.right = "0px";
			searchIcon.style.top = "5px";
			div.appendChild(searchIcon);
			div.appendChild(this.search);

			this.mid.appendChild(this.up);
			this.mid.appendChild(this.down);
			this.mid.appendChild(this.back);
			this.mid.appendChild(this.address);
			this.mid.appendChild(div);
			this.dom.appendChild(this.mid);
		},
		initBottom:function(){
			this.bottom.style.position = "absolute";
			this.bottom.style.top = "55px";
			this.bottom.style.left = "0";
			this.bottom.style.right = "0";
			this.bottom.style.bottom = "0";
			this.bottom.style.backgroundColor = "#ffffff"

			this.bottomLeft.style.position = this.bottomRight.style.position = "absolute";
			this.bottomLeft.style.left = "0";
			this.bottomLeft.style.top = "0";
			this.bottomLeft.style.width = "119px";
			this.bottomRight.style.left = "120px";
			this.bottomRight.style.right = "0px";
			this.bottomRight.style.top = "0px";
			this.bottomRight.style.bottom = this.bottomLeft.style.bottom = "0px";

			this.bottomLeft.style.backgroundColor = "#FFFFFF";
			this.bottomLeft.style.borderRight = "1px solid #B8B8B8";

			this.bottom.appendChild(this.bottomLeft);
			this.bottom.appendChild(this.bottomRight);
			this.dom.appendChild(this.bottom);
		},
		initMenu:function(){
			this.menu.style.fontSize = "14px";
			for(let val in menu){
				var li = document.createElement("li");
				li.style.width = "100%";
				li.style.height = "20px";
				li.style.marginTop = "10px"
				li.style.marginLeft = "10px"
				li.innerHTML = menu[val];
				this.menu.appendChild(li);
			}
			this.bottomLeft.appendChild(this.menu);
		},
		/**初始化我的电脑主要区域，显示文件或非文件图标*/
		initMain:function(arr){
			for(var i in arr){
				if(arr[i].isFile){

				} else {

				}
			}
		}
	}
	return new myComputer();
}
skinLib["MyComputerSkin"] = MyComputerSkin;