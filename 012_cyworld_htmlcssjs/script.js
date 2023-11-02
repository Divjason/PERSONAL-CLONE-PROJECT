function menuHome() {
  document.querySelector("#contentFrame").setAttribute("src", "./home.html");
  document.querySelector("#menuHome").style =
    "color: black; background-color: white";
  document.querySelector("#menuGame").style =
    "color: white; background-color: #298eb5";
  document.querySelector("#menuJukebox").style =
    "color: white; background-color: #298eb5";
}
function menuGame() {
  document.querySelector("#contentFrame").setAttribute("src", "./game.html");
  document.querySelector("#menuHome").style =
    "color: white; background-color: #298eb5";
  document.querySelector("#menuGame").style =
    "color: black; background-color: white";
  document.querySelector("#menuJukebox").style =
    "color: white; background-color: #298eb5";
}
function menuJukebox() {
  document.querySelector("#contentFrame").setAttribute("src", "./jukebox.html");
  document.querySelector("#menuHome").style =
    "color: white; background-color: #298eb5";
  document.querySelector("#menuGame").style =
    "color: white; background-color: #298eb5";
  document.querySelector("#menuJukebox").style =
    "color: black; background-color: white";
}
