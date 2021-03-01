var database;
var gameState=0;
var playerCount;
var form;
var game;
var bgImg1;
var player;
var attacker1,attacker2;
var defender1,defender2;
var attacker1Img,attacker2Img;
var defender1Img,defender2Img;
var attackers;
var defenders;
var mapImg;

function preload()
{
    bgImg1 = loadImage("Images/loginImage.jpg");
    attacker1Img = loadImage("Images/hk47.png");
    attacker2Img = loadImage("Images/tyrant-t-103.jpg");
    defender1Img = loadImage("Images/john111.png");
    defender2Img = loadImage("Images/hitman.png");
    mapImg = loadImage("Images/map1.png");

}
function setup()
{
    createCanvas(windowWidth,windowHeight);

    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();

    

}

function draw()
{
    if(gameState === 0)
    {
        imageMode(CENTER);

        image(bgImg1,width/2,height/2,width,height);

    }

    if(playerCount === 4)
    {
        game.update(1);
    }

    if(gameState == 1)
    {
        game.play();
        
    }
    

}