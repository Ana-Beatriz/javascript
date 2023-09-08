//# DECLARAÇÃO DE VARIAVEIS - TIPOS PRIMITIVOS

//## BOOLEAN 
var vOuF = false;
    console.log(vOuF);
    console.log(typeof(vOuF));


//## NUMBER
var numeroQualquer = 4;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

//## STRING
var nome = 'Ana';
console.log(nome);
console.log(typeof(nome));


//# COMO DECLARAR

//##o tipo VAR(global e local) permite alteração após a declaração
var variavel = 'Ana';
variavel = 'Mello';
console.log(variavel);

//##o tipo LET(local) permite alteração após a declaração
let nome2;
nome2 = 'Ana';
console.log(nome2);

//##o tipo CONST(local) NÃO permite alteração após a declaração e não pode iniciar vazia
const constante = 'Constante';
console.log(constante);

//# EXEMPLO DE FUNCIONAMENTO DE VARIAVEL REFERENTE A ESCOPO GLOBAL E LOCAL

//##GLOBAL
var escopoGlobal = 'Global';
console.log(escopoGlobal);

//##LOCAL
function escopoLocal (){
    let escopoLocalInterno = 'Local';
    console.log(escopoLocalInterno);
}

escopoLocal();


//# DIFERENÇAS DE ATRIBUIÇÃO (=), COMPARAÇÃO (==) E COMPARAÇÃO IDENTICA (===)

//## ATRIBUIÇÃO
var atribuicao = 0;

//## COMPARAÇÃO
var comparacao = '0' == 0;
console.log(comparacao);

//## COMRAÇÃO IDENTICA
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);