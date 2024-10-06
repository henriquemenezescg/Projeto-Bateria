document.body.addEventListener('keyup',(event)=>{
  playsound(event.code.toLowerCase());
})

function playsound(sound){
  let audioElement = document.querySelector(`#s_${sound}`);
}