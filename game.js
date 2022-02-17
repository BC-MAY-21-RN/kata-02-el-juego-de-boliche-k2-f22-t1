class JuegoDeBolos {
    constructor(){
        this.rolls=[];
    }
    roll(pins){
        this.rolls.push(pins);
    }

    get score(){
        let score = 0
        let numRoll = 0
        let turno = 1

        for(let f=0; f<10; f++){

            if(this.rolls[numRoll] === 10 && turno <10){
                score += 10+this.rolls[numRoll+1]+this.rolls[numRoll+2]
                numRoll++;
                turno++
                continue;
            } 
            else {

            let rondaPuntos = this.rolls[numRoll] + this.rolls[numRoll+1]

            if( rondaPuntos === 10 && turno <10){
                score += 10 + this.rolls[numRoll+2]
                turno++

            } else{
                if (this.rolls[numRoll] === 10 && turno === 10 ){
                    score += 10+this.rolls[numRoll+1]+this.rolls[numRoll+2] 

                } 

                if  (this.rolls[numRoll+1] === 10 && turno === 10 ) {
                    score += 10+this.rolls[numRoll+1]
                } 
                
                if (this.rolls[numRoll+2] === 10 && turno === 10 ) {
                    score += this.rolls[numRoll]
                }

                score += rondaPuntos
                turno++
            }
            numRoll+=2
        }
    }
    return score
    }
}

let juego = new JuegoDeBolos();
/*  for(let i=0; i<20;i++){
juego.roll(0)
}*/

juego.roll(10)
juego.roll(10)
juego.roll(10)
juego.roll(10)
juego.roll(10)
juego.roll(10)
juego.roll(10)
juego.roll(10)
juego.roll(10)
juego.roll(10)

/*juego.roll(4)
juego.roll(4)
juego.roll(5)
juego.roll(6)
juego.roll(4)
juego.roll(5)
juego.roll(5)
juego.roll(10)
juego.roll(0)
juego.roll(1)
juego.roll(7)
juego.roll(3)
juego.roll(6)
juego.roll(4)
juego.roll(10)
juego.roll(2)
juego.roll(8)
juego.roll(6)*/
/* juego.roll(4)
juego.roll(5) */

console.log(juego.score)
