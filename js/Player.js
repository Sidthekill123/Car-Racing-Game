class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = 0;

    }
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })

    }
    updateCount(playerCount){
        var playerCountRef = database.ref("/");
        playerCountRef.update({
        playerCount:playerCount
        });

            
    }
    update(){

        var playerRef = database.ref("players/player" + this.index);
        playerRef.update({
          name:this.name,
          distance:this.distance
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref("players")
        playerInfoRef.on("value",function(data){
            allPlayers = data.val();
        })
    }
}