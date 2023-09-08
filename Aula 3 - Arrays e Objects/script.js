/* //# COMO DECLARAR UM ARRAY
let array = ['string',10,true,['array1'],['array2']];
console.log(array);

//##SELECIONANDO VALOR ESPECIFICO DENTRO DO ARRAY
let array3 = ['string',10,true,['array1'],['array2']];
console.log(array[3]);

//## MANIPULANDO ARRAYS

//forEach - interage com o array atraves de funções
array.forEach(function(item,index){console.log(item,index)});

//push - adiciona novo item no fim do array
// array.push('novo item');
console.log(array);

//pop- remove um item no fim do array
array3.pop();
console.log(array3);

//shift- remove um item no inicio do array
array3.shift();
console.log(array3);

//unshift- adiciona novo item no inicio do array
array3.unshift('novo item no inicio');
console.log(array3);

//indexOf- retorna o index de um item do array
console.log(array3.indexOf(10));

//splice- remove/substitui um item atraves do index
array.splice(0, 3);
console.log(array);

//slice- retorna parcialmente um array existente atraves do index
let newArray = array3.slice(0, 2);
console.log(newArray); */

//# COMO DECLARAR OBJETOS

let object = {String: 'string', Number: 2, Boolean:true, array:["array1"], objectIntern:{objectIntern:'objectInterno'}};
console.log(object);

//acesasando item por tipo
console.log(object.objectIntern);

//desestruturação do objeto
var string = object.String;
console.log(string);

var boolean = object.Boolean;
console.log(boolean);

var array1 = object.array;
console.log(array1);

var {Number, objectIntern} = object;
console.log(Number, objectIntern);