$(".colorCar").on("click", function(){
    $("#checkOn").remove();
    $(this).append("<div id='checkOn'>&#10004;</div>");
    $("#car").css("background" , $(this).css("background"));
    $("#roofCar").css("background" , $(this).css("background"));    
});