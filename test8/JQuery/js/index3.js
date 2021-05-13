var n = 4;
$(document).ready(function(){
    $(".del").click(function(){
        $(this).parent().remove();
    });
    $(".add").click(function(){
        $(".data").append("<div class=\"line\"><span class=\"num\">" + (n++) + "</span><span class=\"text\"></span><span class=\"del\">Delete</span></div>");
        $(".del").click(function(){
            $(this).parent().remove();
        });
    });
});