/**
 * Created by Aranity on 11/05/2016.
 */
// Reset the game when the player catches a monster
var reset = function () {
    //player.x = canvas.width / 2;
    //player.y = canvas.height / 2;

    // Throw the monster somewhere on the screen randomly
    monster.x = 0 + (Math.random() * (canvas.width - 150));
    monster.y = 0 + (Math.random() * (canvas.height - 150));
    playerImage.src = player.skins.default;
    monsterImage.src = virus.skins.default;
};