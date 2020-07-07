var d= new Date();
var n= d.getFullYear();
if(n==2020){
document.getElementById("year").innerHTML = n;
}
else{
document.getElementById("year").innerHTML = "2020 - " + n;
}




const texts=["PROGRAMMER. . .","PHOTOGRAPHER. . .","DESIGNER. . ."];
let count=0;
let index= 0;
let currentText="";
let letter="";

( function type(){
    if(count=== texts.length){
        count=0;
    }
    currentText=texts[count];
    letter=currentText.slice(0, ++index);
    document.querySelector(".typing").textContent=letter;
    if(letter.length===currentText.length){
        count++;
        index=0;
    }
    setTimeout(type,200);

}) ();




function heartbeat(){
document.getElementById("heart").style.color="rgb(228, 9, 9)"; 
document.getElementById("heart").style.animationDuration="1.3s";
document.getElementById("pulse").style.animationDuration="6s";
document.getElementById("h1-text").innerHTML="Thanks ! for Helping me";
document.getElementById("h5-text").innerHTML="HURRAY !! ";
document.getElementById("h4-text").innerHTML="Finally! I'm stable.";
document.getElementById("h4-text").style.color="#00acee"; 
document.getElementById("h6-text").style.display="none";
document.getElementById("text").style.display="block";
}



