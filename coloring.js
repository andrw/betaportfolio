  var work;
  var play;
  var othercolorswork=255;
  var othercolorsplay = 255;
  var colorRed = false;
  var colorBlue = false;
  var colorInterval;

  function init() {
    colorInterval = setInterval("colorIn()", 25);
    work = document.getElementById('work');
    play = document.getElementById('play');
}

  function color(el) {
    if(el == "work") {
        colorRed = true;
    }
   if (el =="play") {
      colorBlue = true;
    }
    
    if(el == "both") {
    colorRed = true;
    colorBlue=true;
    }
    
  }

// all coloring and logic goes here
function colorIn() {
  if(colorRed == true) {
     work.style.background="rgb(255, "+othercolorswork+", "+othercolorswork+")";
    othercolorswork-=15;
  }
  if(colorBlue == true) {
  play.style.background="rgb("+othercolorsplay+", "+othercolorsplay+", 255)";
  othercolorsplay-=15;
  }
    
    if(colorRed == false) {
     work.style.background="rgb(255, "+othercolorswork+", "+othercolorswork+")";
othercolorswork+=15;
}

    if(colorBlue == false) {
  play.style.background="rgb("+othercolorsplay+", "+othercolorsplay+", 255)";
othercolorsplay+=15;
}
  
  if(othercolorswork < 0) {
  othercolorswork = 0;
  }
  else if(othercolorswork >255) {
  othercolorswork = 255;
  }
  
if(othercolorsplay < 0) {
othercolorsplay = 0;
}
else if(othercolorsplay >255) {
othercolorsplay = 255;
}

}

function toWhite(el) {
  if(el == "work") {
    colorRed = false;
  }
  else if(el == "play") {
    colorBlue = false;
  }
  
  else if(el == "both") {
  colorRed = false;
  colorBlue = false;
  }
  
}
