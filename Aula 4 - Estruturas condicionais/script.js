var jog1 = 0;
var jog2 = 0;
var placar;

//NINHO DE IFs
if(jog1 > 0){
    if (jog1 > 0 && jog2 < jog1){
        console.log('Jogador 1 marcou ponto!');
        placar = jog1 > jog2;
    } else if(jog2 > 0 && jog1 < jog2){
        console.log('Jogador 2 marcou ponto!');
        placar = jog2 > jog1;
    }else if(jog1 > 0 && jog2 > 0 && jog1 == jog2){
        console.log('Empate');
        placar = jog2 == jog1;
    }else {
        console.log('Ninguém marcou ponto');
    } 
}

//IF TERNARIO
jog1 >= 0 && jog2 >= 0 ? console.log('Os jogadores são válidos') : console.log('Jogadores inválidos');

//SWITCH CASE
switch(placar){
    case placar = jog1 > jog2:
        console.log('O Jogador 1 ganhou');
        break;
    case placar = jog2 > jog1:
        console.log('O Jogador 2 ganhou');
        break;
    default:
    console.log('Ninguém ganhou')
}

let array = ['v1','v2','v3','v4','v5',];

let object = {prop1:'valor1', prop2:'v2', prop3:'v3',}

//LAÇO DE REPETIÇÃO FOR
for(let index = 0;index < array.length;index++){
    console.log(index);
}

//LAÇO DE REPETIÇÃO FOR IN (repetição a partir de propriedade) 
//com array
for(let i in array){
    console.log(i)
}

//com object
for(i in object){
    console.log(i)
}

//LAÇO DE REPETIÇÃO FOR OF (repetição a partir de valor) 
//com array
for(i of array){
    console.log(i);
}

//com object - não recomendado
for(i of object.prop1){
    console.log(i);
} 

var a = 0;

//LAÇO DE REPETIÇÃO WHILE
while(a < 10){
    a++;
    console.log(a);     
}
a = 0
do{
    a++;
    console.log(a); 
} while (a < 10);