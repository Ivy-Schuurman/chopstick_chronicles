console.log("hi") //Om te checken of javascript goed is gekoppeld

//Variabelen:
let beef = 0 //Deze variabele zijn voor de array
let snack = 0
let drink = 0 

//Constanten: 
const knopServe = document.querySelector('#serve') //Hier word de button in de html aangeroepen
const plaatjeCustomer = document.querySelector('#customer') //Hier worden de plaatjes in de html aangeroepen
const geluid = document.querySelector('audio')

const beefBack = document.querySelector('#beefBack')
const knopBeef = document.querySelector('#dishBeef') 
const plaatjeBeef = document.querySelector('#imgBeef') 

const snackBack = document.querySelector('#snackBack')
const knopSnack = document.querySelector('#dishSnack')
const plaatjeSnack = document.querySelector('#imgSnack')

const drinkBack = document.querySelector('#drinkBack')
const knopDrink = document.querySelector('#dishDrink')
const plaatjeDrink = document.querySelector('#imgDrink')

const beefArray = ['beef_ramen.png','veggie_ramen.png','no_dish.png'] //Deze arrays zorgen ervoor dat de plaatjes kunnen veranderen
const snackArray = ['snack_1.png', 'snack_2.png', 'no_dish.png']
const drinkArray = ['drink_1.png', 'drink_2.png', 'no_dish.png']

//Functies:
function veranderBeef(){ //Deze functie zorgt ervoor dat het plaatje veranderd wanneer ik op de knop drukt, maar niet verder gaat al ik bij het laatste plaatje bent
    if (beef < beefArray.length - 1){ //array.length - 1 geeft het einde van je array aan
        beef++ //beef = beef + 1
        plaatjeBeef.src = 'img/'+beefArray[beef];            
     }       
}
function terugBeef(){ 
    if (beef <= beefArray.length - 1){ // als 0 <= 3 is dan haalt hij er 1 van af
        beef-- //beef = beef - 1
        if (beef < 0) { //Hier wordt gezegd dat als beef < 0 dan wordt het 0
            beef = 0 
        }
        plaatjeBeef.src = 'img/'+beefArray[beef];            
     }     
}

function veranderSnack(){
    if (snack < snackArray.length - 1){ // "array.length - 1" gevonden via ChatGPT, maar zelf verwerkt (ik begrijp wat hier gebeurd)
        snack++
        plaatjeSnack.src = 'img/'+snackArray[snack]; 
    }
}
function terugSnack(){ 
    if (snack <= snackArray.length - 1){ 
        snack-- 
        if (snack < 0) { 
            snack = 0 
        }
        plaatjeSnack.src = 'img/'+snackArray[snack];           
     }     
}

function veranderDrink(){
    if (drink < drinkArray.length - 1){ 
        drink++
        plaatjeDrink.src = 'img/'+drinkArray[drink];
    }    
}
function terugDrink(){ 
    if (drink <= drinkArray.length - 1){ 
        drink-- 
        if (drink < 0) { 
            drink = 0 
        }
        plaatjeDrink.src = 'img/'+drinkArray[drink];           
     }     
}

function speelGeluid(){ 
    geluid.play() //Bron audio: https://pixabay.com/nl/sound-effects/search/bel/ --> Ik heb dit stukje code (GELUID.PLAY) van ChatGPT, maar het het op een andere manier toegepast (ik weet wat hier gebeurd)
}

function serveOrder(){ //Deze functie zorgt ervoor dat het plaatje juist veranderd
    speelGeluid() //Hier wordt de functie aangeroepen, staat hier anders heb je twee EventListeners aan 1 knop gekoppeld
    if (beef == 0 && snack == 2 && drink == 1){
        plaatjeCustomer.src = 'img/customer_happy.png'
    } else {
       plaatjeCustomer.src = 'img/customer_sad.png'
    }
}

//EventListeners:
knopBeef.addEventListener("click", veranderBeef) //Deze zorgen ervoor dat de functies worden uitgevoerd als je op de knop drukt
beefBack.addEventListener("click", terugBeef)

knopSnack.addEventListener("click", veranderSnack)
snackBack.addEventListener("click", terugSnack)

knopDrink.addEventListener("click", veranderDrink)
drinkBack.addEventListener("click", terugDrink)

knopServe.addEventListener("click", serveOrder)


// Onderzoek:
// Hoe voeg je geluid to aan een knop? Met een EVENTLISTENER & GELUID.PLAY => gevonden via ChatGPT
// Hoe controleer je of je bij het einde van een array bent? Met "ARRAY.LENGTH - 1" => gevonden via ChatGPT 




