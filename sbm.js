phrase="aHVieQ=="
phrase2="YXR0ZXZhcmI="
function sbm2(){
  document.getElementById("checker").onkeyup = function(e){
    if(e.keyCode == 13){
      sbm();
    }
  }
}
function sbm(){
  if(document.getElementById("checker").value==atob(phrase)){
    document.getElementById("Blocker").style.display="none"
    document.getElementById("Menu").style.display="block"
    document.getElementById("bg-image").style.display="block"
  }
}
function sbm4(){
  document.getElementById("checker").onkeyup = function(e){
    if(e.keyCode == 13){
      sbm3();
    }
  }
}
function sbm3(){
  if(document.getElementById("checker").value==atob(phrase2)){
    document.getElementById("Blocker").style.display="none"
    document.getElementById("Menu").style.display="block"
    document.getElementById("bg-image").style.display="block"
  }
}
