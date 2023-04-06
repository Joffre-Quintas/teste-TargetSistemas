// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoDiario = require('./faturamentoDiario.json')

function minorAndMajorInvoicing(list) {
    const listFiltered = list.filter(invoicingPerDay => invoicingPerDay.valor != 0)
    let minorInvoicing = listFiltered[0].valor
    let majorInvoicing = listFiltered[0].valor

    listFiltered.forEach(invoicingValid => {
        if(invoicingValid.valor < minorInvoicing){
            minorInvoicing = invoicingValid.valor
        } 
        if(invoicingValid.valor > majorInvoicing) {
            majorInvoicing = invoicingValid.valor
        }
    });

    return console.log(`O menor valor faturado foi: ${minorInvoicing} e o maior foi: ${majorInvoicing}`)
}

minorAndMajorInvoicing(faturamentoDiario)