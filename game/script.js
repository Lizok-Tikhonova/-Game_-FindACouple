
const container = document.querySelector(".container")
const gamepole = document.createElement("div")
gamepole.className="gamepole"
// container.append(gamepole)

function startGame(){

    let arrayPoleValues = []
    let poleIgroka = [] // сравнения
    let ansvers = []
    const pole = prompt("Введите количество карточек")

    title()
    timer()
    newPole(pole, arrayPoleValues, poleIgroka, ansvers)
    
    container.append(gamepole)

}

function title(){
    const title = document.createElement("h1")
    title.className="title"
    title.textContent="Найди пару"
    container.append(title)
    return title
}
function timer(){
    let otschet = document.createElement("p")
    container.append(otschet)
    otschet.className="p"
    let nuchOtscheta = 10
    function start() {
        otschet.textContent = nuchOtscheta
        nuchOtscheta --
        if (nuchOtscheta<0){
            let otv = confirm('Время вышло, попробуем еще разок?');
            if(otv == true){
                location.reload ()
            }
          }
          else {
            setTimeout(start, 1000);
          }
    }
    start()
}
function newPole(pole, arrayPoleValues, poleIgroka, ansvers){

    if(pole % 2 == 0){
        for(let i = 0; i < pole/2; i++ ){ 
            arrayPoleValues.push(i)
            arrayPoleValues.push(i)
        }
        arrayPoleValues.sort(()=>Math.random() - 0.5)
        console.log(arrayPoleValues)
    }
    else{
        alert("введите четное число")
        location.reload ()
        // newPole()
    }
    for(let i = 0; i < pole; i++ ){
        let kart = document.createElement("button")
        kart.className="kart"
        kart.textContent="Тык!"
        gamepole.append(kart)
        kart.addEventListener("click", ()=>{  
            kart.innerHTML=arrayPoleValues[i]
            poleIgroka.push(kart)

            setTimeout(()=>{
                for(let i = 0; i<poleIgroka.length; i++){
                    if(poleIgroka.length - 1 == 1){
                        if(poleIgroka[0].textContent == poleIgroka[1].textContent){
                            poleIgroka[0].setAttribute('disabled', true)    
                            poleIgroka[1].setAttribute('disabled', true) 
                            ansvers.push(poleIgroka[0],poleIgroka[1])
                            console.log(ansvers)
                            if(ansvers.length == pole){
                                let otvet = confirm("Игра окончена, сыграем еще раз?");
                                if(otvet == true){
                                    location.reload () //метод обновляет страницы
                                }
                            }
                            poleIgroka.length = 0  
                            
                        }
                        else{
                            poleIgroka[0].textContent = "Тык!"
                            poleIgroka[1].textContent = "Тык!"
                            poleIgroka.length = 0
                        }           
                            
                    }
                             
                }

            }, 900);
            
        })
    } 
}

function sravnenie(){
    
    // for(let i = 0; i<poleIgroka.length; i++){
    //     if(poleIgroka.length - 1 == 1){
    //         if(poleIgroka[0].textContent == poleIgroka[1].textContent){
    //             poleIgroka[0].setAttribute('disabled', true)    
    //             poleIgroka[1].setAttribute('disabled', true) 
    //             poleIgroka.length = 0  
    //         }else{
    //             alert("Попробуй еще")
    //             // poleIgroka[0].setAttribute('disabled', true)    
    //             // poleIgroka[1].setAttribute('disabled', true) 
    //             poleIgroka[0].textContent = "Нажми на меня!"
    //             poleIgroka[1].textContent = "Нажми на меня!"
    //             poleIgroka.length = 0
    //         }           
            
    //     }
             
    // }
}


startGame()
