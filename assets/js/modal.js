    // Reference the size
    const size = document.getElementById("firstsetsize");

    // Click on a size
    var siz = document.getElementsByClassName("sizebtns");
    for (var i = 0; i < siz.length; i++) {
      siz[i].onclick = changeVal;
    }

    function changeVal(e) {
      let sizeval = e.target.getAttribute("data-size");
      size.value = sizeval;
    }

    // Reference the size
    const size2 = document.getElementById("secondsetsize");

    // Click on a size
    var siz2 = document.getElementsByClassName("sizebtns2");
    for (var i = 0; i < siz2.length; i++) {
      siz2[i].onclick = changeVal2;
    }

    function changeVal2(e) {
      let sizeval2 = e.target.getAttribute("data-size");
      size2.value = sizeval2;
    }

    // Get the modal
    var modal = document.getElementById("myModal");
    var modalcontent = document.getElementById("myModalContent");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
      modal.style.display = "block";
      setTimeout(function () {
        modalcontent.style.opacity = "1";
      }, 300);
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    var basictees = document.getElementById("basictees");
    var crewneck = document.getElementById("crewneck");
    var SS = document.getElementById("SS");
    var LS = document.getElementById("LS");
    var LSforever = document.getElementById("LSforever");
    var jogger = document.getElementById("jogger");

    var closes = document.getElementsByClassName("closes")[0];
    var detailmodal = document.getElementById("detailmodal");
    var divsToHide = document.getElementsByClassName("detailcontent"); //divsToHide is an array

    basictees.onclick = function () {
      detailmodal.style.display = "block";
      document.getElementById("detailbasictees").style.display = "block";
    }

    crewneck.onclick = function () {
      detailmodal.style.display = "block";
      document.getElementById("detailcrewneck").style.display = "block";
    }

    SS.onclick = function () {
      detailmodal.style.display = "block";
      document.getElementById("detailSS").style.display = "block";
    }

    LS.onclick = function () {
      detailmodal.style.display = "block";
      document.getElementById("detailLS").style.display = "block";
    }

    LSforever.onclick = function () {
      detailmodal.style.display = "block";
      document.getElementById("detailLSforever").style.display = "block";
    }

    jogger.onclick = function () {
      detailmodal.style.display = "block";
      document.getElementById("detailjogger").style.display = "block";
    }

    closes.onclick = function () {
      detailmodal.style.display = "none";

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none"; // depending on what you're doing
      }
    }

    // BASIC TEES

    // Reference the color 
    const image = document.getElementById("basicteesimg");

    // Click on a color

    var el = document.getElementsByClassName("colorbtns");
    for (var i = 0; i < el.length; i++) {
      el[i].onclick = changeSrc;
    }

    function changeSrc(e) {
      // get the data src
      let imgsrc = e.target.getAttribute("data-img");
      // set the src
      image.src = imgsrc;
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

      let remslash = document.getElementById("basicteesimg").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("firstset").value = remslash;

      document.getElementById("myModal").style.display = "none";
      document.getElementById("detailmodal").style.display = "none";

      document.getElementById("notice1").style.opacity = "1";
      document.getElementById("notice1").style.zIndex = "999";
      setTimeout(function () {
        document.getElementById("notice1").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // CREWNECK

    const image2 = document.getElementById("crewneckimg");

    var el2 = document.getElementsByClassName("colorbtns2");
    for (var i = 0; i < el2.length; i++) {
      el2[i].onclick = changeSrc2;
    }

    function changeSrc2(e) {
      // get the data src
      let imgsrc2 = e.target.getAttribute("data-img");
      // set the src
      image2.src = imgsrc2;
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

      let remslash = document.getElementById("crewneckimg").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("firstset").value = remslash;

      document.getElementById("myModal").style.display = "none";
      document.getElementById("detailmodal").style.display = "none";

      document.getElementById("notice1").style.opacity = "1";
      document.getElementById("notice1").style.zIndex = "999";
      setTimeout(function () {
        document.getElementById("notice1").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // SS

    const image3 = document.getElementById("SSimg");

    var el3 = document.getElementsByClassName("colorbtns3");
    for (var i = 0; i < el3.length; i++) {
      el3[i].onclick = changeSrc3;
    }

    function changeSrc3(e) {
      // get the data src
      let imgsrc3 = e.target.getAttribute("data-img");
      // set the src
      image3.src = imgsrc3;
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

      let remslash = document.getElementById("SSimg").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("firstset").value = remslash;

      document.getElementById("myModal").style.display = "none";
      document.getElementById("detailmodal").style.display = "none";

      document.getElementById("notice1").style.opacity = "1";
      document.getElementById("notice1").style.zIndex = "999";
      setTimeout(function () {
        document.getElementById("notice1").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // LS

    const image4 = document.getElementById("LSimg");

    var el4 = document.getElementsByClassName("colorbtns4");
    for (var i = 0; i < el4.length; i++) {
      el4[i].onclick = changeSrc4;
    }

    function changeSrc4(e) {
      // get the data src
      let imgsrc4 = e.target.getAttribute("data-img");
      // set the src
      image4.src = imgsrc4;
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

      let remslash = document.getElementById("LSimg").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("firstset").value = remslash;

      document.getElementById("myModal").style.display = "none";
      document.getElementById("detailmodal").style.display = "none";

      document.getElementById("notice1").style.opacity = "1";
      document.getElementById("notice1").style.zIndex = "999";
      setTimeout(function () {
        document.getElementById("notice1").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // LSforever

    const image5 = document.getElementById("LSforeverimg");

    var el5 = document.getElementsByClassName("colorbtns5");
    for (var i = 0; i < el5.length; i++) {
      el5[i].onclick = changeSrc5;
    }

    function changeSrc5(e) {
      // get the data src
      let imgsrc5 = e.target.getAttribute("data-img");
      // set the src
      image5.src = imgsrc5;
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

      let remslash = document.getElementById("LSforeverimg").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("firstset").value = remslash;

      document.getElementById("myModal").style.display = "none";
      document.getElementById("detailmodal").style.display = "none";

      document.getElementById("notice1").style.opacity = "1";
      document.getElementById("notice1").style.zIndex = "999";
      setTimeout(function () {
        document.getElementById("notice1").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // Jogger

    const image6 = document.getElementById("joggerimg");

    var el6 = document.getElementsByClassName("colorbtns6");
    for (var i = 0; i < el6.length; i++) {
      el6[i].onclick = changeSrc6;
    }

    function changeSrc6(e) {
      // get the data src
      let imgsrc6 = e.target.getAttribute("data-img");
      // set the src
      image6.src = imgsrc6;
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

      let remslash = document.getElementById("joggerimg").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("firstset").value = remslash;

      document.getElementById("myModal").style.display = "none";
      document.getElementById("detailmodal").style.display = "none";

      document.getElementById("notice1").style.opacity = "1";
      document.getElementById("notice1").style.zIndex = "999";
      setTimeout(function () {
        document.getElementById("notice1").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // Get the modal2
    var modal2 = document.getElementById("myModal2");
    var modalcontent2 = document.getElementById("myModalContent2");

    // Get the button that opens the modal
    var btn2 = document.getElementById("myBtn2");

    // Get the <span> element that closes the modal
    var span2 = document.getElementsByClassName("close2")[0];

    // When the user clicks the button, open the modal 
    btn2.onclick = function () {
      modal2.style.display = "block";
      setTimeout(function () {
        modalcontent2.style.opacity = "1";
      }, 300);
    }

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function () {
      modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal2) {
        modal2.style.display = "none";
      }
    }

    var basictees2 = document.getElementById("basictees2");
    var crewneck2 = document.getElementById("crewneck2");
    // var SS = document.getElementById("SS");
    // var LS = document.getElementById("LS");
    // var LSforever = document.getElementById("LSforever");
    // var jogger = document.getElementById("jogger");

    var closes2 = document.getElementsByClassName("closes2")[0];
    var detailmodal2 = document.getElementById("detailmodal2");
    var divsToHide2 = document.getElementsByClassName("detailcontent2"); //divsToHide is an array

    // BASIC TEES 2

    basictees2.onclick = function () {
      detailmodal2.style.display = "block";
      document.getElementById("detailbasictees2").style.display = "block";
    }

    // Reference the color 
    const imagemodal = document.getElementById("basictees2img");

    // Click on a color

    var le = document.getElementsByClassName("colorbtnsmodal");
    for (var i = 0; i < le.length; i++) {
      le[i].onclick = changeSrcModal;
    }

    function changeSrcModal(e) {
      // get the data src
      let imgsrcmodal = e.target.getAttribute("data-img");
      // set the src
      imagemodal.src = imgsrcmodal;
    }

    function submitBasicTees2() {
      document.getElementById("mainbasictees2").style.display = "block";
      document.getElementById("maincrewneck2").style.display = "none";
      document.getElementById("mainSS2").style.display = "none";
      document.getElementById("mainLS2").style.display = "none";
      document.getElementById("mainLSforever2").style.display = "none";
      document.getElementById("mainjogger2").style.display = "none";
      document.getElementById("plusbtn2").style.display = "none";
      document.getElementById("mainbasictees2img").src = document.getElementById("basictees2img").getAttribute("src");

      let remslash2 = document.getElementById("basictees2img").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("secondset").value = remslash2;

      document.getElementById("myModal2").style.display = "none";
      document.getElementById("detailmodal2").style.display = "none";
      document.getElementById("catalogue-finish-div").style.display = "block";
      document.getElementById("notice2").style.opacity = "1";
      document.getElementById("notice2").style.zIndex = "99";
      setTimeout(function () {
        document.getElementById("notice2").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // END BASIC TEES 2

    // CREW NECK 2

    crewneck2.onclick = function () {
      detailmodal2.style.display = "block";
      document.getElementById("detailcrewneck2").style.display = "block";
    }

    // Reference the color 
    const imagemodal2 = document.getElementById("crewneck2img");

    // Click on a color

    var le2 = document.getElementsByClassName("colorbtnsmodal2");
    for (var i = 0; i < le2.length; i++) {
      le2[i].onclick = changeSrcModal2;
    }

    function changeSrcModal2(e) {
      // get the data src
      let imgsrcmodal2 = e.target.getAttribute("data-img");
      // set the src
      imagemodal2.src = imgsrcmodal2;
    }

    function submitCrewNeck2() {
      document.getElementById("mainbasictees2").style.display = "none";
      document.getElementById("maincrewneck2").style.display = "block";
      document.getElementById("mainSS2").style.display = "none";
      document.getElementById("mainLS2").style.display = "none";
      document.getElementById("mainLSforever2").style.display = "none";
      document.getElementById("mainjogger2").style.display = "none";
      document.getElementById("plusbtn2").style.display = "none";
      document.getElementById("maincrewneck2img").src = document.getElementById("crewneck2img").getAttribute("src");

      let remslash2 = document.getElementById("crewneck2img").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("secondset").value = remslash2;

      document.getElementById("myModal2").style.display = "none";
      document.getElementById("detailmodal2").style.display = "none";
      document.getElementById("catalogue-finish-div").style.display = "block";
      document.getElementById("notice2").style.opacity = "1";
      document.getElementById("notice2").style.zIndex = "99";
      setTimeout(function () {
        document.getElementById("notice2").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // END CREW NECK 2

    // SS 2

    SS2.onclick = function () {
      detailmodal2.style.display = "block";
      document.getElementById("detailSS2").style.display = "block";
    }

    // Reference the color 
    const imagemodal3 = document.getElementById("SS2img");

    // Click on a color

    var le3 = document.getElementsByClassName("colorbtnsmodal3");
    for (var i = 0; i < le3.length; i++) {
      le3[i].onclick = changeSrcModal3;
    }

    function changeSrcModal3(e) {
      // get the data src
      let imgsrcmodal3 = e.target.getAttribute("data-img");
      // set the src
      imagemodal3.src = imgsrcmodal3;
    }

    function submitSS2() {
      document.getElementById("mainbasictees2").style.display = "none";
      document.getElementById("maincrewneck2").style.display = "none";
      document.getElementById("mainSS2").style.display = "block";
      document.getElementById("mainLS2").style.display = "none";
      document.getElementById("mainLSforever2").style.display = "none";
      document.getElementById("mainjogger2").style.display = "none";
      document.getElementById("plusbtn2").style.display = "none";
      document.getElementById("mainSS2img").src = document.getElementById("SS2img").getAttribute("src");

      let remslash2 = document.getElementById("SS2img").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("secondset").value = remslash2;

      document.getElementById("myModal2").style.display = "none";
      document.getElementById("detailmodal2").style.display = "none";
      document.getElementById("catalogue-finish-div").style.display = "block";
      document.getElementById("notice2").style.opacity = "1";
      document.getElementById("notice2").style.zIndex = "99";
      setTimeout(function () {
        document.getElementById("notice2").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // END SS 2

    // LS 2

    LS2.onclick = function () {
      detailmodal2.style.display = "block";
      document.getElementById("detailLS2").style.display = "block";
    }

    // Reference the color 
    const imagemodal4 = document.getElementById("LS2img");

    // Click on a color

    var le4 = document.getElementsByClassName("colorbtnsmodal4");
    for (var i = 0; i < le4.length; i++) {
      le4[i].onclick = changeSrcModal4;
    }

    function changeSrcModal4(e) {
      // get the data src
      let imgsrcmodal4 = e.target.getAttribute("data-img");
      // set the src
      imagemodal4.src = imgsrcmodal4;
    }

    function submitLS2() {
      document.getElementById("mainbasictees2").style.display = "none";
      document.getElementById("maincrewneck2").style.display = "none";
      document.getElementById("mainSS2").style.display = "none";
      document.getElementById("mainLS2").style.display = "block";
      document.getElementById("mainLSforever2").style.display = "none";
      document.getElementById("mainjogger2").style.display = "none";
      document.getElementById("plusbtn2").style.display = "none";
      document.getElementById("mainLS2img").src = document.getElementById("LS2img").getAttribute("src");

      let remslash2 = document.getElementById("LS2img").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("secondset").value = remslash2;

      document.getElementById("myModal2").style.display = "none";
      document.getElementById("detailmodal2").style.display = "none";
      document.getElementById("catalogue-finish-div").style.display = "block";
      document.getElementById("notice2").style.opacity = "1";
      document.getElementById("notice2").style.zIndex = "99";
      setTimeout(function () {
        document.getElementById("notice2").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // END LS 2

    // LS FOREVER 2

    LSforever2.onclick = function () {
      detailmodal2.style.display = "block";
      document.getElementById("detailLSforever2").style.display = "block";
    }

    // Reference the color 
    const imagemodal5 = document.getElementById("LSforever2img");

    // Click on a color

    var le5 = document.getElementsByClassName("colorbtnsmodal5");
    for (var i = 0; i < le5.length; i++) {
      le5[i].onclick = changeSrcModal5;
    }

    function changeSrcModal5(e) {
      // get the data src
      let imgsrcmodal5 = e.target.getAttribute("data-img");
      // set the src
      imagemodal5.src = imgsrcmodal5;
    }

    function submitLSforever2() {
      document.getElementById("mainbasictees2").style.display = "none";
      document.getElementById("maincrewneck2").style.display = "none";
      document.getElementById("mainLS2").style.display = "none";
      document.getElementById("mainLSforever2").style.display = "block";
      document.getElementById("mainSS2").style.display = "none";
      document.getElementById("mainjogger2").style.display = "none";
      document.getElementById("plusbtn2").style.display = "none";
      document.getElementById("mainLSforever2img").src = document.getElementById("LSforever2img").getAttribute("src");

      let remslash2 = document.getElementById("LSforever2img").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("secondset").value = remslash2;

      document.getElementById("myModal2").style.display = "none";
      document.getElementById("detailmodal2").style.display = "none";
      document.getElementById("catalogue-finish-div").style.display = "block";
      document.getElementById("notice2").style.opacity = "1";
      document.getElementById("notice2").style.zIndex = "99";
      setTimeout(function () {
        document.getElementById("notice2").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // END LS FOREVER 2

    // JOGGER 2

    jogger2.onclick = function () {
      detailmodal2.style.display = "block";
      document.getElementById("detailjogger2").style.display = "block";
    }

    // Reference the color 
    const imagemodal6 = document.getElementById("jogger2img");

    // Click on a color

    var le6 = document.getElementsByClassName("colorbtnsmodal6");
    for (var i = 0; i < le6.length; i++) {
      le6[i].onclick = changeSrcModal6;
    }

    function changeSrcModal6(e) {
      // get the data src
      let imgsrcmodal6 = e.target.getAttribute("data-img");
      // set the src
      imagemodal6.src = imgsrcmodal6;
    }

    function submitJogger2() {
      document.getElementById("mainbasictees2").style.display = "none";
      document.getElementById("maincrewneck2").style.display = "none";
      document.getElementById("mainLS2").style.display = "none";
      document.getElementById("mainjogger2").style.display = "block";
      document.getElementById("mainSS2").style.display = "none";
      document.getElementById("mainLSforever2").style.display = "none";
      document.getElementById("plusbtn2").style.display = "none";
      document.getElementById("mainjogger2img").src = document.getElementById("jogger2img").getAttribute("src");

      let remslash2 = document.getElementById("jogger2img").getAttribute("src").slice(7, 50).replace('.png', '').replace('/', '-');
      document.getElementById("secondset").value = remslash2;

      document.getElementById("myModal2").style.display = "none";
      document.getElementById("detailmodal2").style.display = "none";
      document.getElementById("catalogue-finish-div").style.display = "block";
      document.getElementById("notice2").style.opacity = "1";
      document.getElementById("notice2").style.zIndex = "99";
      setTimeout(function () {
        document.getElementById("notice2").style.opacity = "0";
      }, 5000)

      for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = "none";
      }

    }

    // END JOGGER 2


    closes2.onclick = function () {
      detailmodal2.style.display = "none";

      for (var i = 0; i < divsToHide2.length; i++) {
        divsToHide2[i].style.display = "none"; // depending on what you're doing
      }
    }
