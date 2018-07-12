var MUSIC_IMG = {
	next:"./resources/image/music/music_next.png",
	up:"./resources/image/music/music_up.png",
	play:"./resources/image/music/music_play.png",
	pause:"./resources/image/music/music_pause.png",
	voice:"./resources/image/music/voice.png",
	noVoice:"./resources/image/music/voice_no.png",
	narrow:"./resources/image/music/music_narrow.png",
	close:"./resources/image/icon/close.png",
	small:"./resources/image/icon/small.png",
}
var Music = function(){
	function music(){
		this.dom = document.createElement("div");
		this.menu = document.createElement("div");
		this.top = document.createElement("div");
		this.currentMusic = document.createElement("span");
		this.music_time = document.createElement("span");
		this.mp3 = song(this.getMusic("1"));
		this.currentMp3 = {};
		this.time = document.createElement("p");
		this.intval = null;
		this.close = new Image();
		this.small = new Image();
		this.play = new Image();
		this.stop = new Image();
		this.next = new Image();
		this.up = new Image();
		this.narrow = new Image();
		this.voice = document.createElement("div");
		this.progress_bar = document.createElement("div");
		this.mp3Lib = music_lib;
		this.init();
	}
	music.prototype = {
		init:function(){
			this.initSkin();
			this.initTop();
			this.initMenu();
			this.initCurrentMusic();
			this.initButton();
			this.initTime();
			this.initMusicTime();
			this.mp3Event();

			this.eventReg();
		},
		initTime:function(){
			this.time.innerHTML = "00:00";
			this.time.style.position = "absolute";
			this.time.style.top = "30px";
			this.time.style.left = "5px";
			this.time.style.fontSize = "14px";
			this.top.appendChild(this.time);
		},
		initCurrentMusic:function(){
			var div = document.createElement("div");
			div.style.position = "relative";
			div.style.width = "150px";
			div.style.overflow = "hidden";
			this.currentMusic.style.position = "relative";
			this.currentMusic.style.color = "#FFFFFF";
			this.currentMusic.style.left = "5px";
			this.currentMusic.style.fontSize = "14px";
			this.currentMusic.innerHTML = this.mp3.name;
			this.currentMusic.style.whiteSpace = "nowrap";
			div.appendChild(this.currentMusic);
			this.top.appendChild(div);
		},
		initMusicTime:function(){
			this.music_time.style.display = "inline-block";
			this.music_time.innerHTML = "/00:00";
			this.music_time.style.position = "absolute";
			this.music_time.style.top = "30px";
			this.music_time.style.left = "40px";
			this.music_time.style.fontSize = "14px";
			this.top.appendChild(this.music_time);
		},
		initSkin:function(){
			this.dom.style.position = "absolute";
			this.dom.style.width = "300px";
			this.dom.voice = "1";
			this.dom.style.top = "30px";
			this.dom.style.left = "50%";
			this.dom.style.transform = "translate(-50%, 0)";
			// this.dom.style.boxShadow = "5px 5px 5px rgba(0,0,0,0.8)";
			this.dom.style.zIndex = "3";
			this.dom.style.backgroundColor = "#FAFAFA";
			new desktop().appendChild(this.dom);
		},
		initButton:function(){
			this.play.src = MUSIC_IMG.play;
			this.stop.src = MUSIC_IMG.pause;
			this.next.src = MUSIC_IMG.next;
			this.up.src = MUSIC_IMG.up;

			this.statePlay(true);
			this.play.style.position = this.stop.style.position = "absolute";
			this.play.style.width = this.play.style.height = this.stop.style.width = this.stop.style.height = "32px";
			this.play.style.left = this.stop.style.left = "50%";
			this.play.style.top = this.stop.style.top = "50px";
			this.play.style.transform = this.stop.style.transform = "translate(-50%, 0px)";

			this.next.style.position = this.up.style.position = "absolute"
			this.next.style.width = this.up.style.width = this.next.style.height = this.up.style.height = "20px";
			this.narrow.style.width = this.narrow.style.height = "20px";
			this.next.style.top = this.up.style.top = "56px";
			this.next.style.right = this.up.style.left = "50px";

			this.close.style.width = this.small.style.width = "20px";
			this.close.style.height = this.small.style.height = "20px";

			this.close.style.position = "absolute";
			this.close.src = MUSIC_IMG.close;
			this.close.style.right = "3px";
			this.close.style.top = "3px";

			this.small.style.position = "absolute";
			this.small.src = MUSIC_IMG.small;
			this.small.style.right = "30px";
			this.small.style.top = "3px";

			this.narrow.style.position = "absolute";
			this.narrow.src = MUSIC_IMG.narrow;
			this.narrow.style.right = "57px";
			this.narrow.style.top = "3px";

			var voice_father = document.createElement("div");
			voice_father.style.position = "absolute";
			voice_father.style.right = "5px";
			voice_father.style.bottom = "5px";
			voice_father.style.width = "100px";
			voice_father.style.height = "8px";
			voice_father.style.overflow = "hidden";
			voice_father.style.backgroundColor = "#E6E6E8";
			this.voiceFather = voice_father;
			this.voice.style.position = "absolute";
			this.voice.style.left = "0px";
			this.voice.style.right = "0px";
			this.voice.style.top = "0px";
			this.voice.style.bottom = "0px";
			this.voice.style.backgroundColor = "#FFFFFF";
			voice_father.appendChild(this.voice);

			var progress_bar_father = document.createElement("div");

			this.top.appendChild(this.play);
			this.top.appendChild(this.stop);
			this.top.appendChild(this.close);
			this.top.appendChild(this.small);
			this.top.appendChild(this.narrow);
			this.top.appendChild(this.next);
			this.top.appendChild(this.up);
			this.top.appendChild(voice_father);
			this.top.appendChild(progress_bar_father);
		},
		statePlay:function(state){
			this.play.style.display = state ? "" : "none";
			this.stop.style.display = state ? "none" : "";
		},
		initTop:function(){
			this.top.style.position = "relative";
			this.top.style.width = "300px";
			this.top.style.height = "100px";
			this.top.style.backgroundColor = "#C62F2F";
			this.dom.appendChild(this.top);
		},
		initMenu:function(){
			this.menu.style.position = "absolute";
			this.menu.style.top = "100px";
			this.menu.style.width = "300px";
			this.menu.style.height = "400px"
			this.menu.style.backgroundColor = "#F5F5F7";
			this.menu.style.overflow = "hidden";
			var div = document.createElement("div");
			div.style.position = "absolute";
			div.style.height = "400px";
			div.style.width = "100%";
			for(var i = 0;i<music_lib.length;i++){
				var iteam = this.createMenuIteam(music_lib[i].name,music_lib[i].key);
				if(i%2 != 0){
					iteam.style.backgroundColor = "#FAFAFA";
				} else {
					iteam.style.backgroundColor = "#FFFFFF";
				}
				div.appendChild(iteam);
			}
			this.menu.appendChild(div);
			this.dom.appendChild(this.menu);
			scorll(div,this.menu);
		},
		createMenuIteam:function(name,key){
			var p = document.createElement("p");
			p.style.height = "25px"; 
			p.style.fontSize = "14px"; 
			p.style.lineHeight = "25px"; 
			p.style.paddingLeft = "5px"; 
			p.innerHTML = name;
			p.key = key;
			if(key == 1){
				this.statePlay(true);
				this.currentMp3.dom = p;
				this.currentMp3.bgColor = p.style.backgroundColor;
				p.style.backgroundColor = "#E3E3E5"
				this.mp3 = song(this.getMusic(1));
				this.mp3Event();
			}
			p.addEventListener("dblclick",()=>{
				this.statePlay(true);
				if(this.currentMp3["dom"]) this.currentMp3.dom.style.backgroundColor = this.currentMp3.bgColor;
				this.currentMp3.dom = p;
				this.currentMp3.bgColor = p.style.backgroundColor;
				p.style.backgroundColor = "#E3E3E5"
				if(this.mp3){
					clearInterval(this.intval);
					this.mp3.dispose();
				}
				this.mp3 = song(this.getMusic(p.key));
				this.mp3Event();
				this.mp3.play();
			})
			return p;
		},
		getMusic:function(key){
			for(var val of music_lib){
				if(val.key == key){
					return val;
				}
			}
		},
		dispose:function(){
			new desktop().removeChild(this.dom);
			clearInterval(this.intval);
			if(this.mp3){
				this.mp3.dispose();
			}
			for(var val in this){
				this[val] = null;
			}
		},
		eventReg:function(){
			var _this = this;
			function darg(e){
				e.stopPropagation();
				var self = _this;
				var mouseX = e.pageX- _this.dom.offsetLeft + _this.dom.offsetWidth/2;
				var mouseY = e.pageY - _this.dom.offsetTop + _this.dom.offsetHeight/2;
				document.addEventListener("mousemove",darg1);
				function darg1(e){
					self.dom.style.left = e.pageX + self.dom.offsetWidth/2 - mouseX  + "px";
					self.dom.style.top = e.pageY + self.dom.offsetHeight/2 - mouseY + "px";
				}
				document.addEventListener("mouseup",removeEvent);
				function removeEvent(){
					document.removeEventListener("mousemove",darg1);
				}
			}
			function nextMusic(e){
				console.log("next")
				e.stopPropagation();
				if(_this.currentMp3["dom"]) _this.currentMp3.dom.style.backgroundColor = _this.currentMp3.bgColor;
				if(_this.currentMp3.dom.key == music_lib.length){
					var p = _this.currentMp3.dom.parentNode.firstChild;
				}else{
					var p = _this.currentMp3.dom.nextSibling;
				}
				_this.currentMp3.dom = p;
				_this.currentMp3.bgColor = p.style.backgroundColor;
				p.style.backgroundColor = "#E3E3E5"
				if(_this.mp3){
					clearInterval(_this.intval);
					_this.mp3.dispose();
				}
				_this.mp3 = song(_this.getMusic(p.key));
				_this.mp3Event();
				_this.mp3.play();
			}
			function upMusic(e){
				e.stopPropagation();
				if(_this.currentMp3["dom"] != "undefined") _this.currentMp3.dom.style.backgroundColor = _this.currentMp3.bgColor;
				if(_this.currentMp3.dom.key == 1){
					var p = _this.currentMp3.dom.parentNode.lastChild;
				}else{
					var p = _this.currentMp3.dom.previousSibling;
				}
				_this.currentMp3.dom = p;
				_this.currentMp3.bgColor = p.style.backgroundColor;
				p.style.backgroundColor = "#E3E3E5"
				if(_this.mp3){
					clearInterval(_this.intval);
					_this.mp3.dispose();
				}
				_this.mp3 = song(_this.getMusic(p.key));
				_this.mp3Event();
				_this.mp3.play();
			}

			this.top.addEventListener("mousedown",darg);
			this.close.addEventListener("click",(e)=>{
				e.stopPropagation();
				process_pool.del("MUSIC");
			})
			this.small.addEventListener("click",(e)=>{
				e.stopPropagation();
				this.dom.style.display = "none";
			})
			this.voiceFather.addEventListener("mousedown",(e)=>{
				e.stopPropagation();
				var event = e;
				var father = this.voice.parentNode;
				var skin = this.dom;
				var dom = this.voice;
				var music = this.mp3.audio;
				var right = skin.offsetLeft - skin.offsetWidth/2 + father.offsetLeft + father.offsetWidth - event.pageX;
				dom.style.right = right + "px";
				var mousemove = function(event){
					event.stopPropagation();

					var right = skin.offsetLeft - skin.offsetWidth/2 + father.offsetLeft + father.offsetWidth - event.pageX;
					if(right<=100 && right > 0){
						dom.style.right = right + "px";
						music.volume = (100 - right)/100;
						skin.voice = (100 - right)/100;
					}
				}
				document.addEventListener("mousemove", mousemove)
				document.addEventListener("mouseup",()=>{
					document.removeEventListener("mousemove",mousemove);
				})
			})
			this.next.addEventListener("click",nextMusic);
			this.up.addEventListener("click",upMusic);

			this.next.addEventListener("mousedown",function(e){
				e.stopPropagation();
			});
			this.up.addEventListener("mousedown",function(e){
				e.stopPropagation();
			});
			this.close.addEventListener("mousedown",function(e){
				e.stopPropagation();
			});
			this.small.addEventListener("mousedown",function(e){
				e.stopPropagation();
			});
			this.narrow.addEventListener("mousedown",function(e){
				e.stopPropagation();
			});
			this.narrow.addEventListener("click",function(e){
				if(_this.menu.style.display){
					_this.menu.style.display = "";
				} else {
					_this.menu.style.display = "none";
				}
			})
			
		},
		
		getLeft:function(str){
			return parseInt(str.replace("px",""));
		},
		
		loadstart:function(){
			console.log("开始请求歌曲")
		},
		progress:function(){
			console.log("正在请求数据")
		},
		durationchange:function(){
			console.log("资源长度改变")
		},
		mp3Event:function(){
			var _this = this;
			this.play.addEventListener("mousedown",function(e){
				e.stopPropagation();
			})
			this.stop.addEventListener("mousedown",function(e){
				e.stopPropagation();
			})
			this.play.addEventListener("click",(e)=>{
				e.stopPropagation();

				this.mp3.play();
				this.statePlay(false);
			})
			this.stop.addEventListener("click",(e)=>{
				e.stopPropagation();

				this.mp3.pause();
				this.statePlay(true);
			})
			function timeupdate_fn(){
				if(_this.mp3){
					_this.time.innerHTML = _this.mp3.getCurrentTime();
				}
			}
			this.mp3.audio.addEventListener("timeupdate",timeupdate_fn);
			this.mp3.audio.addEventListener("loadstart",_this.loadstart)
			this.mp3.audio.addEventListener("progress",_this.progress)
			this.mp3.audio.addEventListener("durationchange",_this.durationchange)
			this.mp3.audio.addEventListener("canplay",()=>{
					console.warn("歌曲加载完毕:" + _this.mp3.name);
					var time = Math.floor(_this.mp3.audio.duration)
					var time1 = _this.mp3.getTime(time)
					_this.music_time.innerHTML = "/ " + time1;
 				})
			this.mp3.audio.addEventListener("play",()=>{
				console.log("开始播放")
				
				this.statePlay(false);
				this.mp3.audio.volume = this.dom.voice;
				var width = 150;
				if(this.intval){
						clearInterval(this.intval);
				}
				this.currentMusic.style.left = "5px";
				this.currentMusic.innerHTML = this.mp3.name;
				if(this.currentMusic.offsetWidth > 150){
					this.intval = setInterval(()=>{
						if(!this.currentMusic) return;
						if(this.getLeft(this.currentMusic.style.left) + this.currentMusic.offsetWidth == 0){
							this.currentMusic.style.left = "150px";
						} else {
							this.currentMusic.style.left = this.getLeft(this.currentMusic.style.left)-1 + "px";
						}
					},100)
				}
			})
			function nextMusic(e){
				console.log("next")
				e.stopPropagation();
				if(_this.currentMp3["dom"]) _this.currentMp3.dom.style.backgroundColor = _this.currentMp3.bgColor;
				if(_this.currentMp3.dom.key == music_lib.length){
					var p = _this.currentMp3.dom.parentNode.firstChild;
				}else{
					var p = _this.currentMp3.dom.nextSibling;
				}
				_this.currentMp3.dom = p;
				_this.currentMp3.bgColor = p.style.backgroundColor;
				p.style.backgroundColor = "#E3E3E5"
				if(_this.mp3){
					clearInterval(_this.intval);
					_this.mp3.dispose();
				}
				_this.mp3 = song(_this.getMusic(p.key));
				_this.mp3Event();
				_this.mp3.play();
			}
			this.mp3.audio.addEventListener("ended",nextMusic)

		}
	}
	return new music();
} 

var song = function(info){
	function song(info){
		this.key = info.key;
		this.name = info.name;
		this.src = info.src;
		this.audio = document.createElement("audio");
		this.source = document.createElement("source");
		this.source.src = "./resources/music/" + info.src;
		this.init();
	}
	song.prototype = {
		init(){
			this.audio.hidden = "hidden";
			this.audio.appendChild(this.source);
		},
		getCurrentTime:function(){
			var time = Math.floor(this.audio.currentTime);
			return this.getTime(time);
		},
		getTime:function(time){
			return this.getMinute(time) + ":" + this.getSecond(time);
		},
		getMinute:function(time){
			return (time/60 < 10 ? "0" : "") + Math.floor(time/60);
		},
		getSecond:function(time){
			return (time%60 < 10 ? "0" : "") + time%60;
		},
		play:function(){
			this.audio.play();
		},
		pause:function(){
			this.audio.pause();
		},
		dispose:function(){
			this.audio.pause();
			for(var val in this){
				this[val] = null;
			}
		}
	}
	return new song(info);
}