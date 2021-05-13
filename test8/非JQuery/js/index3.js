// var n = 4;
// $(document).ready(function(){
//     $(".del").click(function(){
//         $(this).parent().remove();
//     });
//     $(".add").click(function(){
//         $(".data").append("<div class=\"line\"><span class=\"num\">" + (n++) + "</span><span class=\"text\"></span><span class=\"del\">Delete</span></div>");
//         $(".del").click(function(){
//             $(this).parent().remove();
//         });
//     });
// });
var num = 4;
document.querySelector(".add").addEventListener("click", function() {   
        //添加新元素
        document.querySelector(".data").insertAdjacentHTML('beforeend', "<div class=\"line\"><span class=\"num\">" + (num++) + "</span><span class=\"text\"></span><span class=\"del\">delete</span></div>");

        //新元素添加事件监听
        let row = document.querySelectorAll(".line");
        row[row.length - 1].lastChild.addEventListener("click", function() {
                this.parentNode.remove();
        });
});

for (var i = 0; i < document.querySelectorAll(".del").length; i++) {
    document.querySelectorAll(".del")[i].addEventListener("click", function() {
            this.parentNode.remove();
    });
}