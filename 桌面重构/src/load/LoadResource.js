
var RES =  {
		
}
var loadProcess = function(){
	var path = [
		"./src/myComputer/MyComputer.js",
		"./src/QQ/QQ.js",
		"./src/music/Music.js",
		"./src/myComputer/ImgDetails.js"
	];
	var i = 0;
	for(let val in path){
		console.log(path[val])
		dynamicLoadJs(path[val],()=>{
			i++;
			if(i == path.length){
				RES = {
					"MY_COMPUTER":{key:"MY_COMPUTER",name:"我的电脑",icon:"computer.png",process:MyComputer},
					"QQ":{key:"QQ",name:"QQ",icon:"QQ.png",process:QQ},
					"MUSIC":{key:"MUSIC",name:"我的音乐",icon:"music.png",process:Music},
					"IMAGE":{key:"IMAGE",name:"图库",icon:"imgdetail.png",process:ImgDetails}
				}
				var top = 0;
				var left = 0;
				for(var process in RES){
					var dom = deskIcon(RES[process]);
					dom.style.left = ((left * 90) || 10) + "px"; 
					dom.style.top = ((top * 80) || 10) + "px"; 
					if(top % 7 == 0 && top != 0){
						left++;
						top = -1;	
					}  
					new desktop().appendChild(dom);
					top++;
				}
			} else {
				return false;
			}
		});
	}
	
};

