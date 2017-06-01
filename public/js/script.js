//p5js sketch
  var socket = io();
function setup() {
    createCanvas($(window).width(), $(window).height());
    background(51);
}

function draw() {
    if (mouseIsPressed) {
   
        noStroke();
        fill(255, 0, 100);
        ellipse(mouseX, mouseY, 10, 10);
        var data = {
            x:mouseX,
            y:mouseY
        }
        socket.emit('mouseMove',data);
    }
    socket.on('mouseMove',function(msg){
        noStroke();
        fill(255, 0, 100);
        ellipse(msg.x,msg.y,10,10)
    });
}
// client 
