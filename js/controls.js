left.onclick = moveLeft;
left.onmousedown = function(){
   holdMoveCar = setInterval(moveLeft,MAX_TIME);  
}
left.onmouseup = function(){
    clearInterval(holdMoveCar);  
}
left.onmouseout = function(){
    clearInterval(holdMoveCar);  
}  
left.addEventListener('touchstart', function(){
    holdMoveCar = setInterval(moveLeft,MAX_TIME); 
});
left.addEventListener('touchend', function(){
    clearInterval(holdMoveCar); 
});
left.addEventListener('touchleave', function(){
    clearInterval(holdMoveCar); 
});
function moveLeft(){
    onPlay();
    offPreview();
    if(carPosX >= 5 && lock != true){
        carPosX -= MOVE;
        leftMove -=MOVE;
        centerMove -=MOVE;
        rightMove -=MOVE;
        car.style.left = carPosX +"px";        
        left.style.left = leftMove + "px";
        center.style.left = centerMove + "px";
        right.style.left = rightMove + "px";
    }
}



right.onclick = moveRight;
right.onmousedown = function(){
    holdMoveCar = setInterval(moveRight,MAX_TIME);  
 }
right.onmouseup = function(){
     clearInterval(holdMoveCar);  
 }
 right.onmouseout = function(){
     clearInterval(holdMoveCar);  
 }

 window.onmouseout = function(){
    clearInterval(holdMoveCar);
}
right.addEventListener('touchstart', function(){
    holdMoveCar = setInterval(moveRight,MAX_TIME); 
});
right.addEventListener('touchend', function(){
    clearInterval(holdMoveCar); 
});
right.addEventListener('touchleave', function(){
    clearInterval(holdMoveCar); 
});
function moveRight (){
    onPlay();
    offPreview ();
    if(carPosX <= 285 && lock != true){
        carPosX += MOVE;
        leftMove +=MOVE;
        centerMove +=MOVE;
        rightMove +=MOVE;
        car.style.left = carPosX +"px";        
        left.style.left = leftMove + "px";
        center.style.left = centerMove + "px";
        right.style.left = rightMove + "px";
    }
}

center.onmouseover = function(){
    clearInterval(holdMoveCar);  
}

function moveCar (b){
    switch (b.keyCode) {
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
            break;
        case 13:
            overGame();
            break;
        case 82:
            lock = true;
            clearInterval(timer);
            clearInterval(holdMoveCar);
            if(maxPoint < point)maxPoint = point;
            result[0].innerHTML = "MAX POINT: " + maxPoint;
            result[1].innerHTML = "YOUR POINT: " + point;
            reload();
            break;
    }
}

addEventListener('keydown',moveCar);