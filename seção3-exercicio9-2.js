function objetoParaPares(obj) {
    const pares = [];

    for (let chave in obj) {
        if (obj.hasOwnProperty(chave)) {
            pares.push([chave, obj[chave]]);
        }
    }

    return pares;
}
