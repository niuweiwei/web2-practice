var send = document.getElementsByClassName('send')[0];
var area = document.getElementsByClassName('area')[0];//获取输入框
var warning = document.getElementsByClassName('warning')[0];//获取当发送内容为空时的提示框
var msgBox = document.getElementById('msgBox');
var rightBox = document.getElementsByClassName('rightBox')[0];
var show=document.getElementById('show');
var rate=document.getElementsByClassName('rate')[0];
var settings=document.getElementsByClassName('settings');
var em=document.getElementsByClassName('em');
var emoji=document.getElementById('emoji');
var recently=document.getElementsByClassName('recently')[0];
var alle=document.getElementsByClassName('alle')[0];
var timer;
var a;
//oncontextmenu是右键的效果
msgBox.oncontextmenu=function(e){
	e.preventDefault();
	rightBox.style.display="block";
	rightBox.style.left=e.clientX-msgBox.offsetLeft+'px';//?.offsetLeft是?到浏览器左边的值
	rightBox.style.top=e.clientY-msgBox.offsetTop+'px';
}
//点击屏幕其他地方rightBox隐藏
document.onclick=function(){
	rightBox.style.display="none";
}
show.onmouseover=function(){
	rate.style.display="block";
}
show.onmouseout=function(){
	clearTimeout(a);
	a=setTimeout(function(){
		rate.style.display="none";
	},1000);
}
//消息框上方导航栏
for(var i=0;i<settings.length;i++){
	settings[i].style.backgroundImage='url("img/btn'+(i+1)+'.png")';
	if(i==0||i==5||i==8||i==10)
		settings[i].style.backgroundPosition="0px";
	else
		settings[i].style.backgroundPosition="-3px";
}
//最近表情的设置
for(var i=0;i<em.length;i++){
	em[i].innerHTML='<img src="img/QQ/'+(i+1)+'.gif">';
}
emoji.onmouseover=function(){
	recently.style.display='block';
}
document.onclick=function(){
	recently.style.display='none';
}
// 所有表情的添加
for(var i=1;i<131;i++){
	alle.innerHTML+='<img src="img/QQ/'+i+'.gif"/>';
}
var k=0;
emoji.onclick=function(){
	recently.style.display="none";
	if(k%2==0){
		alle.style.display="block";
	}
	else{
		alle.style.display="none";
	}
	k++;
}
// 回车发送消息
area.onkeydown = function(e){
	if(e.keyCode == 13&&e.shiftKey==false){//13为回车键
		send.onclick();
		e.preventDefault();//取消按下回车后默认换行的功能
	}
}//自己调用

// 点击发送按钮发送消息 通过事件调用
send.onclick = function(){//要判断发送的内容是否为空 若为空弹出框
	if (area.value == '') {
		warning.style.display = 'block';
		clearTimeout(timer);//清掉原来的计时器 防止在一秒钟内点击多次 警示框一直闪
		timer = setTimeout(function(){
			warning.style.display = 'none';
		},1000)//延迟执行 以达到自动就没有的效果 每点一次都会开一次延迟执行
	}else{
		//创建一个标签
		var li = document.createElement('li');
		li.className = 'clearFix';
		li.innerHTML = '<p class="time">'+new Date().toLocaleString()+'</p><p class="content"><span class="conText">'+area.value+'</span><span class="myHead"></span></p>';//分成两部分 一部分是获取当前时间 一部分是多行文本的输入内容
		msgBox.appendChild(li);
		li.scrollIntoView();//标签下的方法 让li滚动到视野的范围之内
		area.value ='';//发送内容后将输入框中的值设为空
		area.focus();//点击发送后 让输入框获得光标
	}
}