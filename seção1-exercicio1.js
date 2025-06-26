function ehDataValida(dia, mes, ano) {

    if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) {
        return false;
    }

    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) {
        return false;
    }

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        diasPorMes[1] = 29;
    }

    return dia <= diasPorMes[mes - 1];
}
