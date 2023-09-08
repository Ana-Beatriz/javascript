//CALCULADORA COM JAVASCRIPT

//função de calculo
function calculadora() {
    const op = Number(prompt('Escolha uma operação: \n1 - Soma \n2 - Subtração \n3 - Divisao \n4 - Multiplicação \n5 - Divisão Inteira(resto) \n 6 - Potenciação\n'));

    if (!op || op >= 7) {
        alert('Erro - Operação Inválido');
        calculadora();
    } else {

        //declaração de variaveis
        let n1 = Number(prompt('Insira o primeiro numero'));
        let n2 = Number(prompt('Insira o segundo numero'));
        let resultado = 0;

        if (!n1 || !n2) {
            alert('Paremetros inválidos!')
            calculadora();
        } else {

            //funções de operação
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaop();
            }
            function subt() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaop();
            }
            function div() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaop();
            }
            function mult() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaop();
            }
            function resto() {
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaop();
            }
            function poten() {
                resultado = n1 ** n2;
                alert(`${n1} ^ ${n2} = ${resultado}`);
                novaop();
            }
            function novaop() {
                let opc = prompt('Deseja realizar uma nova operação? \n1 - Sim \n2 - Não');

                if (opc == 1) {
                    calculadora();
                } else if (opc == 2) {
                    alert('Fim da execução')
                } else {
                    alert('Opção inválida, tente novamente.')
                    novaop();
                }
            }

            //chamando funções de operação
            switch (op) {
                case 1:
                    soma();
                    break;
                case 2:
                    subt();
                    break;
                case 3:
                    div();
                    break;
                case 4:
                    mult();
                    break;
                case 5:
                    resto();
                    break;
                case 6:
                    poten();
                    break;
            }
        }
    }
}
calculadora();
