function fbc(x) {
    return document.getElementsByClassName(x);
}
function fadeIn(element,speed){
    if(element.style.opacity !=1){
        var speed = speed || 30 ;
        var num = 3;
        var st = setInterval(function(){
        num++;
        element.style.opacity = num/10;
        if(num>=10)  {  clearInterval(st);  }
        },speed);
    }
}

function fadeOut(element){
    if(element.style.opacity !=0.3){
        var speed = speed || 30 ;
        var num = 10;
        var st = setInterval(function(){
        num--;
        element.style.opacity = num / 10 ;
        if(num<=3)  {   clearInterval(st);  }
        },speed);
    }

}
function enlarge(){
    fadeOut(box,100);
    enlarge_box.style.display="block";
}
function back(){
    fadeIn(box,100);
    enlarge_box.style.display="none";
}
