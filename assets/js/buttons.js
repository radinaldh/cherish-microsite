document.getElementById("scene-1").pause();

function playvideo() {
    document.getElementById("scene-1").play();
    document.getElementById("play-button").style.display = "none";
}

function nextslide1() {
    document.getElementById("scene-3-idle").pause();
    document.getElementById("scene-3-idle").removeAttribute("loop");
    document.getElementById("button-container-1").style.display = "none";
    document.getElementById("scene-3-idle").style.opacity = "0";
    document.getElementById("scene-3-transition").style.opacity = "1";
    document.getElementById("scene-3-transition").play();
}

function nextslide2() {
    document.getElementById("scene-5-idle").pause();
    document.getElementById("scene-5-idle").removeAttribute("loop");
    document.getElementById("button-container-2").style.display = "none";
    document.getElementById("scene-5-idle").style.opacity = "0";
    document.getElementById("scene-5-transition").style.opacity = "1";
    document.getElementById("scene-5-transition").play();
}

function nextslide3() {
    document.getElementById("scene-7-idle").pause();
    document.getElementById("scene-7-idle").removeAttribute("loop");
    document.getElementById("button-container-3").style.display = "none";
    document.getElementById("scene-7-idle").style.opacity = "0";
    document.getElementById("scene-7-spinning").style.opacity = "1";
    document.getElementById("scene-7-spinning").play();
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

function catalogueFinish(){
    document.getElementById("scene-10").style.opacity = "1";
    document.getElementById("scene-10").play();
    document.getElementById("catalogue").style.display = "none";    
}

function nextslide4() {
    document.getElementById("scene-10-idle").pause();
    document.getElementById("scene-10-idle").removeAttribute("loop");
    document.getElementById("button-container-4").style.display = "none";
    document.getElementById("scene-10-idle").style.opacity = "0";
    document.getElementById("scene-10-transition").style.opacity = "1";
    document.getElementById("scene-10-transition").play();
}


function submitBasicTees() {
    document.getElementById("mainbasictees").style.display = "block";
    document.getElementById("maincrewneck").style.display = "none";
    document.getElementById("mainSS").style.display = "none";
    document.getElementById("mainLS").style.display = "none";
    document.getElementById("mainLSforever").style.display = "none";
    document.getElementById("mainjogger").style.display = "none";
    document.getElementById("plusbtn").style.display = "none";  
    document.getElementById("mainbasicteesimg").src = document.getElementById("basicteesimg").getAttribute("src");
    document.getElementById("myModal").style.display = "none";
    document.getElementById("detailmodal").style.display = "none";

    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = "none";
    }
    
}

function submitCrewNeck() {
    document.getElementById("mainbasictees").style.display = "none";
    document.getElementById("maincrewneck").style.display = "block";
    document.getElementById("mainSS").style.display = "none";
    document.getElementById("mainLS").style.display = "none";
    document.getElementById("mainLSforever").style.display = "none";
    document.getElementById("mainjogger").style.display = "none";
    document.getElementById("plusbtn").style.display = "none";  
    document.getElementById("maincrewneckimg").src = document.getElementById("crewneckimg").getAttribute("src");
    document.getElementById("myModal").style.display = "none";
    document.getElementById("detailmodal").style.display = "none";

    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = "none";
    }
    
}

function submitSS() {
    document.getElementById("mainbasictees").style.display = "none";
    document.getElementById("maincrewneck").style.display = "none";
    document.getElementById("mainSS").style.display = "block";
    document.getElementById("mainLS").style.display = "none";
    document.getElementById("mainLSforever").style.display = "none";
    document.getElementById("mainjogger").style.display = "none";
    document.getElementById("plusbtn").style.display = "none";  
    document.getElementById("mainSSimg").src = document.getElementById("SSimg").getAttribute("src");
    document.getElementById("myModal").style.display = "none";
    document.getElementById("detailmodal").style.display = "none";

    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = "none";
    }
    
}

function submitLS() {
    document.getElementById("mainbasictees").style.display = "none";
    document.getElementById("maincrewneck").style.display = "none";
    document.getElementById("mainSS").style.display = "none";
    document.getElementById("mainLS").style.display = "block";
    document.getElementById("mainLSforever").style.display = "none";
    document.getElementById("mainjogger").style.display = "none";
    document.getElementById("plusbtn").style.display = "none";  
    document.getElementById("mainLSimg").src = document.getElementById("LSimg").getAttribute("src");
    document.getElementById("myModal").style.display = "none";
    document.getElementById("detailmodal").style.display = "none";

    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = "none";
    }
    
}

function submitLSforever() {
    document.getElementById("mainbasictees").style.display = "none";
    document.getElementById("maincrewneck").style.display = "none";
    document.getElementById("mainSS").style.display = "none";
    document.getElementById("mainLS").style.display = "none";
    document.getElementById("mainLSforever").style.display = "block";
    document.getElementById("mainjogger").style.display = "none";
    document.getElementById("plusbtn").style.display = "none";  
    document.getElementById("mainLSforeverimg").src = document.getElementById("LSforeverimg").getAttribute("src");
    document.getElementById("myModal").style.display = "none";
    document.getElementById("detailmodal").style.display = "none";

    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = "none";
    }
    
}

function submitJogger() {
    document.getElementById("mainbasictees").style.display = "none";
    document.getElementById("maincrewneck").style.display = "none";
    document.getElementById("mainSS").style.display = "none";
    document.getElementById("mainLS").style.display = "none";
    document.getElementById("mainLSforever").style.display = "none";
    document.getElementById("mainjogger").style.display = "block";
    document.getElementById("plusbtn").style.display = "none";  
    document.getElementById("mainjoggerimg").src = document.getElementById("joggerimg").getAttribute("src");
    document.getElementById("myModal").style.display = "none";
    document.getElementById("detailmodal").style.display = "none";

    for (var i = 0; i < divsToHide.length; i++) {
      divsToHide[i].style.display = "none";
    }
    
}