var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy"){
            numSquares = 3;
        }else{
            numSquares = 6;
        }
        reset();
    });
    
}
function reset(){
    //generate all new colros
    colors = generateRandomColors(numSquares);
    //pick a new random color
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i=0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        } 
    }
    h1.style.backgroundColor = "steelblue";
}
resetButton.addEventListener("click", function(){
    reset();
});
colorDisplay.textContent = pickedColor;
for(var i=0;i< squares.length;i++){
    //add colors
    squares[i].style.backgroundColor = colors[i];
    //add click listenesrs
    squares[i].addEventListener("click", function(){
        //grab color of the Clicked square
       var clickedColor = this.style.backgroundColor;
       //compare clicked color
       if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!";
           changeColors(pickedColor);
           h1.style.backgroundColor = clickedColor;
           resetButton.textContent = "Play Again?"; 
           
       }else{
           this.style.backgroundColor = "#232323";
           messageDisplay.textContent= "Try Again!";
       }
    });
}
function changeColors(color){
    //loop through all squares
    for(var i=0; i<squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i<num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}
function randomColor(){
    //pick red from 0-255
   var r = Math.floor(Math.random() * 256);
    //pich green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
