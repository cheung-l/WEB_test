var js = document.querySelectorAll(".box .slide_line .s-box");
for (var i = 0; i < js.length; ++i) {
  js[i].onclick = function () {
    for (var j = 0; j < js.length; ++j) {
      js[j].style.background = "#fff";
    }
    this.style.background = "rgb(128,128,128)";
    var num = document.querySelector(".box .num_box");
    for (var k = 0; k < js.length; ++k) {
      if (js[k] === this) {
        num.innerHTML = k + 1;
        break;
      }
    }
  };
}
