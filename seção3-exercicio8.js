function somarVendasPorCliente(vendas) {
    return vendas.reduce((acumulador, venda) => {
        const { cliente, total } = venda;

        if (!acumulador[cliente]) {
            acumulador[cliente] = 0;
        }

        acumulador[cliente] += total;

        return acumulador;
    }, {});
}
