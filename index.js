var randomNumber1 = Math.floor(Math.random() * 6) +1;

var randomDiceNumber = "dice" + randomNumber1 + ".png";

var randimImagesource = "images/" + randomDiceNumber;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randimImagesource);

var randomNumber2 = Math.floor(Math.random()* 6) + 1;

var randimImagesource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randimImagesource2);









