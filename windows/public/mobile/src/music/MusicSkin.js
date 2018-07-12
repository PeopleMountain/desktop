/**每个应用需要先加载资源*/
var MusicSkin = function(){
	var skin = BaseSkin();
	skin.RES = {
		next:"./resources/image/music/music_next.png",
		up:"./resources/image/music/music_up.png",
		pause:"./resources/image/music/music_play.png",
		play:"./resources/image/music/music_pause.png",
		voice:"./resources/image/music/voice.png",
		noVoice:"./resources/image/music/voice_no.png",
		narrow:"./resources/image/music/music_narrow.png",
		close:"./resources/image/icon/close.png",
		small:"./resources/image/icon/small.png",
	}
	function getTitle(){
		var title = span("Welcome Come MyMusic");
		title.style.fontSize = "20px"
		title.style.textAlign = "center"
		title.style.position = "absolute";
		title.style.top = "50%";
		title.style.left = "50%";
		title.style.transform = "translate(-50%,-50%)"
		return title;
	}
	function getLoading(){

	}
	function getHeader(){
		var top = document.createElement("div");
		top.style.position = "absolute";
		top.style.top = "0px";
		top.style.left = "0px";
		top.style.right = "0px";
		top.style.height = "45px";
		top.style.backgroundColor = "#C62F2F";
		return top;
	}
	function getBody(){
		var body = document.createElement("div");
		body.style.position = "absolute";
		body.style.top = "45px";
		body.style.left = "0px";
		body.style.right = "0px";
		body.style.bottom = "80px";
		body.style.backgroundColor = "#F5F5F7";
		body.style.overflow = "hidden";
		return body;
	}
	function getMenu(){
		var menu = document.createElement("div");
		menu.style.position = "absolute";
		menu.style.left = "0px";
		menu.style.right = "0px";
		return menu;
	}
	function getFooter(){
		var footer = document.createElement("div");
		footer.style.position = "absolute";
		footer.style.left = "0px";
		footer.style.right = "0px";
		footer.style.bottom = "0px";
		footer.style.height = "80px";
		footer.style.backgroundColor = "#C62F2F";
		skin.up = getUpMusic();
		skin.next = getNextMusic();
		skin.play = getPlayMusic();
		skin.currentMusicName = getcurrentMusicName();
		skin.currentMusicAuthor = getcurrentMusicAuthor();
		var div = document.createElement("div");
		div.style.position = "absolute";
		div.style.left = "100px";
		div.style.bottom = "5px";
		div.appendChild(skin.currentMusicName);
		div.appendChild(skin.currentMusicAuthor);
		footer.appendChild(div);
		footer.appendChild(skin.up);
		footer.appendChild(skin.next);
		footer.appendChild(skin.play);
		return footer;
	}
	function getTip(){
		var span = document.createElement("span");
		span.style.position = "absolute";
		span.style.left = "150px";
		span.style.fongSize = "12px";
		span.style.lineHeight = "12px"
		span.style.top = "20px";
		span.style.display = "";
		span.innerHTML = "暂无播放";
		return span;
	}
	function getCurrentTime(){
		var span = document.createElement("span");
		span.style.position = "absolute";
		span.style.left = "100px";
		span.style.fongSize = "12px";
		span.style.lineHeight = "12px"
		span.style.top = "20px";
		span.innerHTML = "00:00";
		return span;
	}
	function songHeader(str){
		var size = "80px";
		var image = new Image();
		image.src = str;
		image.style.height = size;
		image.style.width = size;
		image.style.position = "absolute";
		image.style.left = "10px";
		image.style.bottom = "10px";
		image.style.backgroundColor = "#ffffff";
		image.style.borderRadius = size;
		return image;
	}
	function getBackBtn(str){
		var size = "30px";
		var image = new Image();
		image.src = str;
		image.style.height = size;
		image.style.width = size;
		image.style.position = "absolute";
		image.style.left = "5px";
		image.style.bottom = "10px";
		return image;
	}
	function getUpMusic(){
		var size = "25px";
		var image = new Image();
		image.src = skin.RES.up;
		image.style.position = "absolute";
		image.style.right = "105px";
		image.style.bottom = "10px"
		image.style.height = size;
		image.style.width = size;
		return image;
	}
	function getNextMusic(){
		var size = "25px";
		var image = new Image();
		image.src = skin.RES.next;
		image.style.position = "absolute";
		image.style.right = "10px";
		image.style.bottom = "10px"
		image.style.height = size;
		image.style.width = size;
		return image;
	}
	function getPlayMusic(){
		var size = "40px";
		var image = new Image();
		image.src = skin.RES.pause;
		image.style.position = "absolute";
		image.style.right = "50px";
		image.style.bottom = "5px"
		image.style.height = size;
		image.style.width = size;
		return image;
	}
	function getcurrentMusicName(){
		var span = document.createElement("span");
		span.style.display = "inline-block"
		span.style.fontSize = "14px";
		span.style.lineHeight = "14px"
		span.style.width = "180px"
		return span;
	}
	function getcurrentMusicAuthor(){
		var span = document.createElement("span");
		span.style.fontSize = "12px";
		span.style.lineHeight = "12px";
		span.style.color = "#ffffff"
		span.style.display = "block"
		return span;
	}
	function getTime(){
		var span = document.createElement("span");
		span.style.position = "absolute";
		span.style.fontSize = "14px";
		span.style.lineHeight = "14px";
		span.style.right = "10px";
		span.style.top = "8px";
		span.innerHTML = "3:00"
		return span;
	}
	var processBar = ProcessBar(DESKTOP.clientWidth - 150,5);
	processBar.dom.style.top = "10px";
	processBar.dom.style.left = "100px";

	var time = getTime();
	var title = getTitle();
	var header = getHeader();
	var body = getBody();
	var footer = getFooter();
	var back = getBackBtn("./mobile/resources/image/icon/back.png");
	var songHeader = songHeader("./mobile/resources/image/mycomputer/test1.jpg");
	var currentTime = getCurrentTime();
	skin.menu = getMenu();
	skin.tip = getTip();
	skin.dom.appendChild(title);
	header.appendChild(back);
	skin.dom.appendChild(header);
	body.appendChild(skin.menu);
	skin.dom.appendChild(body);
	skin.dom.appendChild(footer);
	footer.appendChild(processBar.dom);
	footer.appendChild(currentTime)
	footer.appendChild(songHeader);
	footer.appendChild(time);
	footer.appendChild(skin.tip);
	skin.songHeader = songHeader
	skin.back = back;
	skin.processBar = processBar;
	skin.time = time;
	skin.currentTime = currentTime;
	_this = skin;
	var time = null;
	var i = 1;
	skin.setSongHeader = function(str){
		_this.songHeader.src = str;
	}
	skin.setCurrentMusicName = function(str){
		i = 1;
		console.log(i)
		_this.currentMusicName.innerHTML = str;
	}
	skin.setAuthor = function(str){
		_this.currentMusicAuthor.innerHTML = str || "未知作者";
	}
	skin.setTime = function(str){
		_this.time.innerHTML = str;
	}
	skin.MusicPlay = function(info){
		_this.tip.style.display = "none";
		clearInterval(time);
		_this.play.src = _this.RES.play;
		time = setInterval(function(){
			_this.songHeader.style.transform = "rotate(" + i + "deg)"
			i++;
		},30)
	}
	skin.MusicPause = function(){
		clearInterval(time);
		_this.play.src = _this.RES.pause;
	}
	skin.setCurrentTime = function(str){
		_this.currentTime.innerHTML = str;
	}
	skin.addMusic = function(dom){
		_this.menu.appendChild(dom);
	}
	return skin;
}



