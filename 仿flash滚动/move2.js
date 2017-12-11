function getstyle(obj,name){//获取物体非行间属性框架
		if (obj.currentStyle) {
			return obj.currentStyle[name];
		}else{
			return getComputedStyle(obj,null)[name];
		}
	}
	function move(obj,json,funend){//obj的引入是为了多物体运动，函数funend目的是使得多个属性链式改变就是我每次改变一个属性，再改变一个，
		//而对于json的引入是为了多个属性同时改变而不是一个改变完另一个再变

		clearInterval(obj.time);
		obj.time=setInterval(function(){
			for(var name in json){
				var speed=0;
				var cur=0;
				var stoptime=true;//假设多个属性都完成工作了才关闭定时器
				if(name=='opacity'){
					cur=Math.round(parseFloat(getstyle(obj,name))*100);//不管是IE还是火狐得到的都是对应的小数 但是我们一般用的是整数，所以*100,由于会出现计算机存储问题我们需要对算出的小数四舍五入round
				}else{
					cur=parseInt(getstyle(obj,name));
				}
				speed=(json[name]-cur)/3;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);//变速的必须要点
				
				if(cur!=json[name]){//主要目的是为了保证所有的属性都完成修改时在关闭定时器
					stoptime=false;
				}
				if(name=='opacity'){
					obj.style.filter='alpha(opacity:'+(cur+speed)+')';
					obj.style.opacity=(cur+speed)/100;
						
				}else{
					obj.style[name]=cur+speed+'px';
				}
					
				
			}
			if(stoptime){//当所有的属性都到达目标点时，再执行关闭定时器和再执行传进来的函数
				clearInterval(obj.time);
				if(funend)
					funend();
			}
			
		},30);
	}