
let allCards = [
    ['kupa as',"ace_of_hearts.png",11,1],
    ['kupa 2',"2_of_hearts.png",2],
    ['kupa 3',"3_of_hearts.png",3],
    ['kupa 4',"4_of_hearts.png",4],
    ['kupa 5',"5_of_hearts.png",5],
    ['kupa 6',"6_of_hearts.png",6],
    ['kupa 7',"7_of_hearts.png",7],
    ['kupa 8',"8_of_hearts.png",8],
    ['kupa 9',"9_of_hearts.png",9],
    ['kupa 10',"10_of_hearts.png",10],
    ['kupa vale',"jack_of_hearts2.png",10],
    ['kupa kız',"queen_of_hearts2.png",10],
    ['kupa papaz',"king_of_hearts2.png",10],

    ['karo as',"ace_of_diamonds.png",11,1],
    ['karo 2',"2_of_diamonds.png",2],
    ['karo 3',"3_of_diamonds.png",3],
    ['karo 4',"4_of_diamonds.png",4],
    ['karo 5',"5_of_diamonds.png",5],
    ['karo 6',"6_of_diamonds.png",6],
    ['karo 7',"7_of_diamonds.png",7],
    ['karo 8',"8_of_diamonds.png",8],
    ['karo 9',"9_of_diamonds.png",9],
    ['karo 10',"10_of_diamonds.png",10],
    ['karo vale',"jack_of_diamonds2.png",10],
    ['karo kız',"queen_of_diamonds2.png",10],
    ['karo papaz',"king_of_diamonds2.png",10],

    ['maça as',"ace_of_spades.png",11,1],
    ['maça 2',"2_of_spades.png",2],
    ['maça 3',"3_of_spades.png",3],
    ['maça 4',"4_of_spades.png",4],
    ['maça 5',"5_of_spades.png",5],
    ['maça 6',"6_of_spades.png",6],
    ['maça 7',"7_of_spades.png",7],
    ['maça 8',"8_of_spades.png",8],
    ['maça 9',"9_of_spades.png",9],
    ['maça 10',"10_of_spades.png",10],
    ['maça vale',"jack_of_spades2.png",10],
    ['maça kız',"queen_of_spades2.png",10],
    ['maça papaz',"king_of_spades2.png",10],

    ['sinek as',"ace_of_clubs.png",11,1],
    ['sinek 2',"2_of_clubs.png",2],
    ['sinek 3',"3_of_clubs.png",3],
    ['sinek 4',"4_of_clubs.png",4],
    ['sinek 5',"5_of_clubs.png",5],
    ['sinek 6',"6_of_clubs.png",6],
    ['sinek 7',"7_of_clubs.png",7],
    ['sinek 8',"8_of_clubs.png",8],
    ['sinek 9',"9_of_clubs.png",9],
    ['sinek 10',"10_of_clubs.png",10],
    ['sinek vale',"jack_of_clubs2.png",10],
    ['sinek kız',"queen_of_clubs2.png",10],
    ['sinek papaz',"king_of_clubs2.png",10]   
]

const cardsDiv = document.getElementById("cardsPc")

const getCardButton = document.getElementById("getCardButton")
const standButton = document.getElementById("standButton")
const restartGameButton = document.getElementById("restartGame")
const startGameButton = document.getElementById("startGame")
const totalBetInput = document.getElementById("totalBet")
const buttonsDiv = document.getElementById("buttonsDiv")
const imgDiv = document.getElementById("imgDiv")
const allBetButton = document.getElementById("allBet")

const chip50 = document.getElementById("chip50")
const chip20 = document.getElementById("chip20")
const chip100 = document.getElementById("chip100")

let cardUserDiv = document.getElementById("cardsUser")
let cardsPcDiv = document.getElementById("cardsPc")

const images = document.getElementsByTagName('img')

const totalBetDiv = document.getElementById("totalBetText")

const betDiv = document.getElementById("betText")

const dealButton = document.getElementById("dealButton")

const containerPc = document.getElementById("pc")

const cardUserValueDiv = document.getElementById("cardUserValue")
const cardPcValueDiv = document.getElementById("cardPcValue")

const cancelButton = document.getElementById("cancelButton")
const quitButton = document.getElementById("quitButton")

let totalBetArray = []

let copyAllCards = [...allCards]

let userCards = []
let pcCards = []
let userSumValueOfCards = 0
let pcSumValueOfCards = 0

let wonNumber = 0
let loseNumber = 0
let drawNumber = 0
let countPc = 2
let totalBet = 1000

let currentBet = 0

let gameOverBool = false




let pcImg1 
let pcImg2 
let userImg1 
let userImg2 

let imgDefaultName = "PNG-cards-1.3/"





function shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }


let mixedCards = shuffleArray(allCards)






function dealCards(count,player = []) {
    for(let i = 0; i < count; i++){
        player.push(mixedCards[0])
       mixedCards.shift()
    } 
}


function sumValueOfCards(cards) {
    let sum  = 0
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i][2]   
    }
   return sum
}

function gameStart(){
  pcImg1 = document.createElement('img')
  pcImg2 = document.createElement('img')
  userImg1 = document.createElement('img')
  userImg2 = document.createElement('img')
  cardsPcDiv.append(pcImg1)
  cardsPcDiv.append(pcImg2)
  cardUserDiv.append(userImg1)
  cardUserDiv.append(userImg2)
  dealCards(2,pcCards)
  dealCards(2,userCards)
  userSumValueOfCards = sumValueOfCards(userCards,userSumValueOfCards)
  pcSumValueOfCards = sumValueOfCards(pcCards,pcSumValueOfCards)
  
  pcImg1.src = imgDefaultName+pcCards[0][1]
  pcImg2.src = imgDefaultName+"back-side.png"
  userImg1.src = imgDefaultName+userCards[0][1]
  userImg2.src = imgDefaultName+userCards[1][1]
  
  restartGameButton.style.display = "none"

  if(userSumValueOfCards >= 21){
    standFunction()
    getCardButton.disabled = "true"
    standButton.disabled = "true" 
    console.log(pcSumValueOfCards)
    displayValueCards(cardPcValueDiv,pcSumValueOfCards)
  }
  else{
    standButton.disabled = ""
    getCardButton.disabled = ""
    cardPcValueDiv.textContent = pcSumValueOfCards - pcCards[1][2]
  }
  totalBetDiv.textContent = "Total Money : " + totalBet
  betDiv.textContent = "Bet : " + currentBet
  buttonsDiv.style.display = ""
  dealButton.style.display = "none"
  imgDiv.style.display = "none"
  displayValueCards(cardUserValueDiv,userSumValueOfCards)
  
 
}








let countUser = 2
function getCard(){
    dealCards(1,userCards)
    let img = document.createElement('img')
    img.src = imgDefaultName+userCards[countUser][1]
    cardUserDiv.append(img)
    userSumValueOfCards = sumValueOfCards(userCards,userSumValueOfCards)      
    console.log(userSumValueOfCards) 
    console.log(userCards[2][0])
    countUser ++
    
    if(userSumValueOfCards >=21){
        for(let i = 0; i < userCards.length; i++){
            if(userCards[i][0] == "maça as" || userCards[i][0] == "kupa as" || userCards[i][0] == "sinek as" || userCards[i][0] == "karo as"){
                userSumValueOfCards = userSumValueOfCards - 10
            }
        }
       
    }
    
    if(userSumValueOfCards >=21){
        getCardButton.disabled = "false"
        standFunction()
    }

    displayValueCards(cardUserValueDiv,userSumValueOfCards)
  
}


function stand(){
    standFunction()
}


function whoWin(){
    if(userSumValueOfCards > 21){
        console.log("kaybettin")
        loseNumber++
    }
    else if(userSumValueOfCards == 21 && pcSumValueOfCards !=21 && userCards.length == 2){
        console.log("kazandın")
        wonNumber++
        totalBet += (currentBet * 2.5)
    }
    else if(userSumValueOfCards == pcSumValueOfCards && userSumValueOfCards != 21){
        console.log("berabere")
        drawNumber++
        totalBet += currentBet
    }
    else if(userSumValueOfCards > pcSumValueOfCards && userSumValueOfCards <=21){
        console.log("kazandın")
        wonNumber++
        totalBet += (currentBet * 2)
    }
    else if(pcSumValueOfCards > 21 && userSumValueOfCards <=21){
        console.log("kazandın")
        wonNumber++
        totalBet += (currentBet * 2)
    }
    else{
        console.log("kaybettin")
        loseNumber++
    }
    
}

function standFunction(){
    pcImg2.src = imgDefaultName+pcCards[1][1]
    while(pcSumValueOfCards <=16){
        dealCards(1,pcCards)
        let img = document.createElement('img')
        img.src = imgDefaultName+pcCards[countPc][1]
        cardsPcDiv.append(img)
        pcSumValueOfCards = sumValueOfCards(pcCards,pcSumValueOfCards)   
        countPc ++   
        if(pcSumValueOfCards >21){
            for(let i = 0; i < pcCards.length; i++){
                if(pcCards[i][0] == "maça as" || pcCards[i][0] == "kupa as" || pcCards[i][0] == "sinek as" || pcCards[i][0] == "karo as"){
                    pcSumValueOfCards = pcSumValueOfCards - 10
                }
            } 
        }
    }

    whoWin()
    console.log(pcSumValueOfCards)
    console.log(userSumValueOfCards)
    standButton.disabled = "true"
    getCardButton.disabled = "true"
    restartGameButton.style.display = ""
    totalBetDiv.textContent = "Total Money : " + totalBet
    betDiv.textContent = "Bet : " + currentBet
    gameOver(totalBet)
    displayValueCards(cardPcValueDiv,pcSumValueOfCards)
}


function restartGame(){
    dealChip()   
    dealButton.disabled = "true"
    allBetButton.disabled = ""
    document.getElementById("allBet").style.display = ""
    quitButton.style.display = ""
    document.body.style.backgroundImage = "url('bj-background-main-3.jpeg')";
}



function readyGame(){
    window.location.assign("index.html") 
}



function loadPage(){
    totalBetDiv.textContent = "Total Money : " + totalBet
    betDiv.textContent = "Bet : " + currentBet
    buttonsDiv.style.display = "none"
    dealButton.disabled = "true"
    cancelButton.disabled = "true"
}




chip50.addEventListener('click',function(){
    console.log("50 tıklandı")
    if(totalBet >= 50){
        totalBet -= 50
        currentBet += 50
        dealButton.disabled = ""
    }
    betDiv.textContent = "Bet : " + currentBet
    totalBetDiv.textContent = "Total Money : " + totalBet
    cancelButton.disabled = ""
    
})

chip20.addEventListener('click',function(){
    console.log("20 tıklandı")
    if(totalBet >= 20){
        totalBet -= 20
        currentBet += 20
        dealButton.disabled = ""
    }
    betDiv.textContent = "Bet : " + currentBet
    totalBetDiv.textContent = "Total Money : " + totalBet
    cancelButton.disabled = ""
    
})
   

chip100.addEventListener('click',function(){
    console.log("100 tıklandı")
    if(totalBet >= 100){
        totalBet -= 100
        currentBet += 100
        dealButton.disabled = ""
    }
    betDiv.textContent = "Bet : " + currentBet
    totalBetDiv.textContent = "Total Money : " + totalBet
    cancelButton.disabled = ""
   
})

chip100.addEventListener('contextmenu',function(){
    console.log("right click")
    if(currentBet >= 100){
        totalBet += 100
        currentBet -= 100
    }
    betDiv.textContent = "Bet : " + currentBet
    totalBetDiv.textContent = "Total Money : " + totalBet
    if(currentBet == 0){
        dealButton.disabled = "true"
    }
    cancelButton.disabled = ""
})

chip50.addEventListener('contextmenu',function(){
    if(currentBet >= 50){
        totalBet += 50
        currentBet -= 50
    }
    betDiv.textContent = "Bet : " + currentBet
    totalBetDiv.textContent = "Total Money : " + totalBet
    if(currentBet == 0){
        dealButton.disabled = "true"
    }
    cancelButton.disabled = ""
})

chip20.addEventListener('contextmenu',function(){
    if(currentBet >= 20){
        totalBet += 20
        currentBet -= 20
    }
    betDiv.textContent = "Bet : " + currentBet
    totalBetDiv.textContent = "Total Money : " + totalBet
    if(currentBet == 0){
        dealButton.disabled = "true"
    }
    cancelButton.disabled = ""
})



function dealChip(){
   document.getElementById("deleteDeal").style.display = "none"
   dealButton.style.display = ""
   imgDiv.style.display = ""
   totalBetDiv.textContent = "Total Money : " + totalBet
   currentBet = 0
   betDiv.textContent = "Bet : " + currentBet
   document.getElementById("cancelButton").style.display = ""
   
}



function dealButtonFunction(){
    console.log("mixed cards:"+mixedCards.length)
    userCards = []
    pcCards = []
    userSumValueOfCards = 0
    pcSumValueOfCards = 0
    countPc = 2
    countUser = 2
    document.querySelector(".remove").innerHTML = "";
    document.querySelector(".remove1").innerHTML = "";
    restartGameButton.style.display = "none"
    gameStart()
    
    if(mixedCards.length < 10){
        let newMixedCards = shuffleArray(copyAllCards)
        mixedCards = mixedCards.concat(newMixedCards)
    }
    betDiv.textContent = "Bet : " + currentBet
    totalBetDiv.textContent = "Total Money : " + totalBet
    document.getElementById("deleteDeal").style.display = ""
    document.getElementById("cancelButton").style.display = "none"
    document.getElementById("allBet").style.display = "none"
    quitButton.style.display = "none"
    document.body.style.backgroundImage = "url('bj-background-img-2.jpeg')";
}


function cancelDeal(){
    totalBet += currentBet
    currentBet = 0
    betDiv.textContent = "Bet : " + currentBet
    totalBetDiv.textContent = "Total Money : " + totalBet
    dealButton.disabled = "true"
    allBetButton.disabled = ""
    cancelButton.disabled = "true"
}

allBetButton.addEventListener('click',function(){
    currentBet = totalBet + currentBet
    totalBet = 0
    betDiv.textContent = "Bet : " + currentBet
    totalBetDiv.textContent = "Total Money : " + totalBet
    dealButton.disabled = ""
    allBetButton.disabled = "true"
    cancelButton.disabled = ""
})

function gameOver(totalBet){
    if(totalBet == 0){
        restartGameButton.style.display = "none"
        let gameOverButton = document.createElement('button')
        gameOverButton.textContent = "MAIN MENU"
        gameOverButton.classList.add("button-45")
        buttonsDiv.append(gameOverButton)
        gameOverButton.addEventListener('click',function(){
            window.location.assign("MainMenu.html") 
        })
    }
}


function displayValueCards(div,player){
    div.textContent = player
}


quitButton.addEventListener('click',function(){
    window.location.assign("MainMenu.html") 
})
   
   

































