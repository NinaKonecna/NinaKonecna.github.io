phrase="aHVieQ=="
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
  }

}
