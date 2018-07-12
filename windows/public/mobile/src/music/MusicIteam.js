var MUSICPATH = "./mobile/resources/music/"
var MusicIteam = function(arr){
	var MusicIteam = function(arr){
		this.info = arr;
		this.dom = document.createElement("p");
		this.audio = null;
		this.init();
	}
	MusicIteam.prototype = {
		init:function(){
			this.initDom(this.info);
			this.eventReg();
		},
		initDom:function(){
			this.dom.innerHTML = this.info.name;
			this.dom.style.height = "30px";
			this.dom.style.fontSize = "14px";
			this.dom.setAttribute("url",this.info.src);
			this.dom.style.textIndent = "1em"
			this.dom.style.lineHeight = "30px"
			this.dom.style.overFlow = "hidden"
			this.dom.style.borderBottom = "1px solid #B8B8B8";
		},
		eventReg:function(){
			var _this = this;
			Event.addListener(this.dom,"click",this.createAuido)
		},
		createAuido:function(){
			console.log(MusicUI().currentMusic)
			if(MusicUI().currentMusic != null){
				MusicUI().currentMusic.audio.pause();
				MusicUI().currentMusic.audio.currentTime = 0;
				MusicUI().currentMusic.dom.style.backgroundColor = "rgb(245, 245, 247)";
			}
			if(!_this.audio){
				var audio = document.createElement("audio");
				audio.preload = "auto";
				var source = document.createElement("source");
				source.src = MUSICPATH + _this.info.src;
				console.log(MUSICPATH + _this.info.src)
				audio.appendChild(source);
				_this.audio = audio;
			}
			_this.dom.style.backgroundColor = "#E3E3E5";
			console.log(_this)
			MusicUI().changeCurrentMusic(_this);
		}
	}
	var _this = new MusicIteam(arr);
	return _this;
}

