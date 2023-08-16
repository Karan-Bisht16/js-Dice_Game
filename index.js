window.onbeforeunload = function(){
    return "your data will be lost";
}

function addNames(){
    let player1 = document.querySelector("#player1Name").value.trim();
    if (player1!==''){
        document.querySelector("#dice1 p").textContent=player1;
    }
    let player2 = document.querySelector("#player2Name").value.trim();
    if (player2!==''){
        document.querySelector("#dice2 p").textContent=player2;
    }
}

var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
var resultDiv = document.querySelector(".result");

function rollAgain(){
    var number1 = Math.floor(Math.random()*6)+1;
    var path1='./images/img-dice'+number1+'.png';
    image1.setAttribute("src", path1);

    var number2 = Math.floor(Math.random()*6)+1;
    var path2='./images/img-dice'+number2+'.png';
    image2.setAttribute("src", path2);
    
    if (number1===number2) {
        resultDiv.textContent="Draw";
        image1.style.backgroundColor="gray";
        image2.style.backgroundColor="gray";

    } else if (number1>number2) {
        resultDiv.textContent = document.querySelector("#dice1 p").textContent.trim()+" wins!";
        image1.style.backgroundColor = "red";
        image2.style.backgroundColor = "gray";
    } else {
        resultDiv.textContent = document.querySelector("#dice2 p").textContent.trim()+" wins!";
        image1.style.backgroundColor = "gray";
        image2.style.backgroundColor = "red";
    }
}