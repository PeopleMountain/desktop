var qq_app = function(accound,passwrod){
	this.accound = accound;
	this.password = passwrod;
	this.friends = [];
	this.token = null;
	this.dom = document.createElement("div");
	this.init();
}
qq_app.prototype = {
	init:function(){
		this.initSkin();
	},
	initSkin:function(){
		this.dom.style.position = "absolute";
		this.dom.style.top = "10px";
		this.dom.style.left = "50%";
		this.dom.style.transform = "translate(-50%, 0)";
		this.dom.style.width = "300px";
		this.dom.style.height = "500px";
		this.dom.style.backgroundColor = "blue";
	},
	initTop:function(){

	},
	initMenuSkin:function(){
		
	}
}
var QQ = function(){
	this.dom = document.createElement("div");
	this.accoundInp = this.createInput("accound");
	this.passwordInp = this.createInput("password");
	this.loginBtn = this.loginBtn();
	this.title = document.createElement("p");
	this.closeBtn = new Image(); 
	this.initdom();
}
QQ.prototype = {
	initdom:function(){
		this.initInput();
		this.initTitle();
		this.initcloseBtn();
		this.eventReg();

		this.dom.style.width = "400px";
		this.dom.style.height = "300px";
		this.dom.style.position = "absolute";
		this.dom.style.zIndex = "3"
		this.dom.style.borderRadius = "5px";
		this.dom.style.backgroundImage = "url(./resources/image/qq/bg.png)";
		this.dom.style.left = "50%";
		this.dom.style.top = "50%";
		this.dom.style.transform = "translate(-50%, -50%)";
		this.dom.style.boxShadow = "10px 10px 5px #888888";
		new desktop().appendChild(this.dom)
	},
	initInput:function(){
		this.accoundInp.style.position = "absolute";
		this.passwordInp.style.position = "absolute";

		this.accoundInp.style.left = this.passwordInp.style.left = "50%";
		this.accoundInp.style.transform = this.passwordInp.style.transform = "translate(-50%,0)";
		this.accoundInp.style.borderRadius = this.passwordInp.style.borderRadius = "5px";
		this.accoundInp.style.top = "100px";
		this.passwordInp.style.top = "160px";

		this.accoundInp.placeholder = "请输入账号";
		this.passwordInp.placeholder = "请输入密码";
		this.passwordInp.type = "password";
	},
	createInput:function(id){
		var input = document.createElement("input");
		input.style.width = "200px";
		input.style.height = "30px";
		input.id = id;
		this.dom.appendChild(input);
		return input;
	},
	loginBtn:function(){
		var button = document.createElement("button");
		button.style.width = "200px";
		button.style.height = "30px";
		button.style.position = "absolute";
		button.style.left = "50%";
		button.style.bottom = "20px";
		button.style.transform = "translate(-50%,0)";
		button.innerHTML = "Login";
		this.dom.appendChild(button);
		return button;
	},
	initTitle:function(){
		this.title.innerHTML = "欢迎登陆QQ";
		this.title.style.color = "#ffffff"
		this.title.style.fontSize = "30px";
		this.title.style.textAlign = "center";
		this.title.style.position = "absolute";
		this.title.style.left = "0";
		this.title.style.right = "0"
		this.title.style.top = "20px";
		
		this.dom.appendChild(this.title);
	},
	initcloseBtn:function(){
		this.closeBtn.src = "./resources/image/qq/qq_close.png";
		this.closeBtn.style.position = "absolute";
		this.closeBtn.style.width = "20x";
		this.closeBtn.style.height = "20px";
		this.closeBtn.style.top = "5px"
		this.closeBtn.style.right = "10px";
		this.dom.appendChild(this.closeBtn);
	},
	eventReg:function(){
		_this = this
		this.closeBtn.addEventListener("click",()=>{
			console.warn("close QQ_LOGIN");
			process_pool.del("QQ")
		})
		console.log(EVENT)
		EVENT.add(this.loginBtn,"click",this.login)
	},
	login:function(){
		var accound = _this.accoundInp.value;
		var password = _this.passwordInp.value;
		if(accound == "888" && password == "888"){
			console.warn("QQ登陆成功")
			new qq_app(accound,password);
			_this.dispose();
		}
	},
	dispose:function(){
		new desktop().removeChild(this.dom);
		for(var val in this){
			EVENT.dispose(val);
			this[val] = null;
		}
	}

}
