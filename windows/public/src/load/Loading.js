var Loading = function(){
	if(typeof loading.instance == "object"){
		return loading.instance;
	}
	var c = document.getElementById("canvas")
	c.style.backgroundColor = "#FFFFFF";
	c.style.zIndex = "99";
        function loading(){
            this.ctx = c.getContext("2d");
            this.rad = Math.PI*2/100;
            this.currentPercent = 0;
            this.RESOURCE = "正在连接资源...";
            this.percent = 0;
            this.changeCanvas();
        }
        loading.prototype = {
            run:function(percent,str){
                c.style.display = "";
                this.percent = percent;
                if(typeof str != "undefined"){
                     this.RESOURCE = str;
                }
                this.animate();
            },
            stop:function(){
                this.percent = 0;
                c.style.display = "none";
            },
            animate:function(){
                var _this = this;
                window.requestAnimationFrame(function(){
                    if(_this.currentPercent < _this.percent ){
                        _this.animate();
                        _this.currentPercent++;
                        if(_this.currentPercent == 100){
                        	_this.stop();
                        }
                    }
                }); 
                this.ctx.clearRect(0, 0, c.width, c.height);
                this.drawCircle(this.ctx,this.currentPercent);
            },
            drawCircle:function(ctx,percent){
                var centerY = this.centerY;
                var centerX = this.centerX;
                ctx.save();  
                ctx.strokeStyle = "#D8CCBE";  
                ctx.lineWidth = 12; 
                ctx.beginPath();
                ctx.arc(centerX, centerY, 68, 0, Math.PI*2, false);  
                ctx.stroke();     
                ctx.closePath(); 
                ctx.restore();


                //画进度环
                ctx.save();
                ctx.strokeStyle = "#E87E04";
                ctx.lineWidth = 12;
                ctx.beginPath();
                ctx.arc(centerX, centerY, 68, -Math.PI/2, -Math.PI/2 +percent*this.rad, false);
                ctx.stroke();     
                ctx.closePath();  
                ctx.restore();

                //百分比文字绘制
                ctx.save();
                ctx.fillStyle = "#474d5d";
                ctx.font = "bold 21px Arial";

                //绘制字体并指定位置
                ctx.fillText(percent.toFixed(0) + '%', centerX-20, centerY+10);
                ctx.restore();

                ctx.save();
                ctx.fillStyle = "#474d5d";
                ctx.font = "21px Arial";
                ctx.textAlign="center";
                ctx.fillText(this.RESOURCE, centerX, centerY+110);
                ctx.restore();
            },
            changeCanvas:function(){
				var h = document.getElementById("desktop").clientHeight;
				var w = document.getElementById("desktop").clientWidth;
				document.getElementById("canvas").height = h;
				document.getElementById("canvas").width = w;
                this.centerX = w/2;
                this.centerY = h/2;
			},
			regEvent:function(){
				window.onresize = ()=>{
					this.changeCanvas();
				}
			}
        }
	loading.instance = new loading();
	return loading.instance;
}
var LOADING = new Loading();
if (isPC){
    LOADING.run(0,"正在连接资源...");
}
