function openProject(projectName) {
  var i;
  var x = document.getElementsByClassName("projekt");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(projectName).style.display = "block";
}