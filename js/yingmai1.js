$(document).on('pagecreate','#pagehome',function(){
    const baseWidth = 320;
    const baseHeight = 568;
    const thisWidth = window.innerWidth;
    const thisHeight = window.innerHeight;
    console.log('width:' + thisWidth);
    console.log('height:' + thisHeight);

    var main = document.getElementById('main');
    main.style.backgroundSize = String(thisWidth) + 'px 360px';

    var icon = document.getElementById('icon');
    //icon.style.left = '-' + String(2 * baseWidth / thisWidth) + 'px';

    var shareDiv = document.getElementById('shareDiv');
    shareDiv.style.width = String(158 / baseWidth * thisWidth) + 'px';
    shareDiv.style.left = String(23 / baseWidth * thisWidth *(2-baseWidth / thisWidth)) + 'px';

    var shareValue = document.getElementById('shareValue');
    shareValue.style.left = String(30 / baseWidth * thisWidth) + 'px';

    var shareButton = document.getElementById('shareButton');
    //shareButton.style.left = String(43 / baseWidth * thisWidth) + 'px';

    var hideDiv1 = document.getElementById('hideDiv1');
    hideDiv1.style.width = thisWidth + 'px';

    var buy50 = document.getElementById('buy50');
    //buy50.style.left = String(5 / baseWidth * thisWidth) + 'px';
    buy50.style.left = String(5 / baseWidth * thisWidth *(2-baseWidth / thisWidth)) + 'px';
    
    var buy100 = document.getElementById('buy100');
    //buy100.style.left = String(53 / baseWidth * thisWidth) + 'px';
    buy100.style.left = String(53 / baseWidth * thisWidth *(2-baseWidth / thisWidth)) + 'px';

    var buy300 = document.getElementById('buy300');
    //buy300.style.left = String(101 / baseWidth * thisWidth) + 'px';
    buy300.style.left = String(101 / baseWidth * thisWidth *(2-baseWidth / thisWidth)) + 'px';

    var buy500 = document.getElementById('buy500');
    //buy500.style.left = String(5 / baseWidth * thisWidth) + 'px';
    buy500.style.left = String(5 / baseWidth * thisWidth *(2-baseWidth / thisWidth)) + 'px';
    
    var buy800 = document.getElementById('buy800');
    //buy800.style.left = String(53 / baseWidth * thisWidth) + 'px';
    buy800.style.left = String(53 / baseWidth * thisWidth *(2-baseWidth / thisWidth)) + 'px';

    var buy1000 = document.getElementById('buy1000');
    //buy1000.style.left = String(101 / baseWidth * thisWidth) + 'px';
    buy1000.style.left = String(101 / baseWidth * thisWidth *(2-baseWidth / thisWidth)) + 'px';

    var buy3000 = document.getElementById('buy3000');
    //buy3000.style.left = String(5 / baseWidth * thisWidth) + 'px';
    buy3000.style.left = String(5 / baseWidth * thisWidth *(2-baseWidth / thisWidth)) + 'px';
    
    var buy5000 = document.getElementById('buy5000');
    //buy5000.style.left = String(53 / baseWidth * thisWidth) + 'px';
    buy5000.style.left = String(53 / baseWidth * thisWidth *(2-baseWidth / thisWidth)) + 'px';

    var buy8000 = document.getElementById('buy8000');
    //buy8000.style.left = String(101 / baseWidth * thisWidth) + 'px';
    buy8000.style.left = String(101 / baseWidth * thisWidth *(2-baseWidth / thisWidth)) + 'px';

    var panel = document.getElementById('panel');
    panel.style.width = String(thisWidth) + 'px';

    var earnInfo = document.getElementById('earnInfo');
    earnInfo.style.width = String(260 / baseWidth * thisWidth) + 'px';

    var earnAll = document.getElementById('earnAll');
    earnAll.style.width = String(224 / baseWidth * thisWidth) + 'px';

    var earnMaxRate = document.getElementById('earnMaxRate');
    earnMaxRate.style.width = String(122 / baseWidth * thisWidth) + 'px';

    var earnRate = document.getElementById('earnRate');
    earnRate.style.width = String(18 / baseWidth * thisWidth) + 'px';

    var allMoney = document.getElementById('allMoney');
    allMoney.style.width = String(290 / baseWidth * thisWidth) + 'px';

    var unlock = document.getElementById('unlock');
    unlock.style.width = String(290 / baseWidth * thisWidth) + 'px';

    var lock = document.getElementById('lock');
    lock.style.width = String(290 / baseWidth * thisWidth) + 'px';

    var drawPAnel = document.getElementById('drawPanel');
    drawPanel.style.width = String(290 / baseWidth * thisWidth) + 'px';

    var drawValuePanel = document.getElementById('drawValuePanel');
    drawValuePanel.style.width = String(230 / baseWidth * thisWidth) + 'px';

    var drawButton = document.getElementById('drawButton');
    drawButton.style.width = String(50 / baseWidth * thisWidth) + 'px';
    drawButton.style.left = String(25 / baseWidth * thisWidth) + 'px';

    var drawButtonText = document.getElementById('drawButton');
    drawButtonText.style.left = String(17 / baseWidth * thisWidth) + 'px';

    var fee = document.getElementById('fee');
    fee.style.width = String(290 / baseWidth * thisWidth) + 'px';

    var deposit = document.getElementById('deposit');
    deposit.style.width = String(290 / baseWidth * thisWidth) + 'px';

    var depositAddress = document.getElementById('depositAddress');
    depositAddress.style.width = String(290 / baseWidth * thisWidth) + 'px';

    var buyToken = document.getElementById('buyToken');
    buyToken.style.width = String(290 / baseWidth * thisWidth) + 'px';

    var dowload = document.getElementById('dowload');
    dowload.style.width = String(290 / baseWidth * thisWidth) + 'px';

    var note = document.getElementById('note');
    note.style.width = String(290 / baseWidth * thisWidth) + 'px';

    var userName = document.getElementById('userName');
    var allMoneyValue = document.getElementById('allMoneyValue');
    var unlockValue = document.getElementById('unlockValue');
    var drawAddress = document.getElementById('drawAddress');
    var drawValue = document.getElementById('drawValue');
    
    var lockInfo = document.getElementById('lockInfo').innerText;

    var lockText = "1000CNY|728天  1200CNY|727天  700CNY|726天  500CNY|725天  1700CNY|724天  50CNY|723天  200CNY|722天";
    var lockLength = 290 / baseWidth * thisWidth - (14 * 2 + 0.29);
    var lockIndex = 0;
    var textLength = 10;
    while(textLength * 12 + (textLength-1) * 0.25 <= lockLength){
	textLength += 4;
	document.getElementById('lockInfo').innerText = lockText.substr(lockIndex,textLength);
    }

    $("#lockInfo").on("swipeleft",function(){
	//if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 >= lockLength){
	    //lockIndex += 4;
	    //while(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 < lockLength)
		//lockIndex--;
	    //document.getElementById('lockInfo').innerText = lockText.substr(lockIndex,textLength);
	setTimeout(function(){
	    if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 >= lockLength){
		lockIndex++;
		document.getElementById('lockInfo').innerText = lockText.substr(lockIndex,textLength);
		console.log('1');
		if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 < lockLength)
		    lockIndex--;
	    }
	},100);
	setTimeout(function(){
	    if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 >= lockLength){
		lockIndex++;
		document.getElementById('lockInfo').innerText = lockText.substr(lockIndex,textLength);
		console.log('2');
		if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 < lockLength)
		    lockIndex--;
	    }
	},200);
	setTimeout(function(){
	    if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 >= lockLength){
		lockIndex++;
		document.getElementById('lockInfo').innerText = lockText.substr(lockIndex,textLength);
		console.log('3');
		if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 < lockLength)
		    lockIndex--;
	    }
	},300);
	setTimeout(function(){
	    if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 >= lockLength){
		lockIndex++;
		document.getElementById('lockInfo').innerText = lockText.substr(lockIndex,textLength);
		console.log('4');
		if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 < lockLength)
		    lockIndex--;
	    }
	},400);
	//}
    });

    $("#lockInfo").on("swiperight",function(){
	//if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 >= lockLength){
	    //lockIndex -= 4;
	    //if(lockIndex < 0)
		//lockIndex = 0;
	    //document.getElementById('lockInfo').innerText = lockText.substr(lockIndex,textLength);
	//}
	setTimeout(function(){
		if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 >= lockLength){
		    lockIndex--;
		    document.getElementById('lockInfo').innerText = lockText.substr(lockIndex,textLength);
		    console.log('1');
		    if(lockIndex < 0)
			lockIndex = 0;
		}
	    },100);
	    setTimeout(function(){
		if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 >= lockLength){
		    lockIndex--;
		    document.getElementById('lockInfo').innerText = lockText.substr(lockIndex,textLength);
		    console.log('2');
		    if(lockIndex < 0)
			lockIndex = 0;
		}
	    },200);
	    setTimeout(function(){
		if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 >= lockLength){
		    lockIndex--;
		    document.getElementById('lockInfo').innerText = lockText.substr(lockIndex,textLength);
		    console.log('3');
		    if(lockIndex < 0)
			lockIndex = 0;
		}
	    },300);
	    setTimeout(function(){
		if(lockText.substr(lockIndex,textLength).length * 12 + (lockText.substr(lockIndex,textLength).length - 1) * 0.25 >= lockLength){
		    lockIndex--;
		    document.getElementById('lockInfo').innerText = lockText.substr(lockIndex,textLength);
		    console.log('4');
		    if(lockIndex < 0)
			lockIndex = 0;
		}
	    },400);
    });

    $("#shareButton").on("tap",function(){
	this.className = 'yingmai-button1_click';
	setTimeout(function(){
	    shareButton.className = 'yingmai-button1';
	    $.post("/funds-plate/php/server.php",{type:'4',mobile:getCookie('mobile')},function(data,status){
		console.log("数据: \n" + data + "\n状态: " + status);
	    });
	},150);
    });

    $("#buy50").on("tap",function(){
	this.className = 'yingmai-button2_click';
	setTimeout(function(){
	    buy50.className = 'yingmai-button2';
	    $("#mobile4")[0].value = getCookie('mobile');
	    $("#amount4")[0].value = 50;
	    window.location.href = '#page4';
	},150);
    });

    $("#buy100").on("tap",function(){
	this.className = 'yingmai-button2_click';
	setTimeout(function(){
	    buy100.className = 'yingmai-button2';
	    $("#mobile4")[0].value = getCookie('mobile');
	    $("#amount4")[0].value = 100;
	    window.location.href = '#page4';
	},150);
    });

    $("#buy300").on("tap",function(){
	this.className = 'yingmai-button2_click';
	setTimeout(function(){
	    buy300.className = 'yingmai-button2';
	    $("#mobile4")[0].value = getCookie('mobile');
	    $("#amount4")[0].value = 300;
	    window.location.href = '#page4';
	},150);
    });

    $("#buy500").on("tap",function(){
	this.className = 'yingmai-button2_click';
	setTimeout(function(){
	    buy500.className = 'yingmai-button2';
	    $("#mobile4")[0].value = getCookie('mobile');
	    $("#amount4")[0].value = 500;
	    window.location.href = '#page4';
	},150);
    });

    $("#buy800").on("tap",function(){
	this.className = 'yingmai-button2_click';
	setTimeout(function(){
	    buy800.className = 'yingmai-button2';
	    $("#mobile4")[0].value = getCookie('mobile');
	    $("#amount4")[0].value = 800;
	    window.location.href = '#page4';
	},150);
    });

    $("#buy1000").on("tap",function(){
	this.className = 'yingmai-button2_click';
	setTimeout(function(){
	    buy1000.className = 'yingmai-button2';
	    $("#mobile4")[0].value = getCookie('mobile');
	    $("#amount4")[0].value = 1000;
	    window.location.href = '#page4';
	},150);
    });

    $("#buy3000").on("tap",function(){
	this.className = 'yingmai-button2_click';
	setTimeout(function(){
	    buy3000.className = 'yingmai-button2';
	    $("#mobile4")[0].value = getCookie('mobile');
	    $("#amount4")[0].value = 3000;
	    window.location.href = '#page4';
	},150);
    });

    $("#buy5000").on("tap",function(){
	this.className = 'yingmai-button2_click';
	setTimeout(function(){
	    buy5000.className = 'yingmai-button2';
	    $("#mobile4")[0].value = getCookie('mobile');
	    $("#amount4")[0].value = 5000;
	    window.location.href = '#page4';
	},150);
    });

    $("#buy8000").on("tap",function(){
	this.className = 'yingmai-button2_click';
	setTimeout(function(){
	    buy8000.className = 'yingmai-button2';
	    $("#mobile4")[0].value = getCookie('mobile');
	    $("#amount4")[0].value = 8000;
	    window.location.href = '#page4';
	},150);
    });

    $("#drawButton").on("tap",function(){
	this.className = 'yingmai-button3_click';
	setTimeout(function(){
	    drawButton.className = 'yingmai-button3';
	    $.post("/funds-plate/php/server.php",{type:'10',mobile:getCookie('mobile'),passwd:getCookie('passwd'),address:drawAddress.value,amount:drawValue.value},function(data,status){
		console.log("数据: \n" + data + "\n状态: " + status);
	    });
	},150);
    });

    $("#buyToken").on("tap",function(){
	window.location.href = 'https://www.7ebit.net'
    });

    $("#dowload").on("tap",function(){
	window.location.href = 'https://www.kcash.com'
    });

    function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
    }
    
    function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
    }
    
    function checkCookie(){
	var user=getCookie("username");
	if (user!=""){
            alert("欢迎 " + user + " 再次访问");
	}
	else {
            user = prompt("请输入你的名字:","");
            if (user!="" && user!=null){
		setCookie("username",user,30);
            }
	}
    }
    
    function setUser(user){
	userName.innerText = user;
    }

    function setShareValue(value){
	shareValue.innerText = value + ' CNY';
    }

    function setEarnMaxRate(value){
	if(value < 1){
	    var a = 224 / baseWidth * thisWidth;
	    earnMaxRate.style.width = String(a * value) + 'px';
	}
    }

    function setAllMoneyValue(value){
	allMoneyValue.innerText = value + ' CNY';
    }

    function setUnlockValue(value){
	unlockValue.innerText = value + ' CNY';
    }

    function setdePositAddressText(text){
	depositAddressText.innerText = text;
    }

    if(getCookie('mobile') == '' || getCookie('passwd') == ''){
	window.location.href = '#page1';
    }
    else{
	var mobile = getCookie('mobile');
	setUser(mobile.substr(0,3) + '****' + mobile.substr(7));
    }
});

$(document).on('pagecreate','#page2',function(){
    $("sendCode1").on("tap",function(){
	var mobile = $("#mobile2")[0].value;
	$.post("/funds-plate/php/server.php",{type:'0',mobile:mobile},function(data,status){
	    console.log("数据: \n" + data + "\n状态: " + status);
	});
    });
});

$(document).on('pagecreate','#page3',function(){
    $("sendCode2").on("tap",function(){
	var mobile = $("#mobile3")[0].value;
	$.post("/funds-plate/php/server.php",{type:'0',mobile:mobile},function(data,status){
	    console.log("数据: \n" + data + "\n状态: " + status);
	});
    });
});
