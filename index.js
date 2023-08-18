const player1 = document.querySelector('#player1Name');
const player2 = document.querySelector('#player2Name');

window.onbeforeunload = function(){
    if (player1.value.trim()!=='' || player2.value.trim()!==''){
        return "Data will be lost.";
    } 
}
player1.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        event.preventDefault();
        if (player2.value.trim()===''){
            player2.focus();
        } else{
            document.querySelector('#playBtn').focus();
            document.querySelector('#playBtn').click();
        }
    }
});
player2.addEventListener('keypress', function(event){
    if (event.key === 'Enter') {
        event.preventDefault();
        if (player1.value.trim()===''){
            player1.focus();
        } else{
            document.querySelector('#playBtn').focus();
            document.querySelector('#playBtn').click();
        }
    }
});
function addNames(){
    if (player1.value.trim()!==''){
        document.querySelector("#dice1 p").textContent=player1.value.trim();
    }
    if (player2.value.trim()!==''){
        document.querySelector("#dice2 p").textContent=player2.value.trim();
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
