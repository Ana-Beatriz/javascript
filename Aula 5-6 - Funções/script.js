//FUNÇÕES

//FUNÇÕES DECLARATIVAS
function funcao(){
    console.log('Esse mansagem veio de função!');
}
funcao();

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo);
}
mensagem('Tudo','certo!');

function declarativa(){
    console.log('Função declarativa');
}
declarativa();

//EXPRESSÕES DE FUNÇÃO
var funcao2 = function(){
    console.log('Função de expressão');
}
funcao2();

//ARROW FUNCTION
var arrow = () => {
    console.log('Arrow function');
}
arrow();

