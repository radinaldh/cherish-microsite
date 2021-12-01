document.getElementById("scene-1").pause();

function playvideo() {
    document.getElementById("scene-1").play();
    document.getElementById("play-button").style.display = "none";
    document.getElementById("text-scene-1").style.display = "block"
    setTimeout(function(){
        document.getElementById("text-scene-1").style.opacity = "1";
        setTimeout(function(){
            document.getElementById("text-scene-1").style.display = "none";
            setTimeout(function(){
                document.getElementById("text-scene-1-2").style.display = "block";
                document.getElementById("text-scene-1-2").style.opacity = "1";
                setTimeout(function(){
                    document.getElementById("text-scene-1-2").style.opacity = "0";
                    setTimeout(function(){
                        document.getElementById("text-scene-1-2").style.display = "none";
                    }, 1000);
                }, 10000);
            }, 1000);
        },5000);
    },5000);
}

function nextslide1() {
    document.getElementById("scene-3-idle").pause();
    document.getElementById("scene-3-idle").removeAttribute("loop");
    document.getElementById("button-container-1").style.display = "none";
    document.getElementById("scene-3-idle").style.opacity = "0";
    document.getElementById("scene-3-transition").style.opacity = "1";
    document.getElementById("scene-3-transition").play();
    document.getElementById("text-scene-2-1").style.display = "none";
    document.getElementById("text-scene-2-3").style.opacity = "0";
}

function nextslide2() {
    document.getElementById("scene-5-idle").pause();
    document.getElementById("scene-5-idle").removeAttribute("loop");
    document.getElementById("button-container-2").style.display = "none";
    document.getElementById("scene-5-idle").style.opacity = "0";
    document.getElementById("scene-5-transition").style.opacity = "1";
    document.getElementById("scene-5-transition").play();
    document.getElementById("text-scene-3-2").style.opacity= "0";
}

function nextslide3() {
    document.getElementById("scene-7-idle").pause();
    document.getElementById("scene-7-idle").removeAttribute("loop");
    document.getElementById("button-container-3").style.display = "none";
    document.getElementById("scene-7-idle").style.opacity = "0";
    document.getElementById("scene-7-spinning").style.opacity = "1";
    document.getElementById("scene-7-spinning").play();
    document.getElementById("text-scene-4-1").style.display = "none";
    document.getElementById("text-scene-4-2").style.display = "none";
}

function confirm() {
    document.getElementById("scene-9-spinning").pause();
    document.getElementById("scene-9-spinning").style.opacity = "0";
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("catalogue").style.display = "block";
}

function denied() {
    document.getElementById("scene-9-spinning").pause();
    document.getElementById("confirmation").style.display = "none"
    document.getElementById("scene-9-spinning").style.opacity = "0";
    document.getElementById("scene-11-idle").style.opacity = "1";
    document.getElementById("scene-11-idle").play();

}

function catalogueFinish() {
    document.getElementById("scene-10").style.opacity = "1";
    document.getElementById("scene-10").play();
    document.getElementById("catalogue").style.display = "none";
    document.getElementById("text-scene-email-1").style.display = "block";
    setTimeout(function(){
        document.getElementById("text-scene-email-1").style.opacity = "1";
        document.getElementById("QR").style.display = "block";
        setTimeout(function(){
            document.getElementById("QR").style.opacity = "1";
            document.getElementById("text-scene-email-1").style.opacity = "0";
            document.getElementById("text-scene-email-2").style.display = "block";
            setTimeout(function(){
                document.getElementById("text-scene-email-2").style.opacity = "1";
            },1500);
        },3000);
    },1500);
}

function nextslide4() {
    document.getElementById("text-scene-email-1").style.display = "none";
    document.getElementById("text-scene-email-2").style.display = "none";
    document.getElementById("QR").style.display = "none";
    document.getElementById("scene-10-idle").pause();
    document.getElementById("scene-10-idle").removeAttribute("loop");
    document.getElementById("button-container-4").style.display = "none";
    document.getElementById("scene-10-idle").style.opacity = "0";
    document.getElementById("scene-10-transition").style.opacity = "1";
    document.getElementById("scene-10-transition").play();
}