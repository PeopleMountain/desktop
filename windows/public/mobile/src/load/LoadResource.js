
var APPRES =  {
		
}
var loadProcess = function(){
	var path = [
		"./mobile/src/myComputer/MyComputer.js",
		// "./mobile/src/QQ/QQ.js",
		"./mobile/src/music/MusicUI.js",
		"./mobile/src/myComputer/ImgDetails.js"
	];
	var i = 0;
	for(let val in path){
		dynamicLoadJs(path[val],()=>{
			i++;
			if(i == path.length){
				APPRES = {
					// "MY_COMPUTER":{key:"MY_COMPUTER",name:"我的电脑",icon:"computer.png",process:MyComputer},
					// "QQ":{key:"QQ",name:"QQ",icon:"QQ.png",process:QQ},
					"MUSIC":MusicIcon(),
					"QQ":QQIcon(),
					"Q1":QQIcon(),
					"Q2":QQIcon()
					// "IMAGE":{key:"IMAGE",name:"图库",icon:"imgdetail.png",process:ImgDetails}
				}
				var top = 0;
				var left = 0;
				for(var process in APPRES){
					console.log(APPRES)
					var dom = APPRES[process];
					dom.style.left = left * DESKTOP.clientWidth/4 + "px"; 
					dom.style.top = top * 80 + "px"; 
					if(top % 7 == 0 && top != 0){
						left=-1;
						top++;	
					}  
					BROADCAST.getLib()[0].appendChild(dom);
					left++;
				}
			} else {
				return false;
			}
		});
	}
	
};

