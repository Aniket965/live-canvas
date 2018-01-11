//p5js sketch
  var socket = io();
function setup() {
    createCanvas($(window).width(), $(window).height());
    background(51);
}
var color;
var defaultColor = "#0000ff";
window.addEventListener("load", startup, false);
function startup() {
  color = document.querySelector("#favcolor");
  color.value = defaultColor;
  

  color.select();
}





function draw() {
    if (mouseIsPressed) {

        noStroke();
        fill(color.value);
        ellipse(mouseX, mouseY, 10, 10);
        var data = {
            x:mouseX,
            y:mouseY
        }
        socket.emit('mouseMove',data);
    }
    socket.on('mouseMove',function(msg){
        noStroke();
        fill(color.value);
        ellipse(msg.x,msg.y,10,10)
    });
}
// client
