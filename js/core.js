
const MOVE = 5;
const INTERVAL = 1;
const MIN_TIME = Math.round(6 / (SCREEN_HEIGHT/640));
const MAX_TIME = Math.round(30 / (SCREEN_HEIGHT/640));
const MOVE_BARRIER = 5;
const MAX_MOVE_DOWN_BARRIER = SCREEN_HEIGHT;


var timer;
var lock = false;
var preview = true;
var controlPoint = true;
var play = true;
var carPosX = LEFT_CAR;
var carPosY = TOP_CAR;
var leftMove = LEFT_MOVE;
var rightMove = RIGHT_MOVE;
var centerMove = CENTER_MOVE;
var moveBarrierX = 0;
var moveBarrierY = MAX_MOVE_DOWN_BARRIER;
var maxPoint = 0;
var point = 0;
var time = MAX_TIME;
var heightRoad = TOP_ROAD;
var car = document.getElementById("car");   
var barrier = document.getElementsByClassName("barrier");
var left = document.getElementById("left");
var center = document.getElementById("center");
var right = document.getElementById("right");
var gameOver = document.getElementById ("gameOver");
var viewPoint = document.getElementById("point");
var viewMaxPoint = document.getElementById("maxPoint");
var result = document.getElementsByClassName("result");
var replay = document.getElementById("replay");
var holdMoveCar;


function moveBarrierDown(){
    if(conflict(carPosX,carPosX + 70, moveBarrierX,moveBarrierX + 120) && conflict (carPosY , carPosY + 120, moveBarrierY , moveBarrierY + 30)){
        overGame();   
    }
    else if(moveBarrierY <= MAX_MOVE_DOWN_BARRIER){
        if(controlPoint){
            if(conflict( moveBarrierX,moveBarrierX + 120, carPosX, carPosX + 70) && conflict (carPosY , carPosY + 120, moveBarrierY , moveBarrierY + 30)){
                point++;
                viewPointScreen();
                controlPoint = false;   
            }
        }
        moveBarrierY += MOVE_BARRIER;
        barrier[0].style.top = moveBarrierY + "px";
        heightRoad += MOVE_BARRIER;
        road.style.top = heightRoad + "px";
        }
        else{
            if(time >= MIN_TIME){
                clearInterval(timer);
                time -= INTERVAL;
                timer = setInterval(moveBarrierDown,time);
            }
            moveBarrierX = (Math.round(Math.random() * (235 - 5) + 5));
            barrier[0].style.left = moveBarrierX + "px";
            road.style.top = heightRoad + "px";
            heightRoad = TOP_ROAD;
            moveBarrierY = 0;
            controlPoint = true;
        }
}


function conflict(begX,endX,begY,endY){ 
    return ((begX <= begY) && (endX >= begY)) || ((begX <= endY) && (endX >= endY)); 
}
function overGame (){ 
    lock = true;
    clearInterval(timer);
    clearInterval(holdMoveCar);
    if(maxPoint < point)maxPoint = point;
    result[0].innerHTML = "MAX POINT: " + maxPoint;
    result[1].innerHTML = "YOUR POINT: " + point;
    gameOver.style.display = "block";
    replay.onclick = reload; 
}

function offPreview (){
    if(preview){
        left.style.opacity = "0";
        right.style.opacity = "0";
        preview = false;
    }
}

function onPlay (){
    if(play){
        viewPointScreen ();
        timer = setInterval(moveBarrierDown,time);
        play = false;
    }
}

function viewPointScreen(){
    if(point < maxPoint){
        viewPoint.innerHTML = point;
        viewPoint.style.color = "black";
        viewMaxPoint.innerHTML = maxPoint;
    }
    else{
        viewPoint.style.color = "green";
        viewPoint.innerHTML = point;
        viewMaxPoint.innerHTML = "";
    }
}

function reload (){
    lock = false;
    controlPoint = true;
    carPosX = LEFT_CAR;
    car.style.left = carPosX + "px";
    carPosY = TOP_CAR;
    moveBarrierX = 0;
    moveBarrierY = MAX_MOVE_DOWN_BARRIER;
    heightRoad = TOP_ROAD;
    point = 0;
    time = MAX_TIME;
    leftMove = LEFT_MOVE;
    rightMove = RIGHT_MOVE;
    centerMove = CENTER_MOVE;
    left.style.left = LEFT_MOVE + "px";
    center.style.left = CENTER_MOVE + "px";
    right.style.left = RIGHT_MOVE + "px";
    viewPointScreen();
    gameOver.style.display = "none";
    timer = setInterval(moveBarrierDown,time);
    viewPointScreen();
}