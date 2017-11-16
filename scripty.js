class Simon {
  constructor() {
    this.divs = {
      red: $("#red"),
      yellow: $("#yellow"),
      blue: $("#blue"),
      green: $("#green"),
    }
    this.randomSequence = []
    this.playerSequence = []
    this.sequenceStep = 0
    this.round = 0
  }

  playSequence () {
    this.randomSequence.forEach( (color, i) => this.flash(this.divs[color], i * 350))
  }

  randomColor () {
    let randomIndex = Math.floor(Math.random() * 4)
    this.randomSequence.push(Object.keys(this.divs)[randomIndex])
  }

  flash (colorDiv, milliseconds) {
    setTimeout(_ => colorDiv.fadeOut(200).fadeIn(200), milliseconds)
  }

  start () {
    $("div.button").on("click", (event) => {
      if (this.playerSequence.length < this.randomSequence.length) {
        this.playerSequence.push($(event.target).attr("id"));
        this.checkMatch();
      }
    })
    this.playRound();
  }

  checkMatch () {
    if (this.playerSequence[this.sequenceStep] == this.randomSequence[this.sequenceStep]) {
      this.sequenceStep++;
      if (this.sequenceStep == this.round) {
        this.playRound();
      }
    } else {
      alert("You made it " + this.round + " rounds!");
    }
  }

  playRound () {
    this.round++
    this.playerSequence = []
    this.sequenceStep = 0
    this.randomColor()
    this.playSequence()
  }
}

$(document).ready(function () {
  const simonInstance = new Simon()
  simonInstance.start()
})
