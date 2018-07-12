var scorll = function(menu,father){

	function scorll(menu,father){
		this.father = father;
		this.menu = menu
		this.scroll = document.createElement("div");
		this.scroll_y = document.createElement("div");
		this.sh = 0;
		this.init();
	}
	scorll.prototype = {
		init:function(){
			this.initScorll();
			this.initScorll_y();
			this.eventReg();
		},
		initScorll:function(){
			this.addClass(this.scroll,{"width":"10px","position":"absolute","top":"0px","bottom":"0px","right":"0px","z-index":"4"})


			this.father.appendChild(this.scroll);
		},
		initScorll_y:function(){
			this.addClass(this.scroll_y,{"width":"8px","position":"absolute","top":"0px","border-radius":"4px","background-color":"rgba(0,0,0,0.3)"})
			var viewHeightAll = this.menu.offsetHeight;
	        var viewHeight = this.father.offsetHeight;
	        var height = 2 * viewHeight - viewHeightAll;
	        this.sh = viewHeightAll-viewHeight;
       		this.scroll_y.style.height = height + 'px';
			this.scroll.appendChild(this.scroll_y);
		},
		addClass:function(dom,arr){
			for(var val in arr){
				dom.style[val] = arr[val];
			}
		},
		getTop:function(dom){
	        var top = dom.style.top;
	        return parseInt(top.replace(/px/,"")) || 0;
   		},
		eventReg:function(){
			if(this.sh == 0){
				this.scroll.style.display = "none";
				return;	
			} 
			var scroll = this.scroll_y;
	        var scroll_top = this.getTop(this.scroll);
	        var friends_top = this.getTop(this.menu);
	        var friends = this.menu;
	        console.log(scroll_top)
	        var sh = this.sh;
			document.onmousewheel = function(e){
		        var sp = 20;
		        if(e.wheelDelta>=0){
		            if(friends_top + sp <= 0){
		            	friends_top += sp;
		                scroll_top -= sp
		                friends.style.top = friends_top + "px";
		                scroll.style.top = scroll_top + 'px';
		            } else {
		            	friends_top = 0;
		                scroll_top = 0;
		                friends.style.top = 0 + "px";
		                scroll.style.top = 0 + 'px';
		            }
		        }else{
		            if(friends_top + sh - sp > 0){
		                friends_top -= sp;
		                scroll_top += sp
		                friends.style.top = friends_top + "px";
		                scroll.style.top = scroll_top + 'px';
		            } else {
		            	friends_top = -sh;
		                scroll_top = sh;
		                friends.style.top = -sh + "px";
		                scroll.style.top = sh + 'px';
		            }
		        }
		    }
		}
	}
	
	return new scorll(menu,father);
}