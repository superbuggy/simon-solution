$(document).on("ready", function(){

  var simon = {
    divColors: {
      red: $("#red"),
      yellow: $("#yellow"),
      blue: $("#blue"),
      green: $("#green"),
    },
    colorSequence: [],
    playerColorClicks: [],
    roundStep: 0,
    round: 0,

    randomColor: function(){
      //returns a random number between 0 to 3
      var randomIndex = Math.floor( Math.random() * 4 );
      simon.colorSequence.push( Object.keys(simon.divColors)[randomIndex] );
    },

    playSequence: function() {
      for (var divIndex = 0; divIndex < simon.colorSequence.length; divIndex++) {
        simon.flash(simon.divColors[ simon.colorSequence[divIndex] ], divIndex * 500 + 1);
      }
    },

    flash: function(colorDiv, delayMs){
      return setTimeout(function () {
        colorDiv.fadeOut(200).fadeIn(200);
        console.log(colorDiv);
      }, delayMs);
    },

    test: function(times){
      for (i=0; i < times; i++){
        simon.randomColor();
      }
      simon.playSequence();
    },

    begin: function(){
      $("div.button").on("click", function (){
        if ( simon.playerColorClicks.length < simon.colorSequence.length ) {
          simon.playerColorClicks.push( $(this).attr("id") );
          console.log($(this).attr("id") );
          simon.checkMatch();
        }
      })
      simon.playRound();
    },

    checkMatch: function(){
      console.log(simon.roundStep + "/" + simon.round);
      if ( simon.playerColorClicks[simon.roundStep] == simon.colorSequence[simon.roundStep] ) {
        simon.roundStep++;
        if (simon.roundStep == simon.round){
          simon.playRound();
        }
      } else {
        alert("lose");
      }
    },

    playRound: function() {
      simon.round++;
      simon.playerColorClicks = [];
      simon.roundStep = 0;
        simon.randomColor();
        simon.playSequence();
    }

  }

  simon.begin();


});
