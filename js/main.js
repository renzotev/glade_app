document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  
  function backKeyDown() {
    navigator.app.exitApp(); // To exit the app!
  }  

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

  FastClick.attach(document.body);

  document.addEventListener("backbutton", backKeyDown, true);

  $(".slides.presentation").on("click", function () {
    $(this).addClass("fade"); 
    $("#aerosol").css("opacity", "1");
  });

  $("#aerosol").on("click", function () {
    $(this).addClass("fade-item");
      setTimeout(function(){
        $("#aerosol").css("opacity", "0");
        setTimeout(function(){
          $(".banio2").addClass("fade"); 
          $("#pastilla").css("opacity", "1");
          playAudio("bells-short.mp3");
        }, 300);
      }, 2000);
  });

  $("#pastilla").on("click", function () {
    $(this).addClass("fade-item");
      setTimeout(function(){
        $("#pastilla").css("opacity", "0");
        setTimeout(function(){
          $(".banio1").addClass("fade");
          $(".final-msj").css("opacity", "1");
          playAudio("bells-large.mp3");
        }, 300);
      }, 2000);
  });

  /*var init = function () {

  }*/

}