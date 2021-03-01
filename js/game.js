class Game
{
    constructor()
    {


    }

    getGameState()
    {
        var gameStateRef = database.ref("GameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        }
        )
    }

    update(state)
    {
        database.ref("/").update({GameState : state})

    }

    start()
    {
        if(gameState === 0)
        {
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();

            attacker1 = createSprite(50,100);
            attacker1.addImage(attacker1Img);

            attacker2 = createSprite(200,200);
            attacker2.addImage(attacker2Img);

            defender1 = createSprite(400,300);
            defender1.addImage(defender1Img);

            defender2 = createSprite(600,400);
            defender2.addImage(defender2Img);
            defender2.scale = 0.05;


        }
    }

    play()
    {
        console.log("WARZONE");
        form.hideForm();

        Player.getAttackerInfo();
        Player.getDefenderInfo();

        if(attackers !== undefined)
        {
            imageMode(CENTER);
            image(mapImg,width/2,height/2,width,height);
            drawSprites();

        }
    }

   
}