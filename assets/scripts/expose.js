// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get the id from selector and assign a variable
  let list = document.getElementById("horn-select");

  //get the tag name from images and assign a variable
  let picture = document.getElementsByTagName("img");

  //get the volume control object
  let sound = document.getElementById("volume");

  //get the class name for audio
  let hornSound = document.getElementsByClassName("hidden")[0];

  //get the elements for button
  let butt = document.getElementsByTagName("button")[0];

  //instantiate new JSConfetti object
  const jsConfetti = new JSConfetti()

  //Conditionals to change images according to the selected option
  list.onchange = function(){
    if(list.value=='air-horn'){
      //console.log('Running air')
      picture[0].src='assets/images/air-horn.svg'
    }else if (list.value=='party-horn'){
      picture[0].src='assets/images/party-horn.svg'
      //console.log('Running party')
    }else if (list.value=='car-horn'){
      picture[0].src='assets/images/car-horn.svg'
      //console.log('Running car')
    }
  console.log('Running', list.value)
  }

  //Volume Controls:
  sound.onchange = function(){
    let val = parseInt(sound.value, 10)
    if(val==0){
      console.log('level 0')
      picture[1].src='assets/icons/volume-level-0.svg'
    } else if(val >= 1 && val < 33){
      console.log('level 1')
      picture[1].src='assets/icons/volume-level-1.svg'
    } else if(val >= 33 && val < 67){
      console.log('level 2')
      picture[1].src='assets/icons/volume-level-2.svg'
    } else if(val >= 67 ){
      console.log('level 3')
      picture[1].src='assets/icons/volume-level-3.svg'
    }
  }

  butt.addEventListener('click', function(){
    //console.log('Clicked Air!')
    hornSound.volume = sound.value / 100
    if(list.value=='air-horn'){
      //console.log('detected air-horn')
      hornSound.src='assets/audio/air-horn.mp3'
      hornSound.play()
    }else if(list.value=='party-horn'){
      //console.log('detected party-horn')
      hornSound.src='assets/audio/party-horn.mp3'
      hornSound.play()
      jsConfetti.addConfetti()
    }else if(list.value=='car-horn'){
      //console.log('detected car-horn')
      hornSound.src='assets/audio/car-horn.mp3'
      hornSound.play()
    }
  });

};