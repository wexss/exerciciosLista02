function paresParaObjeto(pares) {
    const obj = {};

    for (let i = 0; i < pares.length; i++) {
        const [chave, valor] = pares[i];
        obj[chave] = valor;
    }

    return obj;
}
