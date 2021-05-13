var ul = document.getElementsByTagName('ul')[0];
var li = ul.getElementsByTagName("li");
var Li=document.getElementsByClassName('m-item');
ul.onclick = function(e){
    var e = e|| window.event, target =e.target || e.srcElement;
    for(var i in li){
        if(target == li[i]){
        i = parseInt(i)+1;
        alert('p' + i);
        break;
        }
    } 
}
function getDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate(); 
    var seperator = "-";
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (day >= 0 && day <= 9) {
        day = "0" + day;
    }
    var currentDate = year + seperator + month + seperator + day;
    return currentDate;
}

 Li[0].onclick=function(){
	Li[0].style.color="red";
}

Li[1].onclick=function(){
	document.getElementsByTagName("h1")[0].innerHTML = getDate();
}

Li[2].onclick=function(){
	this.className+=" fn-active";
}

Li[3].onclick=function(){
	ul.removeChild(ul.getElementsByTagName('li')[7]);
}

Li[4].onclick=function(){
	window.open('https://www.taobao.com/');
}

Li[5].onclick=function(){
	var p9=document.createElement("li");
	p9.innerHTML="p9";
	ul.appendChild(p9);
}

Li[6].onclick=function(){
	var div = document.getElementsByClassName('m-box')[0];
	var newwidth = window.screen.availWidth;
	div.style.width = newwidth+'px';
}
