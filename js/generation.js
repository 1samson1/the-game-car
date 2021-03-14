const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const LEFT_CAR = 145;
const HEIGHT_CAR = 120;
const PADDING_CAR_BOTTOM = 40;
const TOP_ROAD = -SCREEN_HEIGHT;
const TOP_CAR = SCREEN_HEIGHT - HEIGHT_CAR - PADDING_CAR_BOTTOM;
const LEFT_MOVE = -(SCREEN_WIDTH/2);
const RIGHT_MOVE = (SCREEN_WIDTH/2);
const WIDTH_CENTER = 36;
const CENTER_MOVE = 180 - Math.round(WIDTH_CENTER/2);

var carPosY = TOP_CAR;
var car = document.createElement("div");
var barrier = document.createElement("div");
var left = document.createElement("div");
var right = document.createElement("div");
var center = document.createElement("div");
var elemCar = new Array(6);
var road = document.getElementById("road");
var game = document.getElementsByClassName("game");

$(".game").css("margin-left",(SCREEN_WIDTH/2));

car.id = "car";
for(var i=0;i<elemCar.length;i++){
    elemCar[i] = document.createElement ("div");
    elemCar[i].className = "elemCar";
}
elemCar[0].id = "frontLeftLight";
elemCar[1].id = "frontRightLight";
elemCar[2].id = "roofCar";
elemCar[3].id = "backLeftLight";    
elemCar[4].id = "backRightLight";
elemCar[5].id = "glass";

for(var i=0;i<elemCar.length ;i++)
    car.appendChild(elemCar[i]);
car.style.top = carPosY + "px";
game[0].appendChild(car);

barrier.className ="barrier";
game[0].appendChild(barrier);
var bort = $("<div class='borts'></div>").addClass("leftBort");
$(".barrier").append(bort);
var bort = $("<div class='borts'></div>").addClass("rightBort");
$(".barrier").append(bort);

left.id ="left";
left.className ="blr";
left.innerHTML = "LEFT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
left.style.width = SCREEN_WIDTH + "px";
left.style.left = LEFT_MOVE + "px";
game[0].appendChild(left);

center.id = "center";
center.style.width = WIDTH_CENTER + "px";
center.style.left = CENTER_MOVE + "px";
game[0].appendChild(center);

right.id = "right";
right.className ="blr";
right .innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RIGHT";
right.style.width = SCREEN_WIDTH + "px";
right.style.left = RIGHT_MOVE + "px";
game[0].appendChild(right);

road.style.height = (SCREEN_HEIGHT * 3) + "px";