/**
 * Created by Aranity on 09/05/2016.
 */
// Update game objects
//Controls:
var update = function (modifier) {
    if (38 in keysDown || 87 in keysDown) { // Player holding up
        if  (player.attributes.y >= 0){
            player.attributes.y -= player.attributes.speed * modifier;
            background.attributes.y += background.attributes.speed * modifier;
            top_layer.attributes.y += top_layer.attributes.speed * modifier;
            if (biteRange())
            {
                playerImage.src = player.skins.bite_left;
            }
            else{
                playerImage.src = player.skins.default;
            }
        }
    }
    if (40 in keysDown || 83 in keysDown) { // Player holding down
        if  (player.attributes.y <= 500) {
            player.attributes.y += player.attributes.speed * modifier;
            background.attributes.y -= background.attributes.speed * modifier;
            top_layer.attributes.y -= top_layer.attributes.speed * modifier;
            if (biteRange())
            {
                playerImage.src = player.skins.bite_right;
            }
            else {
                playerImage.src = player.skins.default;
            }
        }
    }
    if (37 in keysDown || 65 in keysDown) { // Player holding left
        if  (player.attributes.x >= 0) {
            player.attributes.x -= player.attributes.speed * modifier;
            background.attributes.x += background.attributes.speed * modifier;
            top_layer.attributes.x += top_layer.attributes.speed * modifier;
            if (biteRange())
            {
                playerImage.src = player.skins.bite_left;
            }
            else {
                playerImage.src = player.skins.look_left;
            }
        }
    }
    if (39 in keysDown || 68 in keysDown) { // Player holding right
        if  (player.attributes.x <= 900) {
            player.attributes.x += player.attributes.speed * modifier;
            background.attributes.x -= background.attributes.speed * modifier;
            top_layer.attributes.x -= top_layer.attributes.speed * modifier;
            if (biteRange())
            {
                playerImage.src = player.skins.bite_right;
            }
            else {
                playerImage.src = player.skins.look_right;
            }
        }
    }

    // Are they touching?
    if (
        player.attributes.x <= (monster.x + 60)
        && monster.x <= (player.attributes.x + 60)
        && player.attributes.y <= (monster.y + 60)
        && monster.y <= (player.attributes.y + 60)
    ) {
        ++monstersCaught;
        var audio = new Audio(gulp_sound);
        audio.play();
        reset();
    }
};

//Bite range:
function biteRange(status)
{
    var status = false;
    monsterImage.src = virus.skins.default;
    if (
        player.attributes.x <= (monster.x + 140)
        && monster.x <= (player.attributes.x + 140)
        && player.attributes.y <= (monster.y + 140)
        && monster.y <= (player.attributes.y + 140)
    ) {
        status = true;
        monsterImage.src = virus.skins.scared;
    }
    return status
}
