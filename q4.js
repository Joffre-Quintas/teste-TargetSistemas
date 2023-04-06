// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const invoicingPerState = [
    {
        state:"sp",
        invoicing:67836.43
    },
    {
        state:"rj",
        invoicing:36678.66
    },
    {
        state:"mg",
        invoicing:29229.88
    },
    {
        state:"es",
        invoicing:27165.48
    },
    {
        state:"outros",
        invoicing:19849.53
    },
]

function percDistr(list) {
    const totalInvoicing = list.reduce((acc, element) => (acc + element.invoicing), 0);

    const invoicingPerStatePercent = invoicingPerState.map((state) => {
        const percentage = (state.invoicing/totalInvoicing)*100;
        return {
            state: state.state,
            percentage: percentage.toFixed(2) + '%'
        }
    })
    console.log(invoicingPerStatePercent)
}

percDistr(invoicingPerState)