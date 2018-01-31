function setCookie(name,value,iDay){//设置cookie的函数
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+iDay);
		document.cookie=name+'='+value+';expires='+oDate;
		
		}
		//setcookie('id','1033646',365);
		//setcookie('username','yang',1);
				
		function getCookie(objname){  
		    var arrstr = document.cookie.split("; ");  
		    for(var i = 0;i < arrstr.length;i ++){  
		        var temp = arrstr[i].split("=");  
		        if(temp[0] == objname){  
		            return unescape(temp[1]);  
		        }  
		    }  
		    return "";  
		}  
		function removeCookie(name){
			setcookie(name,1,-1);
		}