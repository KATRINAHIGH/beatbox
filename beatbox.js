$(document).ready(function() {
    // This controls the button for the tom beat.
    // This variable calls the tom audio element in the HTML and stores it in the variable tomBeat.
    var tomBeat = document.getElementById("tAudio");
  
    // This turns our <div id= "tom"> into a button that plays our audio file when the box is pressed.
    $("#tom").mousedown(function() {
      // This is a property that scrubs the audio file back to its start.
      tomBeat.currentTime = 0;
      // This plays the audio file.
      tomBeat.play();
    });
  
    // This controls the button for the clap beat.
  
    var clapBeat = document.getElementById("cAudio");
  
    $("#clap").mousedown(function() {
      clapBeat.currentTime = 0;
      clapBeat.play();
    });
  
    // This controls the button for the kick beat.
  
    var kickBeat = document.getElementById("kAudio");
  
    $("#kick").mousedown(function() {
      kickBeat.currentTime = 0;
      kickBeat.play();
    });
  
    // This controls the button for the openhat beat.
  
    var openhatBeat = document.getElementById("oAudio");
  
    $("#openhat").mousedown(function() {
      openhatBeat.currentTime = 0;
      openhatBeat.play();
    });
  
    // This controls the button for the boom beat.
  
    var boomBeat = document.getElementById("bAudio");
  
    $("#boom").mousedown(function() {
      boomBeat.currentTime = 0;
      boomBeat.play();
    });
  
    // This controls the button for the ride Beat.
  
    var rideBeat = document.getElementById("rAudio");
  
    $("#ride").mousedown(function() {
      rideBeat.currentTime = 0;
      rideBeat.play();
    });
  
    // This controls the button for the snare beat.
  
    var snareBeat = document.getElementById("sAudio");
  
    $("#snare").mousedown(function() {
      snareBeat.currentTime = 0;
      snareBeat.play();
    });
  });
  