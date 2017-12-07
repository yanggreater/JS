function getstyle(obj,name){//获取物体非行间属性框架
		if (obj.currentStyle) {
			return obj.currentStyle[name];
		}else{
			return getComputedStyle(obj,null)[name];
		}
	}
	function move(obj,name,target,funend){//任意改变运动框架

		clearInterval(obj.time);
		obj.time=setInterval(function(){
			var speed=0;
			var cur=0;
			if(name=='opacity'){
				cur=Math.round(parseFloat(getstyle(obj,name))*100);//不管是IE还是火狐得到的都是对应的小数 但是我们一般用的是整数，所以*100,由于会出现计算机存储问题我们需要对算出的小数四舍五入round
			}else{
				cur=parseInt(getstyle(obj,name));
			}
			speed=(target-cur)/3;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);//变速的必须要点
			if(cur==target){
				clearInterval(obj.time);
				if (funend) {funend();}
			}else{
				if(name=='opacity'){
					obj.style.filter='alpha(opacity:'+(cur+speed)+')';
					obj.style.opacity=(cur+speed)/100;
					
				}else{
					obj.style[name]=cur+speed+'px';
				}
				
			}
		},30);
	}