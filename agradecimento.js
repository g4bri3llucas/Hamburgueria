document.addEventListener("DOMContentLoaded", function() {
    var params = new URLSearchParams(window.location.search);
    var produto = params.get('produto');
    var quantidade = params.get('quantidade');
    var total = params.get('total');
    var frete = params.get('frete');
    var totalFinal = params.get('totalFinal');

    var detalhes = `
        Produto: ${produto}<br>
        Quantidade: ${quantidade}<br>
        Total: R$ ${total}<br>
        Frete: R$ ${frete}<br>
        Total Final: R$ ${totalFinal}
    `;

    document.getElementById('detalhes-pedido').innerHTML = detalhes;
});
