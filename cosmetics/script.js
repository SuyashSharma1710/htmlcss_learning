setTimeout(()=>{
  const flash = document.querySelector('.flashscrn');

  if(flash){
    flash.style.display='none';
  }

},2500);
window.addEventListener("scroll", function () {
  const parallax = document.querySelector(".banner");
  let scrollPosition = window.pageYOffset;

  // Adjust the speed factor as needed
  parallax.style.backgroundPositionY = -80 + scrollPosition * 0.3 + "px";
});
function popup(){
  alert("you have click the button");
}
