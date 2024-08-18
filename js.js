var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;
var image1 ="images/dice"+random1+".png";
var image2 ="images/dice"+random2+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2)
if (random1===random2){
    document.querySelector("h1").innerHTML="Draw"
}
else if (random1>random2){
    document.querySelector("h1").innerHTML="PLayer 1 wins!"
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="PLayer 2 wins!"

}
