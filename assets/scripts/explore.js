// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Get the select voice id as a new object
  let speech = window.speechSynthesis

  const voiceSelect = document.querySelector('select');

  let voiceselection = document.getElementById('voice-select')

  let picture = document.getElementsByTagName("img")[0]

  let voices = []

  let talkButt = document.getElementsByTagName("button")[0];

  let talk = document.getElementsByTagName("textarea")[0]; 

  function makeVoiceList() {
    voices = speech.getVoices();
  
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  makeVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = makeVoiceList;
  }

  talkButt.addEventListener('click', function(){
    const phrase1 = new SpeechSynthesisUtterance(talk.value)
    speech.speak(phrase1);
    setInterval(function(){
      const speaking = speech.speaking
      if(speaking==true){
        picture.src="assets/images/smiling-open.png"
      }else{
        picture.src="assets/images/smiling.png"
      }
    }, 100)
  })
  
}