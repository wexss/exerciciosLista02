function fatorial(n) {
    if (n < 0) {
        throw new Error("Fatorial não está definido para números negativos.");
    } else if (n === 0) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}
