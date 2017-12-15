var img=document.getElementsByTagName('img');
var words=document.getElementsByClassName('words');
var comment=document.getElementById('comment');
var con=false;
//鼠标滑过星星，星星变亮
function StarPic(i){
	img[i].onmouseover=function(){
		for(var num=0;num<=i;num++){
			if(i<=1){
				img[num].src="images/star1.png";
			}
			else{
				img[num].src="images/star2.png";
			}
		}
		comment.value.innerHTML=words[5-i-1].innerText;
		console.log(comment.value);
	}
}
for(var j=0;j<img.length;j++){
	StarPic(j);
}
//当点击星星时
function qd(i){
	con=true;
	for(var num=0;num<=i;num++){
		img[num].src="images/star2.png";
	}
		comment.innerHTML=words[5-i-1].innerHTML;	
}
//鼠标离开时触发的事件
function hide(){
	if(con)
		return;
	else{
		for(var i=0;i<img.length;i++){
			img[i].src="images/star0.png";
		}
		comment.value.innerHTML="";
	}
}
for(var j=0;j<img.length;j++){
	hide(j);
}
