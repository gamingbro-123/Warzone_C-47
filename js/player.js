class Player
{
    constructor()
    {
        this.name = "";
        this.healthBar = 100;
        this.status = 1;
        this.rank = 0;
        this.bullets = 100;
        this.team = "";
        this.index = null;
        this.xpos = 0;
        this.ypos = 0;

    }

    updatePlayer()
    {
        var playerIndex = this.team+"/Player"+this.index;
        database.ref(playerIndex).set({Name : this.name, x : this.xpos, y : this.ypos})


    }

    getCount()
    {

        var playerRef = database.ref("PlayerCount")
        playerRef.on("value", function(data) 
        {
            playerCount = data.val();
        })
    }

    updateCount(count)
    {
        database.ref("/").update({PlayerCount : count})
    }

    getPlayer()
    {

    }

    assignTeam()
    {
        var rand = playerCount;
        if(rand === 1 || rand === 3)
        {
            this.team = "Defenders";
            if(rand === 1)
            this.index = 1;
            else
            this.index = 2;
        }
        else
        {
            this.team = "Attackers";
            if(rand === 2)
            this.index = 1;
            else
            this.index = 2;
        }

        
    }

    static getAttackerInfo()
    {
        var referenceNode = database.ref("Attackers");
        referenceNode.on("value",(data)=>{
            attackers = data.val();
        });


    }

     static getDefenderInfo()
    {
        var referenceNode = database.ref("Defenders");
        referenceNode.on("value",(data)=>{
            defenders = data.val();
        });

    }


}