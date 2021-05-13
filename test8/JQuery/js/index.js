$(document).ready(function () {
    $("li").click(function () {
       $(".enlarge_box").fadeIn();
       $(".box").fadeTo("slow",.3);
    });
    $(".enlarge_box").click(function(){
        $(".enlarge_box").fadeOut();
        $(".box").fadeTo("slow",1);
    });

});
