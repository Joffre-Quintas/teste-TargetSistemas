// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


const num =  parseInt(prompt('Informe um número para verificar se pertence a sequência de fibonacci:'))


let init = [0,1]
let prox = init[init.length-2] + init[init.length-1]

function verify(num) {
    if(!num || typeof num != 'number'){
        alert(`Recarregue a página e insira um número válido`)
    }else {
        while(prox <= num) {
            prox = init[init.length-2] + init[init.length-1]
            init.push(prox)
            console.log(prox)
            if(num == prox) {
                return alert(`${num} pertence a sequência de fibonacci`)
            }
        }
        alert(`${num} não pertence a sequência de fibonacci!`)
    }
}
verify(num)