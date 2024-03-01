
// var toggled = false;

// var hTag = document.getElementsByTagName("h1")[0];
// var bodyTag = document.getElementsByTagName("body")[0];
// var circle = document.getElementById("circle");

// document.getElementById("toggle").onclick = function() {
//     if(!toggled) {
//         //hTag.classList.add("color-white");
//         hTag.style.color = "white";
//         bodyTag.classList.add("bck-color-black");
//         circle.style.marginLeft = "100px";

//         toggled = true;
//     } else {
//         //hTag.classList.remove("color-white");
//         hTag.style.color = "black";
//         bodyTag.classList.remove("bck-color-black");
//         circle.style.marginLeft = "1px";

//         toggled = false;
//     }
// };


//  ----------------- Using JQuery -----------------------
$(document).ready(function() {
    var toggled = false;
    var hTag = $("h1").eq(0);
    var bodyTag = $("body").eq(0);
    var circle = $("#circle");

    $("#toggle").click(function() {
        if (!toggled) {
          hTag.addClass("color-white");
          bodyTag.addClass("bck-color-black");
          circle.css("margin-left", "100px");
          toggled = true;
        } else {
          hTag.removeClass("color-white");
          bodyTag.removeClass("bck-color-black");
          circle.css("margin-left", "1px");
          toggled = false;
        }
      });
});