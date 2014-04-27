/*document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {*/
    
  function playAudio(url) {
      var my_media = new Media("/android_asset/www/sound/"+url,
              // success callback
               function () { console.log("playAudio():Audio Success"); },
              // error callback
               function (err) { console.log("playAudio():Audio Error: " + err); }
      );
             // Play audio
      my_media.play();
  }

  $(".slides.presentation").on("click", function () {
    $(this).addClass("fade"); 
    playAudio("bells-short.mp3");
    setTimeout(function(){
         $("#aerosol").css("opacity", "1");
     }, 2000);
  });

  $("#aerosol").on("click", function () {
    $(".banio2").addClass("fade");  
    $("#aerosol").addClass("fade");
    playAudio("bells-short.mp3");
    setTimeout(function(){
         $("#pastilla").css("opacity", "1");
     }, 2000);
  });

  $("#pastilla").on("click", function () {
    $(this).addClass("fade"); 
    $(".banio1").addClass("fade");
    playAudio("bells-large.mp3");
    setTimeout(function(){
         $(".final-msj").css("opacity", "1");
     }, 2000);
  });

  /*var init = function () {

  }*/



//}