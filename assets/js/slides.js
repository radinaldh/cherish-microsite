var slide1 = document.getElementById("scene-1");
var slide2 = document.getElementById("scene-2");
var slide3 = document.getElementById("scene-3");
var slide3idle = document.getElementById("scene-3-idle");
var button1 = document.getElementById("button-container-1");
var slide3transition = document.getElementById("scene-3-transition");
var slide4 = document.getElementById("scene-4");
var slide5 = document.getElementById("scene-5");
var slide5idle = document.getElementById("scene-5-idle");
var button2 = document.getElementById("button-container-2");
var slide5transition = document.getElementById("scene-5-transition");
var slide6 = document.getElementById("scene-6");
var slide7idle = document.getElementById("scene-7-idle");
var button3 = document.getElementById("button-container-3");
var slide7spinning = document.getElementById("scene-7-spinning");
var slide8 = document.getElementById("scene-8");
var slide9spinning = document.getElementById("scene-9-spinning");
var slide10 = document.getElementById("scene-10");
var slide10idle = document.getElementById("scene-10-idle");
var button4 = document.getElementById("button-container-4");
var slide10transition = document.getElementById("scene-10-transition");
var slide11idle = document.getElementById("scene-11-idle");
var slide11transition = document.getElementById("scene-11-transition");

slide1.onended = function () {
    slide2.play();
    slide1.style.opacity = "0";
    slide2.style.opacity = "1";
}

slide2.onended = function () {
    slide3.play();
    slide2.style.opacity = "0";
    slide3.style.opacity = "1";
}

slide3.onended = function () {
    slide3idle.play();
    slide3.style.opacity = "0";
    slide3idle.style.opacity = "1";
    slide3idle.setAttribute("loop", "");
    button1.style.display = "flex";
    setTimeout(function () {
        button1.style.opacity = "1"
    }, 2000);;
}

slide3transition.onended = function () {
    slide4.play();
    slide3transition.style.opacity = "0";
    slide4.style.opacity = "1";

}

slide4.onended = function () {
    slide5.play();
    slide4.style.opacity = "0";
    slide5.style.opacity = "1";

}

slide5.onended = function () {
    slide5idle.play();
    slide5.style.opacity = "0";
    slide5idle.style.opacity = "1";
    slide5idle.setAttribute("loop", "");
    button2.style.display = "flex";
    setTimeout(function () {
        button2.style.opacity = "1"
    }, 2000);;
}

slide5transition.onended = function () {
    slide6.play();
    slide5transition.style.opacity = "0";
    slide6.style.opacity = "1";

}

slide6.onended = function () {
    slide7idle.play();
    slide6.style.opacity = "0";
    slide7idle.style.opacity = "1";
    slide7idle.setAttribute("loop", "");
    button3.style.display = "flex";
    setTimeout(function () {
        button3.style.opacity = "1"
    }, 2000);
}

slide7spinning.onended = function () {
    slide9spinning.play();
    slide7spinning.style.opacity = "0";
    slide9spinning.style.opacity = "1";
    slide9spinning.setAttribute( "loop" , "" );
    document.getElementById("confirmation").style.display = "block";

}

// slide9spinning.onended = function () {
//     slide10.play();
//     slide9spinning.style.opacity = "0";
//     slide10.style.opacity = "1";
// }

slide10.onended = function () {
    slide10idle.play();
    slide10.style.opacity = "0";
    slide10idle.style.opacity = "1";
    slide10idle.setAttribute("loop", "");
    button4.style.display = "flex";
    setTimeout(function () {
        button4.style.opacity = "1"
    }, 2000);
}

slide10transition.onended = function () {
    slide11transition.play();
    slide10transition.style.opacity = "0";
    slide11transition.style.opacity = "1";
}

slide11transition.onended = function () {
    slide11idle.play();
    slide11transition.style.opacity = "0";
    slide11idle.style.opacity = "1";
    slide11idle.setAttribute("loop" , "");
}