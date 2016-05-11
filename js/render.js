/**
 * Created by Aranity on 11/05/2016.
 */

// Draw everything
var render = function () {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (bgReady) {
        ctx.drawImage(bgImage,background.attributes.x,background.attributes.y,background.attributes.width,background.attributes.height);
    }
    if (bg2Ready) {
        ctx.drawImage(bg2Image, middle_layer.attributes.x, middle_layer.attributes.y,middle_layer.attributes.width,middle_layer.attributes.height);
    }
    if (bg3Ready) {
        ctx.drawImage(bg3Image, top_layer.attributes.x, top_layer.attributes.y,top_layer.attributes.width,top_layer.attributes.height);
    }

    if (playerReady) {
        ctx.drawImage(playerImage, player.attributes.x, player.attributes.y,player.attributes.width,player.attributes.height);
    }

    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y ,virus.attributes.width,virus.attributes.height);
    }

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Punten: " + monstersCaught, 25, 25);

    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Menu(esc)", 850, 25);

    ctx.fillText("HP",25,650);

};




