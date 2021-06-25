function calc(){
  var lenght = document.getElementById("lenght").value;
  var width = document.getElementById("widht").value;
  
  var area = lenght * width;
  document.getElementById("answer").value = area;
}
calc();
