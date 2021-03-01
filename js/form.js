class Form
{
    constructor()
    {
        this.input = createInput("NAME");

        this.button = createButton("CLICK ME");

        this.greeting = createElement('h3');

        this.image = loadImage("Images/loginImage.jpg");

        this.resetButton = createButton("RESET");


    }

    display()
    {
        this.input.position(width/2-200,height/2-300);

        this.button.position(width/2+10,height/2-300);

        this.button.mousePressed(()=>{
            this.input.hide();
             this.button.hide();  
        var myname = this.input.value();


        this.greeting.html("HELLO " + myname);
        this.greeting.position(width/2,height/2-300);
        player.name = myname;
        playerCount = playerCount+1;
        player.assignTeam();
        player.updateCount(playerCount);
        player.updatePlayer();

        })

        this.resetButton.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);
        })

        this.resetButton.position(width-100,10);

    }

        hideForm()
        {
            this.greeting.hide();
            this.button.hide();

        }



        

       
        

    
     
}