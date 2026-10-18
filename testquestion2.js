
let pokemons = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];
let yPos;

function setup(){
    createCanvas(200, 300);
    background(0)
    fill("pink");
    textAlign(CENTER, CENTER)
    textSize(20)
    yPos = 100;

    for (let i = 0; i < 5; i++) {
        text(pokemons[i], width / 2, yPos += 20)
    }
}