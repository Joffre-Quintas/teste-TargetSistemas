// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const word =  prompt('Escreva uma palavra para vê-la ao contrario:')

function wordReverse(word) {
    const wordChanged = [];
    for(let i = 0; i < word.length; i++ ) {
        wordChanged.push(word[(word.length-1)-i]) 
    }

   alert(wordChanged.toString().replaceAll(',',''))
}

wordReverse(word)
