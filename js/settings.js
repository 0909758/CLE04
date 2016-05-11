/**
 * Created by Aranity on 09/05/2016.
 */
//Settings:


//Player model:
                var player ={
                    skins:{
                        default:"images/player/player-look-right.png",
                        look_left: "images/player/player-look-left.png",
                        look_right:"images/player/player-look-right.png",
                        bite_left: "images/player/player-bite-left.png",
                        bite_right:"images/player/player-bite-right.png"
                    },
                    attributes: {
                        speed: 512,     // movement in pixels per second
                        width: 100,     // width in pixels
                        height: 100,    // height in pixels
                        x:0,            //horizontal spawn point
                        y:0             // vertical spawn point
                    }
                };

//Virus model:
                var virus ={
                    skins:{
                        default:"images/enemy/virus-default.png",
                        scared:"images/enemy/virus-scared.png"
                    },
                    attributes: {
                        speed: 100,     // movement in pixels per second
                        width: 70,      // width in pixels
                        height: 70      // height in pixels
                    }
                };

//Background
                var background = {
                    skin:"images/backgrounds/layer1.png",
                    attributes: {
                        speed: 200,     // movement in pixels per second
                        width: 1500,    // width in pixels
                        height: 900,    // height in pixels
                        x: -250,        // horizontal spawn point
                        y: -150         // horizontal spawn point
                    }
                };

//Middle layer
                var middle_layer = {
                    skin:"images/backgrounds/layer2.png",
                    attributes: {
                        speed: 100,     // movement in pixels per second
                        width: 1500,    // width in pixels
                        height: 900,    // height in pixels
                        x: -250,        // horizontal spawn point
                        y: -150         // vertical spawn point
                    }
                };

//top layer
                var top_layer = {
                    skin:"images/backgrounds/layer3.png",
                    attributes: {
                        speed: 50,      // movement in pixels per second
                        width: 1500,    // width in pixels
                        height: 900,    // height in pixels
                        x: -250,        // horizontal spawn point
                        y: -150         // vertical spawn point
                    }
                };

