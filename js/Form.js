class Form{
    constructor(){
        this.title = createElement("H2");
        this.input = createInput("Name");
        this.greeting = createElement("H3");
        this. button = createButton("play");
    }
display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50,0);
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.greeting.position(displayWidth/2-70,displayHeight/4);
    this.button.position(displayWidth/2+30,displayHeight/2);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount ++;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name);
    })
}
}

