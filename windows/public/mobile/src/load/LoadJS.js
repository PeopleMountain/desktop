
    var i = 0;
    function loadResource(arg){
        if(typeof arg == "undefined"){
            arg = RESOURCES;
        }
        for(let val in arg){
            if(typeof arg[val].path == "undefined"){
                loadResource(arg[val]);
            } else {
                dynamicLoadJs(arg[val].path,()=>{
                    i++;
                    var p = RESOURCES[0]["script"].length + RESOURCES[1]["image"].length;
                    LOADING.run(i/p*100,"正在加载资源:" + arg[val].path);
                    if(i == p){
                        console.log("资源完全加载")
                        dynamicLoadJs("./Main.js")
                        LOADING.run(100,"加载完毕");
                    }
                })
            }
        }
    }

  function dynamicLoadJs(url, callback) {
        var type = url.substr(url.lastIndexOf(".")+1);
        var body = document.getElementsByTagName('body')[0];
        if(type == "js"){
            var entry = document.createElement('script');
            entry.src = url;
            entry.type = 'text/javascript';
            body.appendChild(entry);
        } else if(type == "png" || type == "jpg"){
             var entry = new Image();
             entry.src = url;
        }
        if(typeof(callback)=='function'){
            entry.onload = entry.onreadystatechange = function () {
                if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete"){
                    callback();
                    entry.onload = entry.onreadystatechange = null;
                }
            };
        }
    }
    if(isPC){
       dynamicLoadJs("./RES_PC.js",loadResource);
    } else {
        var btn = document.createElement("button");
        var p = document.createElement("p");
        var body = document.getElementById("desktop");
        p.innerHTML = "手机版桌面尚未完成，您可以选择进入pc版桌面"
        btn.style.zIndex = "99";
        btn.innerHTML = "点此确认进入pc版";
        btn.addEventListener("click",function(){
        })
        btn.onclick = function(){
            LOADING.run(0,"正在连接资源...");
            dynamicLoadJs("./RES_PC.js",loadResource);
            body.removeChild(btn);
            body.removeChild(p);
        }
        btn.style.display = "block";
        btn.style.margin = "auto";
        p.style.textAlign = "center";
        btn.style.marginTop = "50px"
        p.style.marginTop = "200px"
        body.appendChild(p);
        body.appendChild(btn);
    }
