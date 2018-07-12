var MUSIC = null;
var MusicIcon = function(){
	var icon = getIcon("./mobile/resources/image/desk_icon/music.png");
	function click(){
		if(!MUSIC){
			MUSIC = MusicUI();
		} else {
			MUSIC.skin.dom.style.display = "block";
		}
	}
	Event.addListener(icon,"touchstart",click)
	return icon;
}
var MusicUI = function(){
	if(typeof MusicUI.instance == "object"){
		return MusicUI.instance;
	}
	var duration = 0;
	var music = BaseUI();
	music.currentMusic = null;
	music.skin = MusicSkin();
	music.name = "我的音乐";
	var skin = music.skin;
	var self = music;
	var menu = [];
	music.eventReg = function(){
		Event.addListener(skin.back,"touchstart",back)
		Event.addListener(skin.up,"touchstart",upMusic)
		Event.addListener(skin.next,"touchstart",nextMusic)
		Event.addListener(skin.processBar.dom,"touchstart",barTouchstart)
	}
	music.changeCurrentMusic = function(obj){
		if(this.currentMusic){
			Event.removeListener(this.currentMusic)
			Event.addListener(skin.play,"touchstart",playChange)
		}
		this.currentMusic = obj;
		Event.addListener(obj.audio,"play",musicPlay);
		Event.addListener(skin.play,"touchstart",playChange)
		Event.addListener(obj.audio,"timeupdate",setCurrentTime);
		Event.addListener(obj.audio,"seeking",seeking);
		Event.addListener(obj.audio,"seeked",seeked);
		Event.addListener(obj.audio,"canplay",musicCanplay);
		skin.setCurrentMusicName(self.currentMusic.info.name);
		skin.setAuthor(self.currentMusic.info.author);
	}
	function seeking(){
		skin.tip.innerHTML = "正在加载...";
		skin.tip.style.display = "";
	}
	function seeked(){
		skin.tip.style.display = "none";
	}
	function back(){
		skin.dom.style.display = "none";
	}
	function barTouchstart(e){
		var length = e.touches[0].pageX - skin.processBar.dom.offsetLeft;
		self.currentMusic.audio.currentTime = length;
		Event.addListener(skin.processBar.dom,"touchmove",barTouchmove)
		Event.addListener(document,"touchend",barTouchup)
	}
	function barTouchmove(e){
		var length = e.touches[0].pageX - skin.processBar.dom.offsetLeft;
		self.currentMusic.audio.currentTime = length;
	}
	function barTouchup(){
		Event.removeListener(skin.processBar.dom,"touchmove",barTouchmove)
		Event.removeListener(document,"touchend",barTouchup)
	}
	function musicPlay(){
		skin.MusicPlay();
	}
	function playChange(){
		if(!self.currentMusic.audio.paused){
			self.currentMusic.audio.pause();
			skin.MusicPause();
		} else {
			skin.MusicPlay();
			self.currentMusic.audio.play();
		}
	}
	function setCurrentTime(){
		this.currentTime/duration*skin.processBar.width;
		var width = this.currentTime/duration*skin.processBar.width;
		skin.processBar.changeProccessBar(width);
		var time = getTime(this.currentTime);
		skin.setCurrentTime(time);
	}
	function getTime(time){
		var minute = (time/60 < 10 ? "0" : "") + Math.floor(time/60);
		var second = (time%60 < 10 ? "0" : "") + Math.floor(time%60);
		return minute + ":" + second;
	}
	function musicCanplay(){
		console.warn("歌曲加载完毕:" + self.currentMusic.info.name);
		self.currentMusic.audio.play();
		duration = this.duration;
		skin.setTime(getTime(this.duration))
	}
	function setMenu(){
		for(var val in music_lib){
			var iteam = new MusicIteam(music_lib[val]);
			iteam.dom.setAttribute("key",val)
			menu.push(iteam);
			skin.menu.appendChild(iteam.dom);
		}
	}
	function upMusic(){
		if(!self.currentMusic.dom.previousSibling) return false;
		var key = self.currentMusic.dom.previousSibling.getAttribute("key")
		menu[key].createAuido();
	}
	function nextMusic(){
		if(!self.currentMusic.dom.nextSibling) return false;
		var key = self.currentMusic.dom.nextSibling.getAttribute("key")
		menu[key].createAuido();
	}
	setMenu();
	music.skin.init();
	music.init();
	MusicUI.instance = music;
	return MusicUI.instance;
}
