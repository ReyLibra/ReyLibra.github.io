//Function A - 3 Slideshows
function plusSlidesB(n) {
  showSlidesB(slideIndexB += n);
}
function plusSlidesA(n) {
  showSlidesA(slideIndexA += n);
}
function plusSlidesQ(n) {
  showSlidesQ(slideIndexQ += n);
}


function currentSlideB(n) {
  showSlidesB(slideIndexB = n);
}
function currentSlideA(n) {
  showSlidesA(slideIndexA = n);
}
function currentSlideQ(n) {
  showSlidesBQ(slideIndexQ = n);
}


function showSlidesB(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesB");
  var dots = document.getElementsByClassName("dotB");
  if (n > slides.length) {slideIndexB = 1}
    if (n < 1) {slideIndexB = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndexB-1].style.display = "block";
  dots[slideIndexB-1].className += " active";
}
function showSlidesA(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesA");
  var dots = document.getElementsByClassName("dotA");
  if (n > slides.length) {slideIndexA = 1}
    if (n < 1) {slideIndexA = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndexA-1].style.display = "block";
  dots[slideIndexA-1].className += " active";
}
function showSlidesQ(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesQ");
  var dots = document.getElementsByClassName("dotQ");
  if (n > slides.length) {slideIndexQ = 1}
    if (n < 1) {slideIndexQ = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndexQ-1].style.display = "block";
  dots[slideIndexQ-1].className += " active";
}

//Function B - Servant Selection
function classSwitchOkita() {
	document.getElementById("flavourOkita").style.display = "block";
	if (document.getElementById("flavourOkita").style.display == "block") {
		document.getElementById("flavourHokusai").style.display = "none";
		document.getElementById("flavourMashu").style.display = "none";
		document.getElementById("okitaSelector").classList.add("servantSelectorActive");
		if (document.getElementById("hokusaiSelector").classList.contains("servantSelectorActive") || document.getElementById("mashuSelector").classList.contains("servantSelectorActive")) {
			document.getElementById("hokusaiSelector").classList.remove("servantSelectorActive");
			document.getElementById("mashuSelector").classList.remove("servantSelectorActive");
		}
	}
	document.getElementById("top3Viewer").src = "images/okita.png";
}
function classSwitchHokusai() {
	document.getElementById("flavourHokusai").style.display = "block";
	if (document.getElementById("flavourHokusai").style.display == "block") {
		document.getElementById("flavourOkita").style.display = "none";
		document.getElementById("flavourMashu").style.display = "none";
		document.getElementById("hokusaiSelector").classList.add("servantSelectorActive");
		if (document.getElementById("okitaSelector").classList.contains("servantSelectorActive") || document.getElementById("mashuSelector").classList.contains("servantSelectorActive")) {
			document.getElementById("okitaSelector").classList.remove("servantSelectorActive");
			document.getElementById("mashuSelector").classList.remove("servantSelectorActive");
		}
	}
	document.getElementById("top3Viewer").src = "images/hokusai.png";
	
}
function classSwitchMashu() {
	document.getElementById("flavourMashu").style.display = "block";
	if (document.getElementById("flavourMashu").style.display == "block") {
		document.getElementById("flavourOkita").style.display = "none";
		document.getElementById("flavourHokusai").style.display = "none";
		document.getElementById("mashuSelector").classList.add("servantSelectorActive");
		if (document.getElementById("hokusaiSelector").classList.contains("servantSelectorActive") || document.getElementById("okitaSelector").classList.contains("servantSelectorActive")) {
			document.getElementById("hokusaiSelector").classList.remove("servantSelectorActive");
			document.getElementById("okitaSelector").classList.remove("servantSelectorActive");
		}
	}
	document.getElementById("top3Viewer").src = "images/mash.png";
}

//Function C - Gallery Selection
function display(imgs) {
	var expandImg = document.getElementById("expandedImg");
	expandImg.src = imgs.src;
	if (expandImg.src == imgs.src) {
		imgs.classList.add("thumbnailActive");
		if (expandImg.src == document.getElementById("picSelected1").src) {
			document.getElementById("picSelected2").classList.remove("thumbnailActive");
			document.getElementById("picSelected3").classList.remove("thumbnailActive");
		}
		if (expandImg.src == document.getElementById("picSelected2").src) {
			document.getElementById("picSelected1").classList.remove("thumbnailActive");
			document.getElementById("picSelected3").classList.remove("thumbnailActive");
		}
		if (expandImg.src == document.getElementById("picSelected3").src) {
			document.getElementById("picSelected1").classList.remove("thumbnailActive");
			document.getElementById("picSelected2").classList.remove("thumbnailActive");
		}
	}
}

//Function D - Footer Clock
function clock() {
	var d = new Date()
	document.getElementById("clock").innerHTML = "<h2>Time Zones</h2><hr /><h3>EST: " + checkTime(d.getHours()) + ':' + checkTime(d.getMinutes()) + ':' + checkTime(d.getSeconds()) + "</h3><h3>PST: " + checkTime(d.getHours() - 3) + ':' + checkTime(d.getMinutes()) + ':' + checkTime(d.getSeconds()) + "</h3><h3>JST: " + checkTime(d.getHours() + 14) + ':' + checkTime(d.getMinutes()) + ':' + checkTime(d.getSeconds()) + "</h3>";
	var t = setTimeout(clock, 500);
}
function checkTime(i) {
	if (i < 10) {
		i = "0" + i
	};
	return i;
}