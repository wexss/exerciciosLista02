function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const chave = JSON.stringify(args);

        if (cache.has(chave)) {
            console.log("Resultado vindo do cache.");
            return cache.get(chave);
        }

        const resultado = fn.apply(this, args);
        cache.set(chave, resultado);
        return resultado;
    };
}
