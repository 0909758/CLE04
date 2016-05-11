/**
 * Created by Aranity on 09/05/2016.
 */
// Let's play this game!
//Sound:
var gulp_sound ="sound/gulp.wav";
//Background:

// Create the canvas

//Timer prevents playermodel update after eating:
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 700;
document.body.appendChild(canvas);

// Background 1
var bgReady = false;
var bgImage = new Image();

bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = background.skin;

// Background 2
var bg2Ready = false;
var bg2Image = new Image();

bg2Image.onload = function () {
    bg2Ready = true;
};
bg2Image.src = middle_layer.skin;

// Background 3
var bg3Ready = false;
var bg3Image = new Image();

bg3Image.onload = function () {
    bg3Ready = true;
};
bg3Image.src = top_layer.skin;





// player image
var playerReady = false;
var playerImage = new Image();
playerImage.onload = function () {
    playerReady = true;
};
playerImage.src = player.skins.default;

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = virus.skins.default;


var monster = {};
var monstersCaught = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

// The main game loop
var main = function () {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();

    then = now;

    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
reset();
//spawn
player.attributes.x = canvas.width / 2 - (player.attributes.width / 2);
player.attributes.y = canvas.height / 2 -(player.attributes.height / 2);
main();