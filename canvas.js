var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "red",
    y = 2;

canvas = document.getElementById("can");
ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
w = canvas.width;
h = canvas.height;

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - document.getElementById("map").offsetLeft;
        currY = e.clientY - document.getElementById("map").offsetTop;
    
        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - document.getElementById("map").offsetLeft;
            currY = e.clientY - document.getElementById("map").offsetTop;
            draw();
        }
    }
}

function clear_canvas(){
    ctx.clearRect(0, 0, w, h);
}

canvas.addEventListener("mousemove", function(ev) {
    findxy('move', ev);
}, false);
canvas.addEventListener("mousedown", function(ev) {
    findxy('down', ev);
}, false);
canvas.addEventListener("mouseup", function(ev) {
    findxy('up', ev);
}, false);
canvas.addEventListener("mouseout", function(ev) {
    findxy('out', ev);
}, false);

document.getElementById("clear").addEventListener("click", function(){
    clear_canvas();
}, false)