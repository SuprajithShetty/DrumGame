var number_of_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < number_of_buttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var sound_alphabet = this.innerHTML;
    makesound(sound_alphabet);
    clickblin(sound_alphabet);
  });
}

document.addEventListener("keypress",function(event){
  makesound(event.key);
  clickblin(event.key);
});

function makesound(key){
  switch (key) {
    case "w":
      var audio1 = new Audio("crash.mp3");
      audio1.play();
      break;
    case "a":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;
  }
}
function clickblin(currentkey){
var activerntn = document.querySelector("."+currentkey);
activerntn.classList.add("pressed");


setTimeout(function(){
activerntn.classList.remove("pressed");
},100);

}
