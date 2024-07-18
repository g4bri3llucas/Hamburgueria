function search() {
    var searchInput = document.getElementById('searchInput').value;
    alert('Você buscou por: ' + searchInput);
    //busca
}

function filterProducts(category) {
    alert('Filtrando itens por: ' + category);
    //categoria
}

function redirectToProductPage(product) {
    window.location.href = product + ".html";
}

function comprar(productName, precoUnitario) {
    var quantidade = document.getElementById('quantidade').value;
    var total = quantidade * precoUnitario;
    var frete;

    if (total > 80) {
        frete = 0;
    } else {// script.js

        function search() {
            var searchInput = document.getElementById('searchInput').value;
            alert('Você buscou por: ' + searchInput);
            //busca
        }
        
        function filterProducts(category) {
            alert('Filtrando itens por: ' + category);
            //lógica para filtrar os produtos com base na categoria
        }
        
        function redirectToProductPage(product) {
            window.location.href = product + ".html";
        }
        
        function comprar(productName, precoUnitario) {
            var quantidade = document.getElementById('quantidade').value;
            var total = quantidade * precoUnitario;
            var frete;
        
            if (total > 80) {
                frete = 0;
            } else {
                frete = 15;
            }
        
            var totalFinal = total + frete;
        
            // Criação dos parâmetros de URL
            var params = new URLSearchParams();
            params.append('produto', productName);
            params.append('quantidade', quantidade);
            params.append('total', total.toFixed(2));
            params.append('frete', frete.toFixed(2));
            params.append('totalFinal', totalFinal.toFixed(2));
        
            // Redirecionamento para a página de agradecimento
            window.location.href = 'agradecimento.html?' + params.toString();
        }
        
        frete = 15;
    }

    var totalFinal = total + frete;

    // Criação dos parâmetros de URL
    var params = new URLSearchParams();
    params.append('produto', productName);
    params.append('quantidade', quantidade);
    params.append('total', total.toFixed(2));
    params.append('frete', frete.toFixed(2));
    params.append('totalFinal', totalFinal.toFixed(2));

    // Redirecionamento para a página de agradecimento
    window.location.href = 'agradecimento.html?' + params.toString();
}