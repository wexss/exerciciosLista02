function enviarBusca(texto) {
    console.log("Buscando por:", texto);
}

const buscaDebounce = debounce(enviarBusca, 1000);

// Simulando chamadas rápidas
buscaDebounce("c");
buscaDebounce("ca");
buscaDebounce("car");
buscaDebounce("carr");
buscaDebounce("carro"); // Apenas esta será executada após 1 segundo sem novas chamadas
